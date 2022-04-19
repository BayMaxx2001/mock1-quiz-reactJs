import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import AdminListQuestionPage from './pages/admin/AdminListQuestionPage'

import Guard from './Guard/Guard';
import UserDoQuiz from './pages/user/DoQuizPage';
import InputNumberQuizPage from './pages/user/InputNumberQuizPage';
import DoQuizPage from './pages/user/DoQuizPage';
import AdminAddQuestionPage from './pages/admin/AdminAddQuestionPage';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route element={<Guard />}>
            <Route path='/homepage' element={<HomePage />} />
            <Route path='/input-num-quiz' element={<InputNumberQuizPage />} />
            <Route path='/do-quiz' element={<DoQuizPage />}></Route>
            <Route path='/admin-list-question' element={<AdminListQuestionPage />} />
            <Route path='/admin-add-question' element={<AdminAddQuestionPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
