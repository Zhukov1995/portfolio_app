import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Main from './Pages/Main/main';
import Portfolio from './Pages/Portfolio/portfolio';
import Header from './Header/header';
import Footer from './Footer/footer';
import Loading from './UI/Loading/loading';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  const burger = useSelector(state => state.burger);
  
  const classWrapperContent = burger ? 'wrapper_content blur' : 'wrapper_content';

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    },3000)
  }, [])

  return (
    <>
    {loading ? 
      <Loading/>
        :
        <div className='app'>
      <Header/>
        <div className={classWrapperContent}>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
          </Routes>
        </div>
        <Footer/>
    </div>
    }
    </>
  );
}

export default App;
