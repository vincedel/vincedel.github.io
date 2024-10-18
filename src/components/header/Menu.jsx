// src/App.jsx
import React, {useState} from 'react';
import MenuItem from "./MenuItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { menu } from "../../data/menu";


function Menu(props) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [burgerIcon, setBurgerIcon] = useState(faBars)

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

    return (
        <div className={navMenuClasses.join(' ')}>
            <nav className="relative">
                <ul className="flex gap-x-3">
                    {menu.map((link) => {
                        return (
                            <MenuItem {...link} />
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
