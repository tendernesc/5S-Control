import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
  return ( 
    <>
      <header className="header">
        <div className="header-wrapper">
          <div className="header-wrapper__logo">
            <Link to="/">
            <img className='header-wrapper__logo_image' src='/logo5s.svg' alt="logo" />
            </Link>
          </div>
          <div className="header-wrapper__icons">
            <Link to="/" className="header-wrapper__icons_main">Main</Link>
            <Link to="/tasks" className="header-wrapper__icons_tasks">Tasks</Link>
            <Link to="/contact" className="header-wrapper__icons_contact">Contact Us</Link>
          </div>   
        </div>
      </header>
    </> 
  );
}

export default Header;
