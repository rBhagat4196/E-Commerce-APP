/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            oswald: "Oswald, sans-serif",
            urbanist: "Urbanist, sans-serif",
        },
        extend:{

            colors:{
                c0:"#101010",
                c1:"#131313",
                c2:"#202329",
                c3:"#8B8D93",
                c4:"#6b8afD",
                c5:"#2E343D",
              },
        },
    },
    plugins: [],
};
