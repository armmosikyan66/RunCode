import React from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-text";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-min-noconflict/ext-language_tools";

const TextEditor = () => {
    return (
        <>
            <AceEditor
                placeholder="Write you Text code here!"
                mode="text"
                highlightActiveLine={true}
                theme="tomorrow"
                name="editor_js"
                fontSize={16}
                height="100%"
                width="100%"
                showPrintMargin={true}
                showGutter={true}
                setOptions={{
                    useWorker: false,
                    showLineNumbers: true,
                    enableBasicAutocompletion: true,
                    enableLiveAutocompletion: true,
                    enableSnippets: true,
                    tabSize: 2,
                }}
            />
        </>
    );
};

export default TextEditor;
