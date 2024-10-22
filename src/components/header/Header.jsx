// src/App.jsx
import React from 'react';
import { useState, useEffect } from "react";
import photoCV from './../../../public/img/photo-cv.png'
import SwitchThemeColor from "./SwitchThemeColor";
import Menu from "./Menu";

function Header({theme, toggleTheme}) {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    let headerClasses = ['flex', 'w-full', 'gap-px', 'h-20'];

    if (isScrolled) {
        headerClasses.push('scrolled')
    }

    return (
        <header className={headerClasses.join(' ')}>
            <div className="cell-empty"></div>
            <div className="cell name">
                <div className="flex items-center">
                    <img src={photoCV} className="img-profile" alt="Photo de profil de Vincent Delevoye"/>
                    <span className="text-lg font-medium font-body ml-4">Vincent Delevoye</span>
                </div>
            </div>
            <div className="cell double menu items-center">
                <Menu/>
                <SwitchThemeColor theme={theme} toggleTheme={toggleTheme}/>
            </div>
            <div className="cell-empty"></div>
        </header>
    );
}

export default Header;
