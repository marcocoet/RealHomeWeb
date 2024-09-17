/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        accent: {
          blue: {
            50: '#ddedf5',
            100: '#cce5f3',
            200: '#4b9dca',
            300: '#3789b6',
            400: '#2d7fac',
            // Default
            500: '#2375a2',
            600: '#196b98',
            700: '#0f618e',
            800: '#055784',
            900: '#004d7a',
          },
          gold: {
            50: '#fceeda',
            100: '#e9bc78',
            200: '#dfb26e',
            300: '#d5a864',
            400: '#cb9e5a',
            // Default
            500: '#c19450',
            600: '#b78a46',
            700: '#ad803c',
            800: '#a37632',
            900: '#996c28',
          },
          green: {
            50: '#ecfdf5',
            100: '#cbf2db',
            200: '#47c87c',
            300: '#33b468',
            400: '#29aa5e',
            // Default
            500: '#1fa054',
            600: '#15964a',
            700: '#0b8c40',
            800: '#018236',
            900: '#00782c',
          },
          orange: {
            50: '#fffbeb',
            100: '#fff7d1',
            200: '#ffda5a',
            300: '#ffc646',
            400: '#ffbc3c',
            // Default
            500: '#ffb232',
            600: '#f5a828',
            700: '#eb9e1e',
            800: '#e19414',
            900: '#d78a0a',
          },
          sunset: {
            50: '#ffe9df',
            100: '#ffaa89',
            200: '#ffa07f',
            300: '#ff9675',
            400: '#ff8c6b',
            // Default
            500: '#ff8261',
            600: '#f57857',
            700: '#eb6e4d',
            800: '#e16443',
            900: '#d75a39',
          },
          purple: {
            100: '#EDE9FE',
            200: '#DDD6FE',
            600: '#7C3AED',
          },
        },
        primary: {
          'dark-green': {
            50: '#eef6f5',
            100: '#ddeeea',
            200: '#b2d7d0',
            300: '#83bfb3',
            400: '#4e9789',
            // default
            500: '#468477',
            600: '#3b7166',
            700: '#2c554d',
            800: '#254740',
            900: '#1f3c37',
          },
          'dark-grey': {
            50: '#747474',
            100: '#6a6a6a',
            200: '#606060',
            300: '#565656',
            400: '#4c4c4c',
            // Default
            500: '#424242',
            600: '#383838',
            700: '#2e2e2e',
            800: '#242424',
            900: '#1a1a1a',
          },
          green: {
            50: '#52d1b8',
            100: '#48c7ae',
            200: '#3ebda4',
            300: '#34b39a',
            400: '#2aa990',
            // Default
            500: '#209f86',
            600: '#16957c',
            700: '#0c8b72',
            800: '#028168',
            900: '#00775e',
          },
          'light-grey': {
            100: '#fafafa',
            200: '#f0f0f0',
            300: '#e6e6e6',
            400: '#dcdcdc',
            // Default
            500: '#d2d2d2',
            600: '#c8c8c8',
            700: '#bebebe',
            800: '#b4b4b4',
            900: '#aaaaaa',
          },
          'medium-grey': {
            50: '#cacaca',
            100: '#c0c0c0',
            200: '#b6b6b6',
            300: '#acacac',
            400: '#a2a2a2',
            // Default
            500: '#989898',
            600: '#8e8e8e',
            700: '#848484',
            800: '#7a7a7a',
            900: '#707070',
          },
          orange: {
            50: '#fff3eb',
            100: '#ffe7d7',
            200: '#ffdbc2',
            300: '#ffc299',
            400: '#ffb584',
            500: '#ffceae',
            600: '#ffa86e',
            700: '#ff9a56',
            800: '#ff8c39',
            // Default
            900: '#ff7e00',
          },
        },
        secondary: {
          'light-blue': {
            // Default
            500: '#f6f9fa',
            600: '#eceff0',
            700: '#e2e5e6',
            800: '#d8dbdc',
            900: '#ced1d2',
          },
          'pale-green': {
            50: '#9fc3bc',
            100: '#95b9b2',
            200: '#8bafa8',
            300: '#81a59e',
            400: '#779b94',
            // Default
            500: '#6d918a',
            600: '#638780',
            700: '#597d76',
            800: '#4f736c',
            900: '#456962',
          },
          white: {
            600: '#f5f5f5',
            700: '#ebebeb',
            800: '#e1e1e1',
            900: '#d7d7d7',
          },
        },
      },
      fontFamily: {
        inter: '"Inter", sans-serif',
      },
      fontSize: {
        xxs: ['0.625rem', { lineHeight: '1rem' }],
      },
    },
  },
  plugins: [],
}

