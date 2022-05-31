const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

const deps = require("./package.json").dependencies;

module.exports = () => {

    return {

        output: {
            publicPath: "http://localhost:3001/",
        },
    
        resolve: {
            extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
        },

        devServer: {
            port: 3001,
            historyApiFallback: true,
        },
    
        module: {
            rules: [
    
                // Rule for React
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader:'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-react',
                                {
                                    runtime: 'automatic'
                                }
                            ]
                        ]
                    }
                },
    
                // Rule for Styles
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
    
                },

            ]
    
        },

        plugins: [

            new ModuleFederationPlugin({
                name: "header",
                filename: "remoteEntry.js",
                remotes: {
                    main: "main@http://localhost:3000/remoteEntry.js",
                },

                exposes: {
                  "./Header": "./src/components/Header/Header.jsx",
                },

                shared: {
                  ...deps,
                  react: {
                    singleton: true,
                    requiredVersion: deps.react,
                  },
                  "react-dom": {
                    singleton: true,
                    requiredVersion: deps["react-dom"],
                  },
                },
              }),

              new HtmlWebpackPlugin({ template: './public/index.html' }),
        ],
    }

}