// src/App.jsx
import React from 'react';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function getUserThemeClass() {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    if (darkThemeMq.matches) {
        return 'dark';
    } else {
        return 'light';
    }
}

function App() {


    return (
        <div className={getUserThemeClass()} id="home">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
