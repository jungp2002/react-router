import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Nav() {
  const navStyle = {
    color: 'white'
  };

  return (
    <div>
      <nav>
          <ul class="nav-links">
            <Link to="/about" style={navStyle}>
              <li>
                ABout
              </li>
            </Link>

            <Link to="/shop" style={navStyle}>
              <li>
                Shop
              </li>
            </Link>

          </ul>
      </nav>
    </div>
  );
}

export default Nav;
