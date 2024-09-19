import React from 'react';
import Tasks from './features/tasks/components/Tasks';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Task Management App</h1>
      <Tasks />
    </div>
  );
};

export default App;
