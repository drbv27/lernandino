import {useState} from 'react'
import { Link } from "react-router-dom";
import { FaBars as Bars3Icon } from "react-icons/fa";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav>
    <div className="w-full mx-auto bg-teal-900">
      <div className="flex mx-auto justify-between  bg-teal-800">
        {/* Primary menu and logo */}
        <div className="flex justify-between items-center gap-16 my-12 ">
          {/* logo */}
          <div>
            <h2 className='text-white text-2xl font-bold ml-2'>Lernantino</h2>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="hidden lg:flex items-center gap-8 mr-2">
            <Link to="/" className="text-white text-lg hover:text-teal-500">About</Link>
            <Link to="/portfolio" className="text-white text-lg hover:text-teal-500">Portfolio</Link>
            <Link to="/contact" className="text-white text-lg hover:text-teal-500">Contact</Link>
            <Link to="/resume" className="text-white text-lg hover:text-teal-500">Resume</Link>
          </div>
          {/* Mobile navigation toggle */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setToggleMenu(!toggleMenu)}>
              <Bars3Icon className="mr-2 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
    {/* mobile navigation */}
    <div
      className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
        !toggleMenu ? "h-0" : "h-full"
      }`}
    >
      <div className="px-8">
        <div className="flex flex-col gap-8 font-bold tracking-wider">
            <Link to="/" className="border-l-4 border-gray-600">About</Link>
            <Link to="/portfolio" className="border-l-4 border-gray-600">Portfolio</Link>
            <Link to="/contact" className="border-l-4 border-gray-600">Contact</Link>
            <Link to="/resume" className="border-l-4 border-gray-600">Resume</Link>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar