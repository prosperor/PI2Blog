const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/
});

module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx']
});

//Isso diz para importar arquivos com extensão .md(markdown) automaticamente e processá-los como arquivos JSX, veremos que nossa postagem é na verdade os dois, um componente JSX React e um arquivo Markdown ao mesmo tempo.