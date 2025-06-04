import { create } from 'zustand';

interface State {
  startDate: Date | null;
  endDate: Date | null;
}

type Actions = {
  setStartDate: (date: Date) => void;
  setEndDate: (date: Date) => void;
};

export const store = create<State & Actions>()((set) => ({
  startDate: null,
  endDate: null,
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
}));
