import Project from './Project'

const DisplayProjects = ({ projects }) => {


    var counter = []
    {for (var i in projects) {
        counter.push(projects[i])
    }}
    return (
        <div className='projects-projects-container'>
            {counter.map((project, index) => (
                <Project key={index} project={project} />
            ))}
        </div>
    )
}

export default DisplayProjects