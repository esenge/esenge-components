module.exports = {
    presets: [
        '@babel/preset-env',      // Compile modern JS to a version compatible with older browsers
        '@babel/preset-react',    // Support for JSX/React
        '@babel/preset-typescript', // Support for TypeScript
    ],
    plugins: [
        // Any necessary plugins for your project can go here, for example:
        'react-refresh/babel',  // Fast Refresh for React
    ],
};
