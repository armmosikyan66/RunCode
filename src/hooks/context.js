import React, {createContext, useEffect, useState} from 'react';

const EditorContext = createContext();

const EditorProvider = ({children}) => {
    const [html, setHtml] = useState("");
    const [css, setCss] = useState("");
    const [js, setJs] = useState("");
    const [activeTab, setActiveTab] = useState("txt");
    const [uniqueId, setUniqueId] = useState(123);

    function unique() {
        return Math.random().toString(36).substr(2, 9);
    };

    useEffect(() => {
        setUniqueId(unique());
    }, []);


    const value = {
        html, css, js, setHtml, setCss, setJs, activeTab, setActiveTab, uniqueId
    }

    return (
        <EditorContext.Provider value={value}>
            {children}
        </EditorContext.Provider>
    )
}

export {EditorProvider, EditorContext};