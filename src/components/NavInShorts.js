import React from 'react';
import './NavInShorts.css';
import HamburgerDrawer from "./HamburgerDrawer"

const NavInShorts = ({setCategory}) => {
  return (
    <div className='nav'>
        <div className="icon">
            <HamburgerDrawer setCategory={setCategory} />
        </div>
        <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" alt="logo"
        height="80%"
        style={{
            cursor: "pointer"
        }} />
    </div>
  )
}

export default NavInShorts