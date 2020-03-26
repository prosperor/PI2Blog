require.context('../posts/', true, /\.md$/);

export default function importAll(context) {
    return context
        .keys()
        .map(context)
        .map(module => module.default);
}

module.exports = {
    module: {
      rules: [
        {
          test: /\.md$/i,
          use: 'raw-loader',
        },
      ],
    },
  };