import React, {useContext, useState} from 'react';
import {BiPencil} from "react-icons/bi";
import {BsFillFileEarmarkTextFill} from "react-icons/bs";
import {IoIosArrowDown} from "react-icons/io";
import {AiFillGithub, AiFillHtml5} from "react-icons/ai";
import {DiCss3Full} from "react-icons/di";
import {SiJavascript} from "react-icons/si";

import styles from './Header.module.scss';
import Logo from "../../assets/logo.svg";
import {EditorContext} from "../../hooks/context";

const files = [
    {
        image: BsFillFileEarmarkTextFill,
        name: "text",
        type: "txt",
        fill: "rgb(66, 165, 245)"
    },
    {
        image: AiFillHtml5,
        name: "HTML",
        type: "html",
        fill: "rgb(228, 77, 38)"
    },
    {
        image: DiCss3Full,
        name: "CSS",
        type: "css",
        fill: "rgb(66, 165, 245)"
    },
    {
        image: SiJavascript,
        name: "JS",
        type: "js",
        fill: "rgb(255, 202, 40)"
    },
]

const Header = () => {
    const [fileTypesOpened, setFileTypesOpened] = useState(false);
    const {setActiveTab} = useContext(EditorContext);
    const [selectedTab, setSelectedTab] = useState({
        image: BsFillFileEarmarkTextFill,
        name: "text",
        type: "txt",
        fill: "rgb(66, 165, 245)"
    });

    const selectLang = (value) => {
        setActiveTab(value.type);
        setFileTypesOpened(false);
        setSelectedTab(value);
    }

    return (
        <header className={styles.header}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <img src={Logo} alt="logo"/>
                </div>
                <div className={styles.filename}>
                    <span>
                        untitled.{selectedTab.type}
                    </span>
                    <span>
                        <BiPencil color={"rgba(0, 0, 0, 0.5)"}/>
                    </span>
                </div>
                <div className={styles.select}>
                    <div className={`${styles.selected} ${fileTypesOpened ? styles.active : undefined}`} onClick={() => setFileTypesOpened(!fileTypesOpened)}>
                        <div className={styles.inner}>
                            <div className={styles.left}>
                                <span>
                                    <selectedTab.image color={selectedTab.fill}/>
                                </span>
                                <span>{selectedTab.name}</span>
                            </div>
                            <div className={styles.right}>
                                <IoIosArrowDown/>
                            </div>
                        </div>
                    </div>
                    {fileTypesOpened && (
                        <div className={styles.files}>
                            <ul>
                                {files.map((file, index) => (
                                    <li key={index} onClick={() => selectLang(file)}>
                                        <span>
                                            <file.image color={file.fill} />
                                        </span>
                                        <span>
                                            {file.name}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.right}>
                <a href="https://github.com/armmosikyan66" rel="noreferrer" target="_blank">
                <button>
                    <span>Contact</span>
                    <AiFillGithub size={18}/>
                </button>
                </a>
            </div>
        </header>
    );
};

export default Header;
