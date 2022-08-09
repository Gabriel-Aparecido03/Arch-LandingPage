import { useNavigate } from 'react-router-dom'
import logoWhiteImage from '../../assets/logo-white-little.svg'

import './style.css'

export function Footer() {
    const navigation = useNavigate()
    return (
        <footer className="footer">
            <div className="image-content">
                <img src={logoWhiteImage} alt="" />
            </div>
           <div className="nav-content">
                <ul>
                <li onClick={()=>{navigation('/portfolio')}}>Portfolio</li>
                    <li onClick={()=>{navigation('/about')}}>About us</li>
                    <li onClick={()=>{navigation('/contact')}}>Contact Us</li>
                </ul>
           </div>
           <div className="button-content">
                <button>See Our Portfolio</button>
           </div>
        </footer>
    )
}