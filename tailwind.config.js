const colors = require("tailwindcss/colors");
module.exports = {
    purge: {
        mode: "layers",
        content: [
            "./resources/**/*.blade.php",
            "./resources/**/*.js",
            "./resources/**/*.vue"
        ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                rose: colors.rose,
                teal: colors.teal
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
