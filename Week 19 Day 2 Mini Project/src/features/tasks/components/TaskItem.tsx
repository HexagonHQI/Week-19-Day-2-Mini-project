import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, removeTask } from '../tasksSlice';
import { ListItem } from '../../../model/ListItem';

interface TaskItemProps {
  task: ListItem;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.checked}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      <span className={task.checked ? 'completed' : ''}>{task.item}</span>
      <button onClick={() => dispatch(removeTask(task.id))}>Remove</button>
    </div>
  );
};

export default TaskItem;
