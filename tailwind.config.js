/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        hankenGrotesk: "'Hanken Grotesk', sans-serif",
      },
      // fontFamily: {
      //   'hanken': ['HankenGrotesk', 'sans-serif'],
      //   'hanken-bold': ['HankenGrotesk-Bold', 'sans-serif'],
      //   'hanken-extra-bold': ['HankenGrotesk-ExtraBold', 'sans-serif'],
      //   'hanken-medium': ['HankenGrotesk-Medium', 'sans-serif'],
      // },
      colors: {
        // Primary Colors
        lightRed: 'hsl(0, 100%, 67%)',
        orangeyYellow: 'hsl(39, 100%, 56%)',
        greenTeal: 'hsl(166, 100%, 37%)',
        cobaltBlue: 'hsl(234, 85%, 45%)',

        // Gradients
        lightSlateBlue: 'hsl(252, 100%, 67%)',  // background
        lightRoyalBlue: 'hsl(241, 81%, 54%)',   // background
        violetBlue: 'hsla(256, 72%, 46%, 1)',   // circle
        persianBlue: 'hsla(241, 72%, 46%, 1)',  // circle

        // Neutral Colors
        white: 'hsl(0, 0%, 100%)',
        paleBlue: 'hsl(221, 100%, 96%)',
        lightLavender: 'hsl(241, 100%, 89%)',
        darkGreyBlue: 'hsl(224, 30%, 27%)',
      },
      screens: {
        sm: '480px',
        md: '640px',
        lg: '768px',
        xl: '976px',
        '2xl': '1024px',
        '3xl': '1280px',
        '4xl': '1440px',
        '5xl': '1536px',
        '6xl': '1600px',
      },
    },
  },
  plugins: [],
}

