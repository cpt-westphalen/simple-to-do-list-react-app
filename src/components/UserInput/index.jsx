import { useState } from 'react';

export default function UserInput({ addTask }) {
	const [inputTask, setInputTask] = useState('');

	const handleClick = () => {
		//check if not empty
		if (inputTask.trim()) addTask(inputTask);
		//clean up the input
		document.getElementById('input-field').value = '';
		setInputTask('');
	};

	const handleInputChange = (e) => {
		setInputTask(e.target.value);
	};

	const handleKey = (k) => {
		if (k.key === 'Enter') {
			k.preventDefault();
			handleClick();
		}
	};

	return (
		<div className="inputs">
			<input
				id="input-field"
				onKeyDown={handleKey}
				onChange={handleInputChange}
				type="text"
			/>
			<button onClick={handleClick}>Add task</button>
		</div>
	);
}
