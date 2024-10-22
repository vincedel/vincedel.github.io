import React from 'react';

function handleClick(event) {
    const anchor = event.target.getAttribute('href');
    const anchorElement = document.getElementById(anchor.substring(1));

    if (anchorElement) {
        event.preventDefault();
        const offsetTop = anchorElement.offsetTop;
        let marge = 160;

        if (document.querySelector('header.scrolled')) {
            marge = marge / 2;
        }

        window.scrollTo({top: offsetTop - marge, behavior: "smooth"});
    }
}

function MenuItem({ isActive, path, name }) {
    const className = isActive ? 'active' : '';

    return (
        <li>
            <a onClick={handleClick} href={path} className={className}>{name}</a>
        </li>
    );
}

export default MenuItem;
