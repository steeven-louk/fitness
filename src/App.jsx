import { Route, Routes } from 'react-router-dom';

import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import Details from './views/details/Details';
import Home from './views/home/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path="/details/:id" element={<Details/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
