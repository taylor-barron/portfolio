import mountains from '../assets/sunrise-mountains.jpg';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import myResume from '../assets/taylor-barron-frontend-react.pdf'

const Contact = () => {

    return (
        <div>
            <NavigationBar css={"about-navbar"} logo={"home-logo.png"} logoCss={"about-navbar-icon"} />
            <div className='about-main-container'>
                <img src={mountains} className="about-hero"/>
                <div className='contact-text-container'>
                    <p className='contact-text'>
                        <b>Phone:  </b><a className='contact-a-text' href='tel:513-876-5431'>513-876-5431</a>
                    </p><br></br>
                    <p className='contact-text'>
                        <b>Email: </b><a className='contact-a-text' href='mailto: taylor.barron989@gmail.com'>taylor.barron989@gmail.com</a>
                    </p><br></br>
                    <p className='contact-text'>
                        <b>Resume: </b><a className='contact-a-text' href={myResume} download={'taylor-barron'}>My Resume</a>
                    </p><br></br>
                </div>
            </div>
            <Footer divCss={"about-footer-container"} footerCss={"about-footer-icon"} text={"Home"} linkDest={"/"} />
        </div>
    )
}

export default Contact;