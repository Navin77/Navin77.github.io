import React from 'react';
import Projects from './Projects.js';


class App extends React.Component {
    render() {

        return (
            <>
            <header>
                <h1>About me</h1>
                <p className="aboutMe">
                    I am Navin Raj and I like web developing,
                    currently learning the reactJS and ExpressJs libraries
                    and blockchain.......
                </p>
             </header>
                <Projects />
            <footer>
                <h1>Other Profiles</h1>
                 <ul>
                        <li>
                            <a href="https://github.com/Navin77" target="_blank" rel="external">github</a>
                        </li>
                 </ul>
            </footer>
            </>
        )

    }
}

export default App;