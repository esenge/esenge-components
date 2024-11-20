import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const config = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'commonjs2',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true, // Enable CSS Modules
                        },
                    },
                    'sass-loader',
                ],
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'src/**/*.scss',
                    to({ context, absoluteFilename }) {
                        // Preserve the structure relative to 'src'
                        const targetPath = absoluteFilename.replace(`${context}/src/`, '');
                        return `${targetPath}`;
                    },
                },
            ],
        }),

    ],
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
    },
    mode: 'production',
};

export default config;
