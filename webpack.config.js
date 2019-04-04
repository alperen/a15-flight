module.exports = {
    entry:'./src/react/index.js',
    output:{
        filename:'build.js',
        path: `${__dirname}/dest/react`,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    },
    watch:true,
    mode:'development'
};