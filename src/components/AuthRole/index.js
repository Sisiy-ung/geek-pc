// 高阶组件
// 把一个组件当成另外一个组件的参数传入，然后通过一定的判断，返回新的组件

import { getToken } from "../../utils";
import { Navigate } from 'react-router-dom'

// 1. 判断是否登录
// 有登录： 直接渲染相应页面组件
// 未登录： 重定向回到登录页面

// 将需要鉴权的页面路由配置，替换为AuthRoute组件渲染

function AuthRoute({ children }) {
  const isToken = getToken()
  if (isToken) {
    return <>{children}</>
  } else {
    return <Navigate to="/login" replace />
  }
}

export { AuthRoute }