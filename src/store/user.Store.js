import { makeAutoObservable } from 'mobx'
import { http } from '../utils'

class UserStore {
  // 要获取的东西
  userInfo = {}
  // constructor
  constructor() {
    makeAutoObservable(this)
  }
  // action
  async getUserInfo() {
    const res = await http.get('/user/profile')
    this.userInfo = res.data.data
  }
}

export default UserStore