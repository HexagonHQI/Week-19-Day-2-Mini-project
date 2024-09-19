import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';

const TasksTitle: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  return (
    <h2>{`Total Tasks: ${tasks.length}`}</h2>
  );
};

export default TasksTitle;
