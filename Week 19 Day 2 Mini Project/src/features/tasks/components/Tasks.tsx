import React from 'react';
import TasksInput from './TasksInput';
import TasksList from './TasksList';
import TasksFilterButtons from './TasksFilterButtons';
import TasksTitle from './TasksTitle';

const Tasks: React.FC = () => {
  return (
    <div className="tasks">
      <TasksTitle />
      <TasksInput />
      <TasksFilterButtons />
      <TasksList />
    </div>
  );
};

export default Tasks;
