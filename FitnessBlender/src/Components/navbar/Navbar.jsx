import React, { useState } from "react";
import Login from "../Login/Login";

import style from './navbar.module.css'
export default function Navbar(){
    const [menu, setMenu] = useState(false)

    return(
        <div className={style.Navbar}>
            <a className={style.logo} href="/"><img src="data:image/jpeg;base64,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" alt="Logo"/></a>
            <div className={style.menu}>
                <img 
                className={style.menubtn} 
                src={
                    menu 
                    ? "https://cdn-icons-png.flaticon.com/128/1828/1828665.png"
                    : "https://cdn-icons-png.flaticon.com/128/2099/2099192.png"
                }
                alt="menu-btn"
                onClick={()=> setMenu(!menu)}
                />
                <ul className={`${style.menuItems} ${menu && style.menu}`} 
                onClick={()=> setMenu(false)}
                >
                    <li><a href="#membership">MeberShip</a></li>
                    <li><a href="#programs">Programs</a></li>
                    <li><a href="#healthy_living">Healthy Living</a></li>
                    <li><a href="#articles">articles</a></li>
                    <li><a href="#community">Community</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#store">Store</a></li>
                    <hr/>
                    <li><Login /></li>
                </ul>
            </div>
        </div>
    )
}