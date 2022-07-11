import React from 'react';

import styles from './App.module.scss';
import {EditorProvider} from "./hooks/context";
import {CodeBar, Header, Preview} from "./components";

const App = () => {
    return (
        <>
            <EditorProvider>
                <Header/>
                <div className={styles.flex}>
                    <CodeBar/>
                    <div className={styles.main}>
                        <Preview/>
                    </div>
                </div>
            </EditorProvider>
        </>
    );
}

export default App;
