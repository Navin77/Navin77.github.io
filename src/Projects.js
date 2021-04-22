import React from 'react';
import Project from './Project.js';

class Projects extends React.Component {
    render() {
        return (
            <main>
                <h1>Projects built so far</h1>
                    {
                        this.props.projects.map(project => {
                        return (
                        <Project 
                                title={project.title}
                                desc={project.desc}
                                link={project.link}
                                key={project.link}
                        />
                        )
                        })

                    }
            </main>
        )
    }
}

export default Projects;