import { defineStore } from 'pinia'
interface StateProps {
    counter: number
}
export const useStore = defineStore({
    // unique id of the store across your application
    id: 'storeId',
    state: (): StateProps => ({
        counter: 2
    }),
    getters: {
        doubleCount: (state) => (num: number) => state.counter * num
    },
    actions: {
        randomizeCounter(id: number) {
            console.log(id)
        }
    }
})