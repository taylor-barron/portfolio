import { useState, useEffect } from 'react';
import mountains from '../assets/mountains.jpg'
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

const Home = () => {
    const [text1, setText1] = useState("")
    const [text2, setText2] = useState("")
    const [text3, setText3] = useState("")

    useEffect(() => {

        setTimeout(() => {
            setText1("Hi, I'm Taylor,")
        }, 2000)
        setTimeout(() => {
            setText2("full-stack React developer.")
        }, 3500)
        setTimeout(() => {
            setText3("Let's make picturesque websites.")
        }, 5500)
    }, [])

    return (
        <div>
            <NavigationBar css={"home-navbar"} logo={"home-logo.png"} logoCss={"home-navbar-icon"} />
            <div className="home-main-container">
                <img src={mountains} alt="" className='home-hero' />
                <div className='home-text-container'>
                    <p className='home-text'>{text1}</p>
                    <p className='home-text'>{text2}</p><br></br>
                    <p className='home-text'>{text3}</p>
                </div>
            </div>
            <Footer divCss={"home-footer-container"} footerCss={"home-footer-icon"} text={"Learn more about me"} linkDest={"/about"} />
        </div>
    )
}

export default Home;