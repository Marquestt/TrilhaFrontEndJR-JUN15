import { Link } from 'react-router-dom';
import styles from './NavLink.module.css'

const NavLink = () => {
    return(
        <nav className={styles.nav}>
            <ul className={styles.listLink}>
                <li className={styles.lineLink}>
                    <Link to='/'>Home</Link>
                </li>
                <li className={styles.lineLink}>
                    <Link to='/sobre-mim'>About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavLink;
