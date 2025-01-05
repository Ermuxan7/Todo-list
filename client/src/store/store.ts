import {create} from 'zustand'

interface StoreState{
    add: boolean,
    setAdd: (value: boolean) => void
    auth: boolean,
    setAuth: (value: boolean) => void
}

const useStore = create<StoreState>((set) =>({
    add: false,
    setAdd: (value) => set({add: value}),
    auth: true,
    setAuth: (value) => set({auth: value})
}))

export default useStore
