import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ListItem } from '../../model/ListItem';

interface TasksState {
  tasks: ListItem[];
  filter: 'All' | 'Active' | 'Completed';
}

const initialState: TasksState = {
  tasks: [],
  filter: 'All',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask = new ListItem(Date.now(), action.payload);
      state.tasks.push(newTask);
    },
    removeTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) task.checked = !task.checked;
    },
    setFilter: (state, action: PayloadAction<'All' | 'Active' | 'Completed'>) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, removeTask, toggleTask, setFilter } = tasksSlice.actions;
export default tasksSlice.reducer;
