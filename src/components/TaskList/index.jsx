import TaskItem from '../TaskItem';
import { useEffect } from 'react';

export default function TaskList({ tasklist, saveTasklistToLocalStorage }) {
	useEffect(() => {
		saveTasklistToLocalStorage();
	});
	if (tasklist.length > 0) {
		return (
			<div className="tasklist">
				{tasklist.map((task) => (
					<TaskItem
						key={task.id + '-key'}
						task={task}
						saveTasklistToLocalStorage={saveTasklistToLocalStorage}
					/>
				))}
			</div>
		);
	}
}
