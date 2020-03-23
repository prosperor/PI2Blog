import Link from 'next/link';
import styles from './Comps.module.css'
import PopUp from './PopUp';



const linkStyle = {
  marginRight: 30
  
};



const Header = () => (
  <div className={styles.header}>
    <h1 className={styles.tittle}>>Exemplo &#123;</h1>
    <div className={styles.op}>


    <PopUp/>

    
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    
    <Link href="/about">
      <a style={linkStyle}>Projetos pessoais</a>
    </Link>
    
    <Link href="/about">
      <a style={linkStyle}>Tech Stack</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>Quem Somos</a>
    </Link>
    </div>
  </div>
);


export default Header;