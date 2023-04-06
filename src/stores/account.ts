import { defineStore } from 'pinia'

interface State {
  name: string
}

export const useAccountStore = defineStore({
  id: 'account',

  state: (): State => {
    return {
      name: '',
    }
  },

  getters: {
    existName: (state): boolean => {
      return state.name == ''
    },
  },

  actions: {
    setName(name: string): void {
      this.name = name
      // TODO:ローカルストレージに書き込み
    },
    prepareName(): void {
      // TODO:ローカルストレージから取得
    },
  },
})
