import Header from '../components/Header';
import styles from '../components/Comps.module.css';
import Post from '../components/Post'




export default function index() {
    
    return (
        <div className={styles.base}>
            <Header/>
            <div className={styles.arecont}>

                <h1 >
                    Ultimas Publicações
                </h1>
                
            </div>

            <Post />

            
        </div>
    );
}
