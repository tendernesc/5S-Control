import './Header.css'


function Header() {

  return ( 
  <>
    <header className="header">
      <div className="header-wrapper">
        <div className="header-wrapper__logo">
          <img className='header-wrapper__logo_image' src='/logo5s.svg' alt="logo" />
        </div>
        <div className="header-wrapper__icons">
          <div className="header-wrapper__icons_main">Main</div>
          <div className="header-wrapper__icons_tasks">Tasks</div>
          <div className="header-wrapper__icons_contact">Contact Us</div>
        </div>   
      </div>
    </header>
  </> 
  );
}

export default Header ;