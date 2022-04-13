import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import LoginPage from './pages/LoginPage';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          {/* <Route path='/register' element={< FormRegister />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
