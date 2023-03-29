import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Main from './Pages/Main/main';
import Portfolio from './Pages/Portfolio/portfolio';
import Header from './Header/header';
import Footer from './Footer/footer';

function App() {

  return (
    <div className='app'>
        <Header/>
        <div className='wrapper_content'>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
          </Routes>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
