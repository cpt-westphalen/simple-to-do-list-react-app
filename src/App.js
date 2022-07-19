import './App.css';
import { useState } from 'react';
import TaskList from './components/TaskList';
import UserInput from './components/UserInput';
import Signature from './components/Signature';

export default function App() {
	const [tasklist, setTasklist] = useState(
		JSON.parse(localStorage.getItem('tasklist')) || []
	);

	const saveTasklistToLocalStorage = () => {
		localStorage.setItem('tasklist', JSON.stringify(tasklist));
	};

	const addTask = (newTask) => {
		setTasklist([
			...tasklist,
			{ id: Math.floor(Math.random() * 1e5), text: newTask, check: false },
		]);
	};

	const handleClickClear = () => {
		setTasklist(tasklist.filter((task) => !task.check));
	};

	return (
		<div className="App">
			<h1>Simple To-do</h1>
			<p>Today I'm going to... </p>
			<UserInput addTask={addTask} />
			<TaskList
				tasklist={tasklist}
				saveTasklistToLocalStorage={saveTasklistToLocalStorage}
			/>
			{tasklist.length > 0 && (
				<button className="clear-done-btn" onClick={handleClickClear}>
					Clear Done
				</button>
			)}
			<Signature />
		</div>
	);
}
