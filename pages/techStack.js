import Header from '../components/Header';
import styles from '../components/Comps.module.css';

export default function techStack() {

    return (
        <div className={styles.base}>
            
            <Header/>

            <div className={styles.arecont}>
                <h1>
                    Tech Stack:
                </h1>
                

                <p>
                       Este Blog/Portfólio foi feito usando o framework NextJs, com as linguagens Javascript, HTML, css e React.
                    Com todas as linguagens escritas em arquivos no formato javascript, com exceção do css, que foi escrito em
                     formato próprio e importado para os arquivos .js
                </p>
            </div>
        </div>
    )
};