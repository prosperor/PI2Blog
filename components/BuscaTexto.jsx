index.getInitialProps = async function() {
    const posts = importAll(require.context('../pages/api/', true, /\.md$/))
        .reverse() // ordering them from most recent to oldest
        .map(frontMatter)
        .map(withReadingTime)
        .map(withNoBody);

    return { posts };
};