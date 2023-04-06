import React from 'react'
import LoginStore from './login.Store'


class RootState {
  constructor() {
    this.loginStore = new LoginStore()
  }
}

const StoreContext = React.createContext(new RootState())

export const useStore = () => React.useContext(StoreContext)