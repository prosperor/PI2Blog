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

                <div>
                    <p><h1>COMO FOI FAZER ESTE BLOG?</h1></p>
                    <h2>Primeiro precisamos falar que este blog não foi feito por apenas uma pessoa
                        
                    </h2>
                </div>
                
            </div>

            <Post />

            
        </div>
    );
}
