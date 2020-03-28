const withImages = require('next-images');

module.exports = {
    webpack: (config) => {
      config.module.rules.push(
        {
          test: /\.md$/,
          use: 'raw-loader'
        }
      )
  
      return config
    }
  }, withImages(); 
