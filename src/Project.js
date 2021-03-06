import React from 'react';


/**
 * PROPS:
 *      title @string
 *      desc @string
 *      link @string
 */


class Project extends React.Component {
    render() {
        return (
                <details className="project">
                    <summary>{this.props.title}</summary>
                    <p>{this.props.desc}</p>
                    <div>
                        <a target="_blank" 
                            href={this.props.link}>
                            view this project
                        </a>
                    </div>
                </details>     
        )
    }
}

export default Project;
