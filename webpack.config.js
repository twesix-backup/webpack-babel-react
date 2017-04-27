let path = require('path');

module.exports =
    {
        entry: '../root/src/index.js',
        output:
            {
                filename: 'index.js',
                path: path.resolve('../root/dev')
            },
        module:
            {
                loaders:
                [
                    {
                        test: /\.jsx?$/,
                        loader: 'babel-loader',
                        exclude: /node_modules/,
                        query:
                            {
                                presets: ['react', 'latest', 'stage-0']
                            }
                    }
                ]
            }
    };