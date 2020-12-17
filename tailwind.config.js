module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                green: {
                    light: '#00a000',
                    default: '#009000',
                    dark: '#006600',
                }
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
               }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}