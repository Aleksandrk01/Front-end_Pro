module.exports = {
    mode: 'development',
   entry: './src/js/index.js',
    output:{
        filename: 'index.js',
    },
    module: {
        rules: [
          {
            test: /\.scss$/i,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader",],
          },
        ],
      },
};