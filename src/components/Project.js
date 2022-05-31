import Button from 'react-bootstrap/Button'
import { useState, useEffect } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa"
import { SiJavascript, SiMongodb, SiAuth0, SiBootstrap, SiPhp, SiMysql } from "react-icons/si"
import { AiFillHtml5 } from "react-icons/ai"
import { DiCss3, DiJava, DiPython } from "react-icons/di"

const Project = ({ project }) => {
    const [showLive, setShowLive] = useState(false)

    useEffect(() => {
        if (project.demo.includes("http")) { setShowLive(true) }
    }, [project.demo])

    var projectIcons = []

    for (var i in project.tech) {

        if (project.tech[i] === "React") {
            projectIcons.push(<FaReact key={i} className="projects-icons" />)
        } else if (project.tech[i] === "HTML") {
            projectIcons.push(<AiFillHtml5 key={i} className='projects-icons' />)
        } else if (project.tech[i] === "CSS") {
            projectIcons.push(<DiCss3 key={i} className='projects-icons' />)
        } else if (project.tech[i] === "Javascript") {
            projectIcons.push(<SiJavascript key={i} className='projects-icons' />)
        } else if (project.tech[i] === "NodeJS") {
            projectIcons.push(<FaNodeJs key={i} className='projects-icons' />)
        } else if (project.tech[i] === "MongoDB") {
            projectIcons.push(<SiMongodb key={i} className='projects-icons' />)
        } else if (project.tech[i] === "Auth0") {
            projectIcons.push(<SiAuth0 key={i} className='projects-icons' />)
        } else if (project.tech[i] === "Bootstrap") {
            projectIcons.push(<SiBootstrap key={i} className='projects-icons' />)
        } else if (project.tech[i] === "Java") {
            projectIcons.push(<DiJava key={i} className='projects-icons' />)
        } else if (project.tech[i] === "Python") {
            projectIcons.push(<DiPython key={i} className='projects-icons' />)
        } else if (project.tech[i] === "Php") {
            projectIcons.push(<SiPhp key={i} className='projects-icons' />)
        } else if (project.tech[i] === "MySQL") {
            projectIcons.push(<SiMysql key={i} className='projects-icons' />)
        }
    }

    return (
        <div className="projects-project-container">
            <p className="projects-name">{project.name}</p>
            <div className='projects-project-img-container'>
                <img src={require(`../assets/${project.image}`)} />
            </div>
            <p className="projects-description">{project.description}</p>
            <div className='projects-icons-container'>
                {projectIcons}
            </div>
            <div className='projects-button-group'>
                <Button variant="outline-info" className='projects-button' href={project.github}>Github</Button>{' '}
                { showLive && <Button variant="outline-info" className='projects-button' href={project.demo}>Live Demo</Button>}{' '}
            </div>
        </div>
    )
}

export default Project