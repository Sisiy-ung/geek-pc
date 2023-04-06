import './App.css';
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/Login" element={<Login />}>登录</Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
