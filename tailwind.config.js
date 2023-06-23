/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      sm: '0.75rem',
      base: '0.875rem;',
      xl: '1rem',
      'xs': '1.25rem',
      'xm': '1.5rem',
      '2xl': '2rem',
      '3xl': '3rem',
      '4xl': '4rem',
      '5xl': '5rem',
      '45xl': '4.375rem',
      'mega': '6rem',
      'ultra': '8rem',
    },
    
    extend: {
      backgroundImage: {
        'logo-busket': "url('/src/assets/header/busket.svg')",
        'logo-profile': "url('/src/assets/header/profile.svg')",
        'main-paper': "url('/src/assets/main/paper.png')",
        'fallen': "url('/src/assets/main/t-shirt.png')",
        'heart': "url('/src/assets/catal/heart.svg')"
      },
      margin: {
        'main-top': '10.25rem',
        'col-top': '9.56rem',
        'main-left': '4.5rem'
      },
      boxShadow: {
        'card': '0px 0px 7px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        'main-pink': '#F38F8F',
        'main-gray': '#6A6A6A',
        'main-black': '#181818',
        'top-pink': 'rgba(243, 143, 143, 0.29);',
      },
      width: {
        'main-block': '22rem',
        'main-cirlce': '22.5rem',
        'main-small': '3.75rem',
        'header': '64rem'
      },
      lineHeight: {
        'lite': '1.4'
      },
      content: {
        'link': 'url("/src/assets/main/women.png")',
        'bink': 'url("/src/assets/main/words.png")',
        'style': 'url("/src/assets/main/style.png")',
        'arrow': 'url("/src/assets/main/arrow.svg")',
        'boy': "url('/src/assets/coll/boy.png')",
        'boy-sd': "url('/src/assets/coll/boy_sd.png')",
        'handsome': "url('/src/assets/coll/handsome_fr.png')",
        'handsome-sd': "url('/src/assets/coll/handsome_gray.png')",
        'circle': "url('/src/assets/coll/circle.png')",
        'bcircle': "url('/src/assets/coll/bCircle.png')",
        'arrow-top': "url('/src/assets/arrow-up.svg')",
      },
      height: {
        'main-height-block': "47rem",
        'main-height-cirlce': '22.5rem',
        'main-small': '3.75rem'
      },
      maxHeight: {
        '22.5': '14.9rem',
      },
      maxWidth: {
        'col-text': '21.8rem',
        'main-link': '9.5rem',
        'main-text': '39rem',
        'card': '232px'
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif'],
        "fira": ['Fira Sans', 'sans-serif']
      },
      fontWeight: {
        "extra": '275'
      }
    },
  },
  plugins: [],
}

