import { Link } from 'react-router-dom';
import styles from './NavLink.module.css'

const NavLink = () => {
    return(
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link to='/' className={styles.link}>Home</Link>
                </li>
                <li>
                    <Link to='/entre-em-contato' className={styles.link}>Entre em contato</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavLink;
