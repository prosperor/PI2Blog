import React from 'react'
import ReactMarkdown from 'react-markdown'
import styles from './Comps.module.css'
import Link from 'next/link';

const linkStyle = {
  marginRight: 0,
  marginLeft: 0,
};

export default class extends React.Component {
 

  static async getInitialProps() {
    const content = await require(`../api/esse.md`)
    return { content }
  }

  render() {
    return (
      <div>
        <ReactMarkdown source={this.props.content} />

        <div className={styles.box}>
        <div className={styles.text}>

        <p><h1>COMO FOI FAZER ESTE BLOG?</h1></p>
        
        <h2>
          Primeiro precisamos falar que este blog não foi feito por apenas uma pessoa
          e sim por duas (Fabio Fernandes Costa e Gabriel Próspero Realizador Silva).
          Vamos expor algumas informações técnicas, após, resumidamente, como manipulamos o Next, e no fim, as opniões pessoais.
          <p />
          Para esse projeto usamos Next.js e mais algumas depêndencias (um pouco mais do que gostariamos) e o versionador foi o GitHub.
          <p />
          O Next.js é um framework de aplicativos da web gratuito que funciona basicamente com componentes, e tudo aqui pode ser "componentizado". Uma função, uma página, um cabeçalho, uma ferramenta, pode não parecer muito quando só, mas quando em conjunto, app's web incriveis e complexos podem ser criados. Para isso você precisa ter um prévio conhecimento de JavaScript e React.js. 
          <p />
          Nosso projeto é simples e está em desenvolvimento. Criamos 2 componentes, um que armazena a publicação (Post) e outro que é responsável pelo cabeçalho da pagina (Header). E a pasta 'page', abriga as paginas do nosso blog, cada uma delas renderiza seus respectivos conteudos e o Header para a navegação. A customização da pagina fica por conta do styles.css que é extendido para o Comps.module.css para incorporarmos nos componentes. Como diria o Fabio, o styles.css é o orgão do nosso código e o Comps.module.css é o respirador mecânico, e nem sempre da pra fazer o que precisamos com o pulmão, para isso usamos o respirador.
          <p />
          <p />
          OPINIÃO DO GABRIEL = Foi uma grande dificuldade, e assim nasce o conhecimento. Não irei mentir, JavaScript não é a linguagem que eu mais gosto, e trabalhar com React.js não foi tão prazeroso como eu esperava que fosse, mas irei usar o que aprendi e quero aprofundar meu conhecimento no React.js criando outro projeto individual com o Next.js. Não estou totalmente satisfeito com o que tenho, mas vou me esforçar para melhorar.
          <p />
          <p />
          OPINIÃO DO FABIO = É um projeto complicado, principalmente pelo fato de estar sendo feito do zero, com pouco conhecimento de next. Houve muita tentativa e erro, exatamente como esperado, coisas que não puderam ser feitas assim como coisas que puderam, agora é trabalhar duro para fazer o que não conseguimos fazer, e ir além.
        </h2>
              
        
        </div>
        </div>
       
      </div>
    )
  }
}