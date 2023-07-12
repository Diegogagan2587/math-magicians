import { func } from 'prop-types';
import './App.css';
import Calculator from './components/Calculator';
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './components/Home';
import Quotes from './components/Quotes';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='calculator' element={<Calculator />} />
        <Route path='quote' element={<Quotes />} />
      </Routes>
    </div>
  );
}

export default App;
