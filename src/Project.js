import React from 'react';

class Project extends React.Component {
    render() {
        return (
            <>
                <details className="project">
                    <summary>Age Calculator</summary>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <div>
                        <a target="_blank" href="">view this project</a>
                        </div>
                </details>
                <details className="project">
                    <summary>Age Calculator</summary>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        <div>
                             <a target="_blank" href="">view this project</a>
                        </div>
                </details>
            </>
        )
    }
}

export default Project;