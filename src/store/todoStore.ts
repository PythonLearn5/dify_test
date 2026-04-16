import { create } from 'zustand';

type Filter = 'all' | 'completed' | 'active';

interface TodoState {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

export const useTodoStore = create<TodoState>((set) => ({
  filter: 'all',
  setFilter: (filter) => set({ filter }),
}));
