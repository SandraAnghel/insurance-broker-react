import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      
    </Routes>
    <HomePage />
    <Footer />
    </BrowserRouter>
    
  );
}

export default App;
