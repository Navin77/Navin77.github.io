import React from 'react';
import Project from './Project.js';

class Projects extends React.Component {
    render() {
        return (
            <section>
                <h1>Projects built so far</h1>
                <Project />
            </section>
        )
    }
}

export default Projects;