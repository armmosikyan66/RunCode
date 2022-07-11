import React, {useContext} from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-min-noconflict/ext-language_tools";

import {EditorContext} from "../../hooks/context";

const CssEditor = () => {
    const {css, setCss} = useContext(EditorContext);
    return (
        <>
            <AceEditor
                placeholder="Write you CSS code here!"
                mode="css"
                highlightActiveLine={true}
                theme="tomorrow"
                name="editor_css"
                fontSize={16}
                height="100%"
                width="100%"
                value={css}
                onChange={value => setCss(value)}
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

export default CssEditor;
