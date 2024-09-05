import React,{ useEffect, useState } from "react";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => setShowMenu(!showMenu);
    const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

  useEffect(() => {
    const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <nav className={`fixed w-full py-5 top-0 z-50 transition duration-900 ${
        scrolled ? ' bg-slate-800 shadow ' : 'bg-slate-800 lg:bg-transparent'
      }`}>
        <div class="mx-auto flex flex-row items-center justify-between xl:px-40 px-8">
          <a href="/" class="text-white text-3xl font-extrabold">DORSIN</a>
          
          <div className="hidden lg:flex flex-row justify-center gap-12 text-md font-semibold pr-40 text-gray-400">
            <button onClick={() => scrollToSection('homeSection')} className="hover:text-white">
              Home
            </button>
            <button onClick={() => scrollToSection('servicesSection')} className="hover:text-white">
              Services
            </button>
            <button onClick={() => scrollToSection('featureSection')} className="hover:text-white">
              Features
            </button>
            <button onClick={() => scrollToSection('pricesSection')} className="hover:text-white">
              Pricing
            </button>
            <button onClick={() => scrollToSection('teamSection')} className="hover:text-white">
              Team
            </button>
            <button onClick={() => scrollToSection('blogSection')} className="hover:text-white">
              Blog
            </button>
          </div>

          {/* Button for Dropdown Menu */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-md py-2 px-5 rounded-3xl"
          ><img className="w-5 h-5" src="../../images/menu.png" alt=""/>
          </button>

          

          {/* Try it Free button */}
          <button className="hidden lg:block text-md py-2 px-5 text-white bg-teal-500 rounded-3xl hover:-translate-y-2 transition-bg duration-300">
            Try it Free
          </button>
        </div>
        {/* Dropdown Menu */}
        {showMenu && (
            <div className=" lg:hidden flex flex-col justify-start bg-gray-800 p-4 shadow-md mt-2">
              <button onClick={() => scrollToSection('homeSection')} className="text-start block text-white hover:text-teal-500 py-2">
                Home
              </button>
              <button onClick={() => scrollToSection('servicesSection')} className="text-start block text-white hover:text-teal-500 py-2">
                Services
              </button>
              <button onClick={() => scrollToSection('featureSection')} className="text-start block text-white hover:text-teal-500 py-2">
                Features
              </button>
              <button onClick={() => scrollToSection('pricesSection')} className="text-start block text-white hover:text-teal-500 py-2">
                Pricing
              </button>
              <button onClick={() => scrollToSection('teamSection')} className="text-start block text-white hover:text-teal-500 py-2">
                Team
              </button>
              <button onClick={() => scrollToSection('blogSection')} className="text-start block text-white hover:text-teal-500 py-2">
                Blog
              </button>
              {/* Try it Free button in Dropdown Menu */}
              <div>
                <button className="block text-white bg-teal-500 py-2 px-4 rounded-3xl mt-2 hover:-translate-y-2 transition-bg duration-300">
                  Try it Free
                </button>
              </div>
            </div>
          )}
      </nav>
  );
}
export default Navbar;