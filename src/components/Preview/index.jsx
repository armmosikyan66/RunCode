import React, {useContext, useMemo} from 'react';

import styles from './Preview.module.scss';
import {EditorContext} from "../../hooks/context";

const Preview = () => {
    const {html, css, js, activeTab, uniqueId} = useContext(EditorContext);
    const location = window.location;

    const document = useMemo(() => {
        if (!html && !css && !js) return

        return (
            `
                <!doctype html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport"
                          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                    <meta http-equiv="X-UA-Compatible" content="ie=edge">
                    <style>
                        ${css}
                    </style>
                </head>
                <body>
                    ${html}
                    <script>
                        ${js}
                    </script>
                </body>
                </html>
            `
        )
    }, [html, css, js]);


    return (
        activeTab !== "txt"
            ? (
                <>
                    <div className={styles.header}>
                        <div>
                            {`${location}${uniqueId}`}
                        </div>
                    </div>
                    <div className={styles.content}>
                        {document
                            ? <iframe title="preview" className={styles.preview} srcDoc={document}/>
                            : <div className={styles.loading}>Your code will be displayed here</div>}
                    </div>
                </>
            )
            : null
    );
};

export default Preview;
