import {create} from 'zustand'

interface sData{
    _id: string
    text: string
    status: boolean
    createdAt:string
    updatedAt:string
}

interface StoreState{
    todos: sData[]
    setTodos: (todos: sData[]) => void
    add: boolean,
    setAdd: (value: boolean) => void
    auth: boolean,
    setAuth: (value: boolean) => void
}

const useStore = create<StoreState>((set) =>({
    todos: [],
    setTodos: (todos) => set({ todos }),
    add: false,
    setAdd: (value) => set({add: value}),
    auth: true,
    setAuth: (value) => set({auth: value})
}))

export default useStore
