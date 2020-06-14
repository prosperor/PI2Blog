+++
categories = ["SERVIDOR"]
date = 2020-05-31T00:39:00Z
title = "REGISTRO DE DOMÍNIO."

+++
Para registrar o domínio esse site usamos o [Goddady](https://br.godaddy.com/). O processo foi mais simples do que aparenta ser. Primeiro compramos o domínio, depois foi preciso inserir as configurações do Servidor de Nomes do [Netlify](https://www.netlify.com/) no meu domínio e registrar os DSN´s. 

Nosso site estava com um erro de CORS (Cross-origin Resource Sharing), um mecanismo utilizado pelos navegadores para compartilhar recursos entre diferentes origens. O CORS é uma **especificação do W3C** e faz uso de **headers do HTTP** para informar aos navegadores se determinado recurso pode ser ou não acessado.

Em resumo, o cliente não podia consumir determinada parte da API, pois ele era encaminhado para algo duplicado que só pode ser acessado pelo servidor, onde, caso o cliente tenha acesso, o mesmo pode entrar em um looping infinito de requisições e/ou ter acesso a possíveis vetores de ataque no servidor, já que a página requisitada, na maioria das vezes está presente e disponível apenas ao servidor.

Resolvemos o problema alterando algumas configurações no config.toml e netlify.toml.