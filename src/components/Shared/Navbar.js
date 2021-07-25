import React from 'react';
import { Link } from 'react-router-dom';

const navbarbtn = [
  {
    title: 'Home',
    link: '/'
  },
  {
    title: 'Special Offers',
    link: '/'
  },
  {
    title: 'Contact',
    link: '/'
  },
  {
    title: 'Sitemap',
    link: '/'
  },
  {
    title: 'Brand',
    link: '/'
  },
  {
    title: 'Login',
    link: '/login'
  },
  
]

const Navbar = () => {
  return (
    <nav className="md:mr-auto md:ml-4 md:py-1 flex flex-wrap items-center text-base justify-items-start">
      {
        navbarbtn.map(btn => <button className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-red-200 hover:text-black rounded ml-2 text-base mt-4 md:mt-0">
        <Link to={btn.link}>{btn.title}</Link>
      </button>)
      }
    </nav>
  );
};

export default Navbar;