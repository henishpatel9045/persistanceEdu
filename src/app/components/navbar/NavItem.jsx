import React from 'react'
import "./navbar.scss";

function NavItem({ title, onClick }) {
    return (
        <button
            className='nav-btn'
            onClick={onClick}>{title}</button>
    )
}

export default NavItem