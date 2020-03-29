import Header from '../components/Header';
import styles from '../components/Comps.module.css';
import Link from 'next/link';

export default function techStack() {

    return (
        <div className={styles.base}>

            <Header />

            <div className={styles.arecont}>

                <div className={styles.box}>



                <h1>
                    Tech Stack:
                </h1>

                <div className={styles.imgCenter}>
                    <img src={require('../images/techStack.png')} />
                </div>

                <h2>
                    Este Blog/Portfólio foi feito usando o framework NextJs, com as linguagens Javascript, HTML, css e ReactJs.
                    Com todas as linguagens escritas em arquivos no formato javascript, com exceção do css, que foi escrito em
                    formato próprio e importado para os arquivos .js
                
                <br/>
                    Houve também uso de conteúdos de terceiros, adicionados por "npm install", tais como os presentes a seguir: <br/>

                    <Link href="https://react-popup.elazizi.com/getting-started">
                        <a target="_blank">
                            PopUp
                        </a>
                    </Link>

                    <br/>

                    <Link href="https://github.com/twopluszero/next-images/">
                        <a target="_blank">
                            Next-Images
                        </a>
                    </Link>
                    <br/>
                    <br/>
                    No geral, durante a composição, Fábio F. Costa foi responsavel principal pelo design e visual. Gabirem Prospero Realizador Silva foi responsavel principal pelas funcionalidades 
                    
                </h2>
                </div>
            </div>
        </div>
    )
};