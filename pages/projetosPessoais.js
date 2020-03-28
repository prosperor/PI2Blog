import Header from '../components/Header';
import Link from 'next/link';
import styles from '../components/Comps.module.css';

export default function ProjetosPessoais() {
    return (
        <div className={styles.base}>

            <Header />
            <div className={styles.arecont}>
                <h1>Projetos Pessoais</h1>
                <div className={styles.box}>
                    <p className={styles.tittlePP}><font size="7" color="#708090" face="">

                        TFT Team Generator
                </font>
                    </p>
                    <div className={styles.gridV2}>
                        <div className={styles.imgAbout}>
                            <img src={require('../images/generic.png')} height="250" width="250" className={styles.imgbord}></img>
                        </div>
                    </div>

                    <h1>RESUMO:</h1>
                    <h2><font size="6">
                          Este codigo foi feito no intuito de tornar o jogo TeamFight Tactics mais interessantes para aqueles
                        afim de testar novas composições de campeões. Como? gerando um conjunto de combinações de origens e classes aleatórias, com ambos podendo
                        ter suas quantidades alteradas.
                  </font></h2>

                    <h1>COM O QUE FOI FEITO:</h1>
                    <h2><font size="6">
                      Todo o código foi escrito em html, javascript e CSS, com uma função princípal na qual, as outras foram baseadas.
                    </font></h2>

                    <h1>DESENVOLVEDOR (ES):</h1>
                    <h2><font size="6">
                        Fábio Fernandes Costa
                    </font></h2>

                    <h1>GITHUB</h1>

                    <p>

                    <Link href="https://github.com/KillPHP/tftteamgenerator">
                        <a target="_blank"><font size="6">  https://github.com/KillPHP/tftteamgenerator</font></a>
                    </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}