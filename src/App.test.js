import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
// 	render(<App />);
// 	const linkElement = screen.getByText(/learn react/i);
// 	expect(linkElement).toBeInTheDocument();
// });

describe('<App /> component', () => {
	it('should render Simple To-Do h1 heading', () => {
		const { getByTestId } = render(<App />);
		const heading = getByTestId('main-heading');
		expect(heading).toBeVisible();
		expect(heading.tagName).toBe('H1');
		expect(screen.getAllByText(/Simple To-Do/i)[0]).toBeVisible();
	});
	it('should not display the clear tasks button at start', () => {
		const { queryByTestId } = render(<App />);
		expect(queryByTestId('clear-done-btn')).toBeNull();
	});
});
