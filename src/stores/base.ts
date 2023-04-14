import { defineStore } from 'pinia'

interface State {
  appLogo: string
  appName: string
  isLogin: boolean
  activeContents: string
  isConfigContents: boolean
}

export const useBaseStore = defineStore({
  id: 'base',

  state: (): State => {
    return {
      appLogo: 'PH',
      appName: 'Pharos',

      isLogin: false,
      activeContents: '',
      isConfigContents: true,
    }
  },

  getters: {},

  actions: {
    login(): void {
      this.isLogin = true
    },
    logout(): void {
      this.isLogin = false
    },
    setActiveContents(contentsName: string, isConfig: boolean): void {
      this.activeContents = contentsName
      this.isConfigContents = isConfig
    },
  },
})
