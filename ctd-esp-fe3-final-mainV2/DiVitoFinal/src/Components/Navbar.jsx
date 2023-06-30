import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';

const Navbar = () => {
  const { state, changeTheme } = useContext(ContextGlobal);

  const handleThemeChange = () => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    changeTheme(newTheme);
  };

  return (
    <nav className={`nav ${state.theme}`}>
      <Link className="nav" to="/home" activeclassname="active">Home</Link>
      <Link className="nav" to="/contact" activeclassname="active">Contact</Link>
      <Link className="nav" to="/favs" activeclassname="active">Favs</Link>
      <button onClick={handleThemeChange}>theme</button>
    </nav>
  );
};

export default Navbar;