import GeekLayout from './pages/Layout';
import './App.css';
import { AuthRoute } from './components/AuthRole';
import Login from './pages/Login'
import { Route, Routes, unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import Publish from './pages/Publish'
import Article from './pages/Article'
import Home from './pages/Home'
import { history } from './utils/history';

function App() {
  return (
    <HistoryRouter history={history}>
      <div className='App'>
        <Routes>
          {/* 需要鉴权的路由 */}
          <Route path="/*" element={
            <AuthRoute>
              <GeekLayout />
            </AuthRoute>
          }>
            {/* 二级路由默认页面 */}
            <Route index element={<Home></Home>}></Route>
            <Route path="publish" element={<Publish></Publish>}></Route>
            <Route path="article" element={<Article></Article>}></Route>
          </Route>
          {/* 不需要鉴权的路由 */}
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </HistoryRouter>
  )
}
export default App
