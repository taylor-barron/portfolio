import mountains from '../assets/sunset-mountains.jpg'
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';


const About = () => {

    return (
        <div>
            <NavigationBar css={"about-navbar"} logo={"home-logo.png"} logoCss={"about-navbar-icon"} />
            <div className='about-main-container'>
                <img src={mountains} className="about-hero"/>
                <div className='about-text-container'>
                    <p className='about-text'>
                        &emsp;Thank you for visiting my site! My passion is to write well-structured, robust code that translates into products that perform well and look great. Since I started wading into the world of programming in 2020 I have thoroughly enjoyed getting into the why's and the how's of how technology works.
                    </p><br></br>
                    <p className='about-text'>
                        &emsp;I graduated from BCTCS in Lexington, Kentucky in May 2022. During my time there I was an embedded tutor for Java students and a free tutor for Python students. I recieved an A letter grade in every programming class that I took. 
                    </p><br></br>
                    <p className='about-text'>
                        &emsp;I have worked as a web developer since August 2021 focused mainly on creating an HTML CSS Javascript site with a focus on SEO.
                    </p><br></br>
                    <p className='about-text'>
                        &emsp;Looking forward I would like to work in a programming intensive role with a modern tech stack in a company that values best practices and has a culture of learning. 
                    </p><br></br>
                </div>
            </div>
            <Footer divCss={"about-footer-container"} footerCss={"about-footer-icon"} text={"See what I've worked on"} linkDest={"/projects"} />
        </div>
    )
}

export default About;