import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spanish from "../../assets/svg/flag-for-flag-spain-svgrepo-com.svg"

function NavBar() {

  const [scrolled, setScrolled] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () =>{
    if (window.innerWidth <= 1023) {
      setClicked(!clicked);
    }
  }

  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY > 5){
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    };

      window.addEventListener('scroll', handleScroll);

      return () =>{
        window.removeEventListener('scroll', handleScroll)
      };

  }, []);

    return (
    <header>
      <nav className={`px-3 py-4 fixed w-full z-[99999] transition-all duration-300 linear ${scrolled ? 'scrolling' : ''}`}>
        <div className="flex justify-between items-center">

          <div className="z-50">
            <p className="text-white">LOGO AQUI</p>
          </div>

            <div className={`rounded-full w-max  ${scrolled ? 'bg-transparent' : 'bg-[#71556B] shadow-lg'} flex`}>
              <ul className={` ${clicked ? 'active-menu' : 'hidden'} transition duration-300 ease-in-out lg:flex justify-center  w-auto text-black lg:text-white items-center font-bold uppercase custom-hover`}>
                  <li className="py-2 lg:pl-6 pr-4 transition duration-300 ease-in-out">
                    <Link to="/" className="pr-6" onClick={handleClick}>Inicio</Link>
                    <span className="text-[var(--turquesaPrincipal)] hidden lg:inline">|</span>
                    </li>
                  <li className="py-2  pr-4 transition duration-300 ease-in-out">
                    <Link to="/About" className="pr-6" onClick={handleClick}>Sobre mi</Link>
                    <span className="text-[var(--turquesaPrincipal)] hidden lg:inline">|</span>
                    </li>
                  <li className="py-2 pr-4  transition duration-300 ease-in-out">
                    <Link to="/Experience" className="pr-6" onClick={handleClick}>Experiencia</Link>
                    <span className="text-[var(--turquesaPrincipal)] hidden lg:inline">|</span>
                  </li>
                    <div className="py-2 pr-4 flex justify-center items-center transition duration-300 ease-in-out">
                      <span className="pr-6"><img src={Spanish} className="cursor-pointer" alt="Bandera de españa" /></span>
                    </div>
                </ul>
            </div>

          <div className={`z-50 icon nav-icon-5 ${clicked ? 'open' : ''} `} onClick={handleClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>
      </nav>
    </header>
  );
}

export default NavBar;