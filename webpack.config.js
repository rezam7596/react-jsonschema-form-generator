const path = require('path');

module.exports = {
    entry: './src/FormGenerator.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'reactJsonschemaFormGenerator',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                }]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                        },
                    },
                    'postcss-loader',
                    'sass-loader',
                ]
            },
        ]
    },
    resolve: {
        alias: {
            'react': path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        }
    },
    externals: [
        // Don't bundle
        {
            react: {
                commonjs: "react",
                commonjs2: "react",
                amd: "React",
                root: "React"
            },
            "react-dom": {
                commonjs: "react-dom",
                commonjs2: "react-dom",
                amd: "ReactDOM",
                root: "ReactDOM"
            },
            classnames: 'classnames',
            'deepmerge': 'deepmerge',
            'moment-jalaali': 'moment-jalaali',
            'react-jsonschema-form': 'react-jsonschema-form',
            'tapsi-components': 'tapsi-components',
        },
        function({ request }, callback) {
            if (/^@material-ui\//.test(request)){
                return callback(null, request);
            }
            callback();
        },
    ],
};
