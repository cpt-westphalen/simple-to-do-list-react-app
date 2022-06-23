import TaskItem from "./TaskItem.js";
import { useEffect } from "react";

export default function TaskList({
  className,
  tasklist,
  saveTasklistToLocalStorage
}) {
  useEffect(() => {
    saveTasklistToLocalStorage();
  });
  if (tasklist.length > 0) {
    return (
      <div className={className}>
        {tasklist.map((task) => (
          <TaskItem
            key={task.id + "-key"}
            task={task}
            saveTasklistToLocalStorage={saveTasklistToLocalStorage}
          />
        ))}
      </div>
    );
  }
}
