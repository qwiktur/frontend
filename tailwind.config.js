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
            fontFamily: {
                'montserrat': ['Montserrat', 'Helvetica', 'Arial', 'sans-serif']
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}