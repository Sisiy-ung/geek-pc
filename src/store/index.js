import React from 'react'
import LoginStore from './login.Store'
import UserStore from './user.Store'


class RootState {
  constructor() {
    this.loginStore = new LoginStore()
    this.userStore = new UserStore()
  }
}

const StoreContext = React.createContext(new RootState())

export const useStore = () => React.useContext(StoreContext)