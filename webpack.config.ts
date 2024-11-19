import path from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
    entry: './src/index.ts', // Your entry point
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'], // Add extensions for TypeScript and JSX
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader', // Use ts-loader for TypeScript files
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // Inject styles into DOM
                    'css-loader',   // Process CSS
                    'sass-loader',  // Compile SCSS to CSS
                ],
            },
        ],
    },
    mode: 'production', // Set to 'production' for optimized build
};

export default config;
