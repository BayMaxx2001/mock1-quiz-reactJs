import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import Guard from './Guard/Guard';
import UserDoQuiz from './pages/user/DoQuizPage';
import InputNumberQuizPage from './pages/user/InputNumberQuizPage';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route element={<Guard />}>
            <Route path='/homepage' element={<HomePage />} >
              {/* <Route path='/do-quiz' element={<UserDoQuiz />} /> */}
            </Route>
            <Route path='/input-num-quiz' element={<InputNumberQuizPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
