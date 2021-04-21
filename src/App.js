import React from 'react';
import Projects from './Projects.js';


class App extends React.Component {
    render() {

        return (
            <>
            <main>
                <h1>About me</h1>
                <p className="aboutMe">
                    I am Navin Raj from India and I like web developing,
                    currently learning the reactJS and ExpressJs libraries
                    and blockchain.......
                </p>
                <Projects />
            </main>
            <footer>
                <p>done by Navin Raj</p>
            </footer>
            </>
        )

    }
}

export default App;