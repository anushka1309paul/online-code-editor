/*
 * This file will contain the layout of the main webpage
 * We can import all the separately created components and add that to our webpage
*/
import React from 'react';
import CodeEditor from './components/codeEditor.js';

class App extends React.Component {
    render() {
        return (
            <>
                <CodeEditor />
            </>
        );
    }
}

export default App;