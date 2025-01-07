import './App.css';
import Main from './pages/Main/Main';
import Contact from './pages/Contact/Contact';
import Tasks from './pages/Tasks/Tasks';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/contact' element ={<Contact/>}/>
          <Route path='/tasks' element={<Tasks/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}


