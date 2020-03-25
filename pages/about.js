import Header from '../components/Header';
import Link from 'next/link';
import styles from '../components/Comps.module.css';



export default function About (){
    return(
        <div className={styles.base}>
            
            <Header/>

        <div className={styles.arecont}>
            <div>
            <p><font size="7" color="#708090" face=""> GABRIEL PRÓSPERO REALIZADOR SILVA </font></p>
            
            <h1>DADOS BÁSICOS</h1>
            
            <h2>IDADE == 18 ANOS</h2>
            <h2>ESTADO CIVIL == SOLTEIRO</h2>
            <h2>CIDADE == CAMBÉ-PR</h2>
            <h2>E-MAIL == PROSPERO@EDU.UNIFIL.BR</h2>
            <h2>ESCOLARIDADE == ENSINO SUPERIOR CURSANDO</h2>
            <h2>CURSO == ENGENHARIA DE SOFTWARE</h2>
            <h2>INSTITUIÇÃO == UNIFIL</h2>

            <h1>CURSOS COMPLEMENTARES</h1>
            <h2>MONTAGEM E MANUTENÇÃO DE COMPUTADORES</h2>

            <h1>HABILIDADES</h1>
            <h2>HTML BÁSICO</h2>
            <h2>JAVA BÁSICO</h2>
            <h2>COREL DRAW BÁSICO</h2>

            <h1>OBJETIVOS</h1>
            <h2> frase pra encher linguiça </h2>
            </div>
            
            <div>
            <p><font size="7" color="#708090" face=""> FABIO FERNANDES COSTA </font></p>
            
            <h1>DADOS BÁSICOS</h1>
            
            <h2>IDADE == 18 ANOS</h2>
            <h2>ESTADO CIVIL == SOLTEIRO</h2>
            <h2>CIDADE == LONDRINA-PR</h2>
            <h2>E-MAIL == FABIO.COSTA@EDU.UNIFIL.BR</h2>
            <h2>ESCOLARIDADE == ENSINO SUPERIOR CURSANDO</h2>
            <h2>CURSO == ENGENHARIA DE SOFTWARE</h2>
            <h2>INSTITUIÇÃO == UNIFIL</h2>

            <h1>HABILIDADES</h1>
            <h2>HTML BÁSICO</h2>
            <h2>JAVA BÁSICO</h2>
            <h2>CSS BÁSICO</h2>
            <h2>JAVASCRIPT BÁSICO</h2>

            <h1>OBJETIVOS</h1>
            <h2> frase pra encher linguiça </h2>
            </div>

        </div>

    </div>

    );
}

