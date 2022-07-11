import React, {useContext} from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-min-noconflict/ext-language_tools";

import {EditorContext} from "../../hooks/context";

const JsEditor = () => {
    const {js, setJs} = useContext(EditorContext);

    return (
        <>
            <AceEditor
                placeholder="Write you JAVASCRIPT code here!"
                mode="javascript"
                highlightActiveLine={true}
                theme="tomorrow"
                name="editor_js"
                fontSize={16}
                height="100%"
                width="100%"
                value={js}
                onChange={value => setJs(value)}
                showPrintMargin={false}
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

export default JsEditor;
