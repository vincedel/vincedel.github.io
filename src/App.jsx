// src/App.jsx
import { useState, useEffect } from "react";
import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function getUserThemeClass() {
    const themeSaved = localStorage.getItem("theme");
    if (themeSaved) {
        return themeSaved;
    }

    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
        return 'dark';
    } else {
        return 'light';
    }
}

function App() {
    const [ theme, setTheme ] = useState(getUserThemeClass());
    const [ backdropClassOpen, setBackdropOpen ] = useState('')

    const toggleTheme = () => {
        setBackdropOpen('backdrop-open');
        setTimeout(() => {
            setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
            setTimeout(() => {
                setBackdropOpen('');
            }, "250")
        }, "500");

    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div className={[theme, backdropClassOpen].join(" ")} id="home">
            <Header theme={theme} toggleTheme={toggleTheme}/>
            <Main/>
            <Footer/>
            <div className="backdrop"></div>
        </div>
    );
}

export default App;
