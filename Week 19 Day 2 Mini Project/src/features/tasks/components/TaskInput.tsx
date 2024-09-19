import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../tasksSlice';

const TasksInput: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (inputValue.trim()) {
      dispatch(addTask(inputValue));
      setInputValue('');
    }
  };

  return (
    <div className="tasks-input">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task..."
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default TasksInput;
