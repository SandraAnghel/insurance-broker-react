import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './components/Blog';

function App() {
  return (

    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path='/blog' element={<Blog />}>Blog</Route>
    </Routes>
   
    <Footer />
    </BrowserRouter>
    
  );
}

export default App;
