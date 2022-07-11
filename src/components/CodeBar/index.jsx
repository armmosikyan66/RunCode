import React, {useContext, useState} from 'react';

import styles from './CodeBar.module.scss';
import {CssEditor, HtmlEditor, JsEditor} from "../index";
import {EditorContext} from "../../hooks/context";
import TextEditor from "../Editor/TextEditor";

const CodeBar = () => {
    const {activeTab} = useContext(EditorContext);

    return (
        <div style={{width: activeTab === "txt" ? "100%" : "50%"}} className={styles.codebar}>
            <div className={styles.editor}>
                {activeTab === "html" && <HtmlEditor/>}
                {activeTab === "css" && <CssEditor/>}
                {activeTab === "js" && <JsEditor/>}
                {activeTab === "txt" && <TextEditor/>}
            </div>
        </div>
    );
};

export default CodeBar;
