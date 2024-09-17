/** @type {import('tailwindcss').Config} */
module.exports = {
  important:true,
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm: '340px',
      md: '540px',
      lg: '768px',
      xl: '1180px',
    },
    extend: {},
    keyframes:{
      move:{
        '50%':{transform:'translateY(-1rem)'},
      },
      zoom:{
        '50%':{transform:'scale(1.2)'},
      },
      rotate:{
        '100%':{transform:'rotate(360deg)'},
      }
    },
    animation:{
      move:'move 3s linear infinite',
      zoom:'zoom 2s linear infinite',
      rotate:'rotate 5s linear infinite',
    },
    container:{
      center: true,
      padding:{
        DEFAULT: "16px",
        md:"32px"
      }
    },
    fontFamily:{
      Jost:["Jost", "sans-serif"],
      Lobster:["Lobster", "sans-serif"]
    }
  },
  plugins: [],
}

