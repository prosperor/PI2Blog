import Header from '../components/Header';
import styles from '../components/Comps.module.css';



export default function About() {
    return (
        <div className={styles.base}>

            <Header />

            <div className={styles.arecont}>
                <div className={styles.box}>

                    <p><font size="7" color="#708090" face=""> GABRIEL PRÓSPERO REALIZADOR SILVA </font></p>
                    <div className={styles.grid}>
                        <div className={styles.imgAbout}>


                            <img src={require('../images/generic.png')} height="500" width="500" className={styles.imgbord} />
                        </div>
                    </div>

                    <h1>DADOS BÁSICOS</h1>

                    <h2>IDADE: 18 ANOS<br />
                    ESTADO CIVIL: SOLTEIRO<br />
                    CIDADE: CAMBÉ-PR<br />
                    E-MAIL: PROSPERO@EDU.UNIFIL.BR<br />
                    ESCOLARIDADE: ENSINO SUPERIOR CURSANDO<br />
                    CURSO: ENGENHARIA DE SOFTWARE<br />
                    INSTITUIÇÃO: UNIFIL</h2>

                    <h1>CURSOS COMPLEMENTARES</h1>
                    <h2>MONTAGEM E MANUTENÇÃO DE COMPUTADORES</h2>

                    <h1>HABILIDADES</h1>
                    <h2>HTML BÁSICO<br />
                    JAVA BÁSICO<br />
                    COREL DRAW BÁSICO</h2>

                    <h1>OBJETIVOS</h1>
                    <h2> frase pra encher linguiça </h2>


                </div>





                <div className={styles.box}>

                    <p><font size="7" color="#708090" face=""> FABIO FERNANDES COSTA </font></p>
                    <div className={styles.grid}>
                        <div className={styles.imgAbout}>


                            <img src={require('../images/generic.png')} height="500" width="500" className={styles.imgbord} />
                        </div>
                    </div>

                    <h1>DADOS BÁSICOS</h1>

                    <h2>IDADE: 18 ANOS<br />
                    ESTADO CIVIL: SOLTEIRO<br />
                    CIDADE: LONDRINA-PR<br />
                    E-MAIL: FABIO.COSTA@EDU.UNIFIL.BR<br />
                    ESCOLARIDADE: ENSINO SUPERIOR CURSANDO<br />
                    CURSO: ENGENHARIA DE SOFTWARE<br />
                    INSTITUIÇÃO: UNIFIL</h2>

                    <h1>HABILIDADES</h1>
                    <h2>HTML BÁSICO<br />
                    JAVA BÁSICO<br />
                    CSS BÁSICO<br />
                    JAVASCRIPT BÁSICO</h2>

                    <h1>OBJETIVOS</h1>
                    <h2> frase pra encher linguiça </h2>
                </div>

            </div>
        </div>



    );
}

