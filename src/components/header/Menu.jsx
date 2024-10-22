// src/App.jsx
import React, {useState, useEffect} from 'react';
import MenuItem from "./MenuItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { menu } from "../../data/menu";


function Menu(props) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [burgerIcon, setBurgerIcon] = useState(faBars)
    const [activeMenuItem, setActiveMenuItem] = useState(null);

    const handleMenuOpen = (event) => {
        if (!menuOpen) {
            setBurgerIcon(faXmark);
        } else {
            setBurgerIcon(faBars);
        }
        setMenuOpen(!menuOpen);
    }

    let navMenuClasses = ['mr-8', 'flex', 'nav-menu', 'flex-grow'];
    if (menuOpen) {
        navMenuClasses.push("open");
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 160;
            let currentSection = null;
            for (let i = 0; i < menu.length; i++) {
                const section = menu[i];
                const id = section.path.substring(1); // Remove '#' from href
                const element = document.getElementById(id);

                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    if (scrollPosition >= offsetTop) {
                        currentSection = section.path;
                    }
                }
            }
            if (currentSection !== activeMenuItem) {
                setActiveMenuItem(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeMenuItem]);

    return (
        <div className={navMenuClasses.join(' ')}>
            <nav className="relative">
                <ul className="flex gap-x-3">
                    {menu.map((link) => {
                        return (
                            <MenuItem setMenuOpen={setMenuOpen} {...link} key={link.path} isActive={activeMenuItem === link.path} />
                        );
                    })}
                </ul>
            </nav>
            <button className="text-lg font-body" onClick={handleMenuOpen}>
                {/*<FontAwesomeIcon icon={burgerIcon}/>*/}
            </button>
        </div>
    );
}

export default Menu;
