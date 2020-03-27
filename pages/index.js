import Header from '../components/Header';
import styles from '../components/Comps.module.css';
import matter from 'gray-matter';


export default function index() {
    
    return (
        <div className={styles.base}>
            <Header/>
            <div className={styles.arecont}>

                <h1 >
                    Ultimas Publicações
                </h1>
                
            </div>
            
        </div>
    );
}
