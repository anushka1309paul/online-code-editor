import React from 'react';
import ReactPrismEditor from "react-prism-editor";

class CodeEditor extends React.Component {
    constructor(props) {
        super(props);
    }

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

export default CodeEditor;