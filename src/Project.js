import React from 'react';

class Project extends React.Component {
    render() {
        return (
            <>
                <details className="project">
                    <summary>Age Calculator</summary>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    <a target="_blank" href="">
                        <button>view this project</button>
                    </a>
                </details>
            </>
        )
    }
}

export default Project;