import Nav from './components/NavBar/Navbar';
import Home from '../src/pages/Home/Home';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Social from './components/Social/Social';
import { Route, Routes, useLocation} from 'react-router-dom';
import { useEffect } from 'react';
import Experiencia from './pages/Experience/Experiencia';

function App() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Experience' element={<Experiencia />} />
          <Route path='*' element={<p>Not found</p>} />
      </Routes>
     <Social/>
     <Footer/>
    </>
  )
}

export default App
