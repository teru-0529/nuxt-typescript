import { defineStore } from 'pinia'

interface State {
  isLogin: boolean
}

export const useBaseStore = defineStore({
  id: 'base',

  state: (): State => {
    return {
      isLogin: false,
    }
  },

  getters: {
    baseLayout: (state): string => {
      return state.isLogin ? 'default' : 'welcome'
    },
  },

  actions: {
    login(): void {
      this.isLogin = true
    },
    logout(): void {
      this.isLogin = false
    },
  },
})
