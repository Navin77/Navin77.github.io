import React from 'react';
import Project from './Project.js';

class Projects extends React.Component {
    render() {
        return (
            <main>
                <h1>Projects built so far</h1>
                <Project />
            </main>
        )
    }
}

export default Projects;