import Link from 'next/link';
import styles from './Comps.module.css'
import PopUp from './PopUp';



const linkStyle = {
  marginRight: 15,
  marginLeft: 15
  
};



const Header = () => (
  <div className={styles.header}>
    <h1 className={styles.tittle}>PORTIFÓLIO</h1>
    <div className={styles.op}>
    
    <Link href="/">
      <a style={linkStyle} >HOME</a>
    </Link>
    
    <Link href="/">
      <a style={linkStyle}>PROJETOS PESSOAIS</a>
    </Link>
    
    <Link href="/about">
      <a style={linkStyle}>TECH STACK</a>
    </Link>

    <Link href="/about">
      <a style={linkStyle}>QUEM SOMOS</a>
    </Link>

    </div>
  </div>
);


export default Header;