import { screen, render, rerender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskItem from '.';

describe('<TaskItem />', () => {
	const checkedTask = {
		id: 1,
		text: 'This is the checked task text',
		check: true,
	};
	const task = {
		id: 2,
		text: 'This is the task text',
		check: false,
	};
	const emptyTask = {};
	const badTask = {
		text: () => {
			return Math.round(Math.random() * 10) > 5
				? null
				: { text: 'Bad Task Text' };
		},
		check: () => {
			return Math.round(Math.random() * 10) > 5 ? 125 : null;
		},
	};

	const saveTasklistToLocalStorage = jest.fn();

	beforeEach(() => {
		task.check = false;
		checkedTask.check = true;
	});

	it('should render without errors', () => {
		render(<TaskItem task={emptyTask} />);
	});

	it('should have text', () => {
		render(<TaskItem task={task} />);
		expect(screen.getByText(/\w+/)).toBeVisible();
	});

	it('should have an enabled, visible checkbox', () => {
		render(<TaskItem task={emptyTask} />);
		expect(screen.getByRole('checkbox')).toBeVisible();
		expect(screen.getByRole('checkbox')).toBeEnabled();
	});

	it.todo('text should match props');
	it.todo('check value should match props');

	it('should be clickable', async () => {
		render(
			<TaskItem
				task={task}
				saveTasklistToLocalStorage={saveTasklistToLocalStorage}
			/>
		);
		await userEvent.click(screen.getByText(/\w+/));
	});
	it('initial task.check value should trigger strike-through', () => {
		render(
			<TaskItem
				task={task}
				saveTasklistToLocalStorage={saveTasklistToLocalStorage}
			/>
		);
		expect(screen.getByRole('checkbox')).not.toBeChecked();
		expect(screen.getByText(/\w+/)).toHaveStyle('text-decoration: none');

		render(
			<TaskItem
				task={checkedTask}
				saveTasklistToLocalStorage={saveTasklistToLocalStorage}
			/>
		);
		expect(screen.getAllByRole('checkbox')[1]).toBeChecked();
		expect(screen.getAllByText(/\w+/)[1]).toHaveStyle(
			'text-decoration: line-through'
		);
	});
	it('Clicking checkbox should trigger strike-through', async () => {
		render(
			<TaskItem
				task={task}
				saveTasklistToLocalStorage={saveTasklistToLocalStorage}
			/>
		);
		expect(screen.getByRole('checkbox')).not.toBeChecked();
		expect(screen.getByText(/\w+/)).toHaveStyle('text-decoration: none');

		await userEvent.click(screen.getByRole('checkbox'));

		expect(screen.getByRole('checkbox')).toBeChecked();
		expect(screen.getByText(/\w+/)).toHaveStyle(
			'text-decoration: line-through'
		);
	});
	it('Clicking on text should trigger strike-through', async () => {
		render(
			<TaskItem
				task={task}
				saveTasklistToLocalStorage={saveTasklistToLocalStorage}
			/>
		);
		expect(screen.getByRole('checkbox')).not.toBeChecked();
		expect(screen.getByText(/\w+/)).toHaveStyle('text-decoration: none');

		await userEvent.click(screen.getByText(/\w+/));

		expect(screen.getByRole('checkbox')).toBeChecked();
		expect(screen.getByText(/\w+/)).toHaveStyle(
			'text-decoration: line-through'
		);
	});
});
