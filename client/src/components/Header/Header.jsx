import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css'
import star from '../../assets/svg/new_star_plantify.svg';
import account from '../../assets/svg/account.svg'
import search from '../../assets/svg/search.svg';


function Header() {
  return (
    <nav className="nav-container">
      
      <Link id="nav-logo" to="/">Plantify</Link>
      <div className="nav-links">
      <Link className="link" to='/plants'>PLANTS</Link>
      <Link className="link" to='/shops'>SHOPS</Link>
      <Link className="link" to='/'>TIPS</Link>
      </div>
      <div className="nav-icons">
        <Link to='/'><img id="search"src={search} alt="search" /></Link>
        <Link to='/'><img id="account"src={account} alt="account" /></Link>
        <Link to='/'><img id="star" src={star} alt="favorites" /></Link>
      </div>
      
    </nav>
  );
}

export default Header;