import create from 'zustand';

export const useStoreAuth = create(set => ({
    isLogin: false,
    setLogin: () =>
        set(() => ({
            isLogin: true,
        })),
    setLogout: () =>
        set(() => ({
            isLogin: false,
        })),
}));
