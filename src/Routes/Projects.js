import { useState, useEffect } from "react";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import DisplayProjects from '../components/DisplayProjects'
import projectsJSON from "../projects.json"
import mountains from "../assets/night-mountains.jpg"

const Projects = () => {
    const [projects, setProjects] = useState('')

    useEffect(() => {
        setProjects(projectsJSON.projects);
    }, [])

    return (
        <div>
            <NavigationBar css={"projects-navbar"} logo={"home-logo.png"} logoCss={"projects-navbar-icon"} />
            <div className="projects-main-container">
                <img src={mountains} alt="" className="projects-hero" />
                <DisplayProjects projects={projects} />
            </div>
            <Footer divCss={"home-footer-container"} footerCss={"home-footer-icon"} text={"Let's get in contact"} linkDest={"/contact"} />
        </div>
    )
}

export default Projects;