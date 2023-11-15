import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';

export default function app() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
     </Routes>
    </BrowserRouter>

  )
}
