import { defineStore } from 'pinia'

interface State {
  name: string
  address: string
}

export const useAccountStore = defineStore({
  id: 'account',

  state: (): State => {
    return {
      name: '',
      address: '',
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
    setAddress(address: string): void {
      this.address = address
      // TODO:ローカルストレージに書き込み
    },
    prepareAccount(): void {
      // TODO:ローカルストレージから取得
    },
  },
})
