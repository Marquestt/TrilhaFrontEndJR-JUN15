import NavLink from 'components/NavLink';
import styles from './Header.module.css'

const Header = () => {
    return(
        <header className={styles.header}>
            <h1 className={styles.tituloPrimario}>Thatyane Marques</h1>
            <NavLink></NavLink>
        </header>
    )
} 

export default Header;
