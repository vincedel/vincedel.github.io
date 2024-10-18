// src/App.jsx
import React from 'react';

function handleClick(event) {
    let anchor = event.target.getAttribute('href');
    let anchorElement = document.getElementById(anchor.substring(1));

    if (anchorElement) {
        anchorElement.scrollIntoView({behavior: "smooth"});
    }
}

function MenuItem(props) {


    return (
        <li>
            <a onClick={handleClick} href={props.path}>{props.name}</a>
        </li>
    );
}

export default MenuItem;
