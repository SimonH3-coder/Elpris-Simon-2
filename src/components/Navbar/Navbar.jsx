import { Link } from 'react-router'
import navIcon from '../../assets/navIcon.svg'
import style from './Navbar.module.scss'
export function Navbar() {
    return (
        <nav className={style.navStyling}>
            <img src={navIcon} alt="Navigation icon" />
            <div>
                <Link to="/overview">Oversigt</Link>
                <Link to="/now">Lige nu</Link>
                <Link to="/history">Historik</Link>
            </div>

        </nav>
    )
}