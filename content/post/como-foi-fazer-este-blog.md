+++
categories = ["posts"]
date = 2020-04-26T03:11:35Z
draft = true
title = "COMO FOI FAZER ESTE BLOG?"

+++
Primeiro precisamos falar que este blog não foi feito por apenas uma pessoa
e sim por duas (Fabio Fernandes Costa e Gabriel Próspero Realizador Silva).
Vamos expor algumas informações técnicas, após, resumidamente, como manipulamos o Hugo, e no fim, as opniões pessoais.

O Hugo, atualmente, é um dos geradores de sites estáticos de código aberto mais populares e simples. Com sua incrível velocidade e flexibilidade, Hugo torna a construção de sites mais simples e fácil.

Originalmente nosso projeto tinha como objetivo rodar em Next.js, mas devido à algumas imprevisões tivemos que mudar para Hugo. Nosso projeto é simples e está em desenvolvimento. Na parte de desenvolvedor temos 5 pastas, e um arquivo.toml:

* **ARQUETYPES:** Responsável por criar escopos/modelos de cabeçalho de publicações.
* **CONTENT:**Aqui ficam armazenados os markdown\`s que nosso Framework processa e exibe.
* **PUBLIC:** Essa pasta possui as configurações da estrutura do HTML que está renderizando os markdown\`s, bem como suas configurações de CSS e outros.
* **STATIC:** Os arquivos daqui serão compliados no site final, assim, existe a possbilidade de criar JS, CSS ou imagem.
* quaisquer arquivos estáticos aqui serão compilados no site final, assim, liberdade total para criar qualquer CSS, JS ou imagem por exemplo.
* **THEMES:** Como o próprio nome diz, essa pasta é destinada ao armazenamento de temas, tais quais podemos usar no HUGO.
* **CONFIG.TOML:** Aqui residem as informações de costrução da nossa página, como parâmetros do tema, cabeçalhos e etc. Funciona como uma espécie de painel de controle geral.

Tivemos, obviamente, um pouco de dificuldade no inicio, mas com o tempo nos adaptamos e conseguimos criar o código e configurar nosso site, migrando todas as informações do repositório antigo para este.