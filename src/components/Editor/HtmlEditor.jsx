import React, {useContext} from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-tomorrow";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-min-noconflict/ext-language_tools";

import {EditorContext} from "../../hooks/context";

const HtmlEditor = () => {
    const {html, setHtml} = useContext(EditorContext);

    return (
        <>
            <AceEditor
                placeholder="Write you HTML code here!"
                mode="html"
                highlightActiveLine={true}
                theme="tomorrow"
                name="editor_html"
                fontSize={16}
                height="100%"
                width="100%"
                showPrintMargin={false}
                showGutter={true}
                value={html}
                onChange={value => setHtml(value)}
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

export default HtmlEditor;
