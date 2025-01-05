import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './Main.css'


function Main() {
  return ( 
  <>
  <Header/>
    <div className="main">
      <div className="main-wrapper">
        <div className="main-wrapper__text">
          <div className="main-wrapper__text_title">Monitor your production processes with AI-powered video analytics</div>
          <div className="main-wrapper__text_info">5S Control monitoring solutions help you maximize equipment utilization while simultaneously enhancing your existing CCTV system.<br/><br/>
5S Control integrates seamlessly and securely, providing enhanced monitoring without the need for costly replacements.<br/><br/>
5S Control – where advanced monitoring meets optimal equipment utilization.</div>
          <div className="main-wrapper__text_button">GET FREE DEMO</div>
        </div>
        <div className="main-wrapper__image">
          <img className="main-wrapper__image_man" src="https://5scontrol.com/templates/yootheme/cache/27/pic%20for%20hero%20section%201-27bf21c5.webp" alt="image" />
        </div>
      </div>
    </div>
  <Footer/>
  </> 
  );
}

export default Main;