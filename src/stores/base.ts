import { defineStore } from 'pinia'
import { format } from 'date-fns/fp'

interface State {
  appLogo: string
  appName: string
  appVersion: string
  releaseDate: Date
  isLogin: boolean
}

export const useBaseStore = defineStore({
  id: 'base',

  state: (): State => {
    return {
      appLogo: 'PH',
      appName: 'Pharos',
      appVersion: '0.9.0',
      releaseDate: new Date(2023, 3, 1),

      isLogin: false,
    }
  },

  getters: {
    versionInfo: (state): string => {
      const dayFormat = format('yyyy-MM-dd')
      const releseDay = dayFormat(state.releaseDate)
      return `version ${state.appVersion} (released ${releseDay})`
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
