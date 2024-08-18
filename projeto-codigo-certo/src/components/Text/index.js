import styles from './Text.module.css'
import imagemProfile from '../imagens/profile.jpg'

const Text = () => {
    return(
        <article className={styles.container}>
            <div className={styles.containerText}>
                <h2>Sobre mim:</h2>
                <div>
                    <h3>Nome:</h3>
                    <p>
                        Thatyane Carvalho Marques.
                    </p>
                    <h3>Idade:</h3>
                    <p>
                        26 anos.
                    </p>
                    <h3>Sobre mim:</h3>
                    <p>
                        Teste
                    </p>
                    <h3>Gostos pessoais:</h3>
                    <p>
                        Teste
                    </p>
                    <h3>Motivações</h3>
                    <p>
                        Teste
                    </p>
                </div>
            </div>
            <div className={styles.containerImagem}>
                <img src={imagemProfile} alt='Imagem de Thatyane Marques sorrindo'/>
            </div>
        </article>
    )
}

export default Text;
