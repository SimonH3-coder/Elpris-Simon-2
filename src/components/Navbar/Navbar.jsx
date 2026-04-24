import { NavLink } from 'react-router'
import navIcon from '../../assets/navIcon.svg'
import style from './Navbar.module.scss'
export function Navbar() {
    const linkClassName = ({ isActive }) => `${style.navLink} ${isActive ? style.active : ''}`.trim()

    return (
        <nav className={style.navStyling}>
            <img src={navIcon} alt="Navigation icon" />
            <div>
                <NavLink to="/overview" className={linkClassName}>OVERSIGT</NavLink>
                <NavLink to="/now" className={linkClassName}>LiGE NU</NavLink>
                <NavLink to="/history" className={linkClassName}>HISTORIK</NavLink>
            </div>

        </nav>
    )
}