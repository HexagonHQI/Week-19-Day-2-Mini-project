import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../tasksSlice';
import { RootState } from '../../../app/store';

const TasksFilterButtons: React.FC = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state: RootState) => state.tasks.filter);

  return (
    <div className="tasks-filter-buttons">
      {['All', 'Active', 'Completed'].map(filter => (
        <button
          key={filter}
          className={currentFilter === filter ? 'active' : ''}
          onClick={() => dispatch(setFilter(filter as 'All' | 'Active' | 'Completed'))}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default TasksFilterButtons;
