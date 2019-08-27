const path = require('path')

module.exports = {
  entry: './src/unicode-trivia.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules|dist|test/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'unicode-trivia.js',
    library: 'unicodeTrivia',
    libraryTarget: 'umd'
  }
}
