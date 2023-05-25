import { defineStore } from 'pinia'
export const useCounterStore = defineStore('store', {
    state: () => {
        return {
            count: 0,
            login_status: false,
        }
    },
    getters: {
        double: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        },
    },
})