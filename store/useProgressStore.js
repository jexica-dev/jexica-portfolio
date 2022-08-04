import create from "zustand/react";

export const useProgressStore = create((set) => ({
  isAnimating: false,
  setIsAnimating: (isAnimating) => set(() => ({ isAnimating })),
}));
