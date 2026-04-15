import { useState } from 'react';
import Menu from './Menu.jsx';
import style from "./Menu.module.css";

export default function MenuList({ menus, style }) {
    const handleClick = (e) => {
        e.preventDefault();
        alert("메뉴 클릭됨");
    }
    return (
        <nav>
            <ul className={style}>
                { menus.map((menu, idx) =>
                    <li key={idx}>
                        <Menu   href={menu.href}
                                style={menu.style}
                                name={menu.name}
                                click={handleClick} />
                    </li>
                ) }
            </ul>
        </nav>
    )
}