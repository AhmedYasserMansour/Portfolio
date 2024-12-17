
import About from './components/About/About';
import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import { useEffect, useRef, useState } from 'react';
import Loading from './components/Loading/Loading';
import Hand from './assets/Hand.png';
import Footer from './components/Footer/Footer';

function App() {
  const [show,setShow] = useState(false);
  const refTop = useRef();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 500) {
        refTop.current.style.right = '10px';
      } else {
        refTop.current.style.right = '-60px';
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(()=> {
    setTimeout(() => {
      setShow(true)
    },4000)
  },[]);
  const handleTop = () => {
    window.scrollTo({
      top:0,
      behavior: 'smooth'
  });
  }
  return (
    <div className="App">
      {!show ? (
        <Loading /> 
      ) : 
        <>
          <Nav />
          <Home />
          <About />
          <Services />
          <Skills />
          <Contact />
          <Footer/>
          <img ref={refTop} className='top' onClick={handleTop} src={Hand} alt='Hand'></img>
        </>
      }
    </div>
);
}

export default App;
