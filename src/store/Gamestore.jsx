// stores/gameStore.jsx

import { create } from "zustand";
import { persist } from "zustand/middleware";

const clamp = (value) => Math.max(0, Math.min(100, value));

export const useGameStore = create(
  persist(
    (set) => ({
      energy: 90,
      connection: 30,
      hope: 40,
      stress: 80,

      setEnergy: (energy) => set({ energy: clamp(energy) }),

      setConnection: (connection) => set({ connection: clamp(connection) }),

      setHope: (hope) => set({ hope: clamp(hope) }),

      setStress: (stress) => set({ stress: clamp(stress) }),

      updateEnergy: (amount) =>
        set((state) => ({
          energy: clamp(state.energy + amount),
        })),

      updateConnection: (amount) =>
        set((state) => ({
          connection: clamp(state.connection + amount),
        })),

      updateHope: (amount) =>
        set((state) => ({
          hope: clamp(state.hope + amount),
        })),

      updateStress: (amount) =>
        set((state) => ({
          stress: clamp(state.stress + amount),
        })),
    }),
    {
      name: "my-game-save",
    },
  ),
);
