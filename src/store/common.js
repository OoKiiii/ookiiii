import create from "zustand";
import { persist } from "zustand/middleware";

export const useStoreCommon = create(
    persist((set) => ({
        isType: "",
        setType: (state, payload) =>
            set(() => ({
                isType: state,
            })),
    })),
    {
        name: "type",
        partialize: (state, payload) => ({
            isType: state.isType,
        }),
    }
);
