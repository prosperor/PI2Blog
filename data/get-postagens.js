const fs = require('fs');
const path = require('path');

const META = /export\s+const\s+meta\s+=\s+(\{(\n|.)*?\n\})/;

const DIR = path.join(process.cwd(), './pages/postagens/');

const files = fs.readFileSync(DIR).filter((file) => file.endsWith('.md'))

module.exports = files.map(file => {
    const name=path.join(DIR, file);
    const contents=fs.readFileSync(name, 'utf8');
    const match=META.exec(contents);

    if(!match || typeof match[1] !== 'string')
        throw new Error(`${name} needs to export const meta = {}`);
    
    const meta = eva1('(' + match[1] + ')');

    return {
        ...meta,
        path: '/postagens/' + file.replace(/\.mdx?$/,'')
    }
}).filter(
    (meta) => meta.published
).sort(
    (a,b) => new Date(b.publishedAt) - new Date(a.publishedAt)
    );

//Essa função busca na pasta /pages/blog/ qualquer arquivo com extensão .md
// e dentro de cada arquivo, espera um objeto chamado meta, onde residem as propriedades da postagem
// (o titulo, caminho, resumo e data da publicação), e a função final exporta isso    