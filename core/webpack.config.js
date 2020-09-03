const webpack = require('webpack');

if (process.env.NODE_ENV === "development") {
    module.exports = {
        entry: "./index.ts",
        output: {
            filename: "./dist/bundle.js",
            libraryTarget: 'umd',
            library: 'Core',
        },

        // Create source maps
        devtool: "source-map",

        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx", ".js"]
        },
        plugins: [
            new webpack.IgnorePlugin(/^pg-native$/)
        ],
        mode: "development",
        target: 'node',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                {test: /\.js$/, loader: "source-map-loader"},

            ],
            noParse: [/pg\/lib\/native/]
        },
        watchOptions: {
            ignored: /node_modules/
        }

        // Other options...
    };

} else {
    const path = require('path');
    const AwsSamPlugin = require("aws-sam-webpack-plugin");

    const awsSamPlugin = new AwsSamPlugin();

    module.exports = {
        entry: () => awsSamPlugin.entry(),

        // Write the output to the .aws-sam/build folder
        output: {
            filename: (chunkData) => awsSamPlugin.filename(chunkData),
            libraryTarget: "commonjs2",
            path: path.resolve(".")
        },

        // Create source maps
        devtool: "source-map",

        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx", ".js"]
        },
        plugins: [
            new webpack.IgnorePlugin(/^pg-native$/),
            awsSamPlugin
        ],
        mode: "production",
        target: 'node',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                {test: /\.js$/, loader: "source-map-loader"},

            ],
            noParse: [/pg\/lib\/native/]
        },
        watchOptions: {
            ignored: /node_modules/
        }

        // Other options...
    };
}

