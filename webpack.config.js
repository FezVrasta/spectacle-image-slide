module.exports = {
     module: {
         loaders: [{
             test: /\.jsx?$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         },{
             test: /\.css$/,
             loader: 'css-loader'
         },{
             test: /\.gif$/,
             loader: 'file-loader?image-loader'
         }]
     }
 }