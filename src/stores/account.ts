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
    emptyName: (state): boolean => {
      return state.name == ''
    },
  },

  actions: {
    setName(): void {
      localStorage.setItem('pharos.user', this.name)
      // TODO:ローカルストレージに書き込み
    },
    prepareAccount(): void {
      const user = localStorage.getItem('pharos.user')
      if (user != undefined) {
        this.name = user
      } else {
        this.name = ''
      }
      // TODO:ローカルストレージから取得
    },
  },
})
