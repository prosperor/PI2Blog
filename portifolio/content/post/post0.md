---
title: "COMO FOI FAZER ESTE BLOG?"
date: 2020-04-26 T01:11:35-02:00
categories: ["posts"]
---

Primeiro precisamos falar que este blog não foi feito por apenas uma pessoa
e sim por duas (Fabio Fernandes Costa e Gabriel Próspero Realizador Silva).
Vamos expor algumas informações técnicas, após, resumidamente, como manipulamos o Hugo, e no fim, as opniões pessoais.

Para esse projeto usamos Hugo e mais algumas depêndencias (um pouco mais do que gostariamos) e o versionador foi o GitHub.

O Hugo, atualmente, é um dos geradores de sites estáticos de código aberto mais populares e simples. Com sua incrível velocidade e flexibilidade, Hugo torna a construção de sites mais simples e fácil.

 Nosso projeto é simples e está em desenvolvimento. Na parte de desenvolvedor temos uma pasta para armazenar as publicações, um que armazena a publicação (Post) e outro que é responsável pelo cabeçalho da pagina (Header). E a pasta 'page', abriga as paginas do nosso blog, cada uma delas renderiza seus respectivos conteudos e o Header para a navegação. A customização da pagina fica por conta do styles.css que é extendido para o Comps.module.css para incorporarmos nos componentes. Como diria o Fabio, o styles.css é o orgão do nosso código e o Comps.module.css é o respirador mecânico, e nem sempre da pra fazer o que precisamos com o pulmão, para isso usamos o respirador.
