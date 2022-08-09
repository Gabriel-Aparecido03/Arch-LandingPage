import { List } from "phosphor-react";

import logoImage from '../../assets/logo.svg'
import { useNavigate } from "react-router-dom";
import './style.css'

export function Header() {

    const navigation = useNavigate()

    return (
        <header className="header-container">
            <div className="header-logo-container">
                <img src={logoImage} alt="" />
            </div>
            <nav className="header-nav-container">
                <ul>
                    <li onClick={()=>{navigation('/portfolio')}}>Portfolio</li>
                    <li onClick={()=>{navigation('/about')}}>About us</li>
                    <li onClick={()=>{navigation('/contact')}}>Contact Us</li>
                </ul>
            </nav>
            <div className="button-open-menu">
                <button>
                    <List size={24}/>
                </button>
            </div>
        </header>
    )
}