import styles from './Home.module.css'
import imagemProfile from '../Home/imagens/profile.jpg'

const Home = () => {
    return(
        <main className={styles.mainContainer}>
            <h2>Sobre mim:</h2>
            <img src={imagemProfile} alt='Imagem de Thatyane Marques sorrindo'/>
        </main>
    )
}

export default Home;
