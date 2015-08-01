module.exports = {
  entry: "./client/src/app.jsx",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ],
  },
  output: {
    filename: './client/bundle.js'       
  }
};

//run - ./node_modules/.bin/webpack --watch