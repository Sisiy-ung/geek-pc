import { Layout } from './pages/Layout';
import './App.css';
import { AuthRoute } from './components/AuthRole';
import Login from './pages/Login'
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={
          <AuthRoute>
            <Layout />
          </AuthRoute>
        } />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}
export default App
