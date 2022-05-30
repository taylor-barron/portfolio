import mountains from '../assets/sunrise-mountains.jpg';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

const Contact = () => {

    return (
        <div>
            <NavigationBar css={"about-navbar"} logo={"home-logo.png"} logoCss={"about-navbar-icon"} />
            <div className='about-main-container'>
                <img src={mountains} className="about-hero"/>
                <div className='about-text-container'>
                    <p className='about-text'>
                        <b>Phone:  </b>(513)876-5431
                    </p><br></br>
                    <p className='about-text'>
                        &emsp;Email: 
                    </p><br></br>
                    <p className='about-text'>
                        &emsp;Resume
                    </p><br></br>
                </div>
            </div>
            <Footer divCss={"about-footer-container"} footerCss={"about-footer-icon"} text={"Home"} linkDest={"/"} />
        </div>
    )
}

export default Contact;