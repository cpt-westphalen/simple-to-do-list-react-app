import { useState } from 'react';

export default function TaskItem({ task, saveTasklistToLocalStorage }) {
	const [isChecked, setCheck] = useState(!!task.check);

	function handleCheck() {
		task.check = !task.check;
		setCheck(task.check);
		// checks if checkbox is checked correctly
		if (document.getElementById(task.id).checked !== task.check) {
			document.getElementById(task.id).checked = task.check;
		}
		saveTasklistToLocalStorage();
	}

	return (
		<div className="task-item" onClick={handleCheck}>
			<input
				id={task.id}
				type="checkbox"
				name={task.text}
				value={task.text}
				defaultChecked={isChecked}
			/>
			<p
				style={{
					textDecoration: isChecked ? 'line-through' : 'none',
				}}
			>
				{task.text}
			</p>
		</div>
	);
}
