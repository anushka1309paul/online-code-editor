/*
 * This file will contain the layout of the main webpage
 * We can import all the separately created components and add that to our webpage
*/
import React from 'react';
import CodeEditor from './components/codeEditor.js';
import ReactPrismEditor from "react-prism-editor";

class App extends React.Component {
    render() {
        return (
            <ReactPrismEditor
                language={"c"}
                theme={"default"}
                code={""}
                lineNumber={true}
                readOnly={false}
                clipboard={false}
                changeCode={code => {
                    this.code = code
                    console.log(code)
                }}
            />
        );
    }
}

export default App;