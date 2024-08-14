import styles from './Text.module.css'
import imagemProfile from '../imagens/profile.jpg'

const Text = () => {
    return(
        <article className={styles.container}>
            <div>
                <h2>Sobre mim:</h2>
                <p>
                    Teste
                </p>
            </div>
            <div>
                <img src={imagemProfile} alt='Imagem de Thatyane Marques sorrindo'/>
            </div>
        </article>
    )
}

export default Text;
