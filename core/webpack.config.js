const webpack = require('webpack');

module.exports = {
    entry: "./index.ts",
    output: {
        filename: "./dist/bundle.js",
        libraryTarget: 'umd',
        library: 'Core',
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"]
    },
    plugins: [
        new webpack.IgnorePlugin(/^pg-native$/)
    ],
    mode: 'development',
    target : 'node',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { test: /\.js$/, loader: "source-map-loader" },

        ],
        noParse : [/pg\/lib\/native/]
    }

    // Other options...
};
