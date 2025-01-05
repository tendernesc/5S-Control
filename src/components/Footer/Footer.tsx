import './Footer.css'



function Footer() {
  return (
  <div className='footer'>
    <div className='footer-wrapper'>
        <div className='footer-wrapper__text'>© 2024 5S Control. All rights reserved</div>
        <div className='footer-wrapper__policy'>
          <div className='footer-wrapper__policy_terms'>Terms & Conditions</div>
          <div className='footer-wrapper__policy_privacy'>Privacy Policy</div>
        </div>
    </div>
  </div>
  );
}

export default Footer;