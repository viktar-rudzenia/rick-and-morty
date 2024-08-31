import { create } from 'zustand';

export const useStore = create((set) => ({
  someStore: 0,
  setReportingState: () => set((newSomeStore: number) => ({ someStore: newSomeStore })),
}));
