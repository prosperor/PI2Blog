import Header from '../components/Header';
import Link from 'next/link';



export default function About (){
    return(
        <div>
            <Header>
                <Link href="/about">
                    <a title="About Page">About Page</a>
                </Link>
            </Header>
            <h1>FABIO</h1>
            <p>NOME COMPLETO:</p>

        </div>
    );
}

