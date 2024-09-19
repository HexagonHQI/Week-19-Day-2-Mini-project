import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import TaskItem from './TaskItem';

const TasksList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const filter = useSelector((state: RootState) => state.tasks.filter);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'Active') return !task.checked;
    if (filter === 'Completed') return task.checked;
    return true; // 'All'
  });

  return (
    <div className="tasks-list">
      {filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TasksList;
