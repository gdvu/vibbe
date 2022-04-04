import { createDefaultRoot } from './root';

const rootDefault = createDefaultRoot({
  palette: {
    purple100: '#D9DCFC',
    purple200: '#B4BAF9',
    purple300: '#8C93EF',
    purple400: '#6C74E0',
    purple500: '#3F48CC',
    purple600: '#2E35AF',
    purple700: '#1F2592',
    purple800: '#141876',
    purple900: '#0C0F61',

    green100: '#D5FBDD',
    green200: '#ACF8C4',
    green300: '#7FEBAC',
    green400: '#5CD79B',
    green500: '#2dbd85',
    green600: '#20A27C',
    green700: '#168872',
    green800: '#0E6D64',
    green900: '#085A5A',

    blue100: '#C9FBF6',
    blue200: '#95F8F6',
    blue300: '#5EE5EC',
    blue400: '#36C5D9',
    blue500: '#009BC1',
    blue600: '#0078A5',
    blue700: '#005A8A',
    blue800: '#00406F',
    blue900: '#002E5C',

    yellow100: '#FFF6D5',
    yellow200: '#FFEBAB',
    yellow300: '#FFDE82',
    yellow400: '#FFD063',
    yellow500: '#ffba2f',
    yellow600: '#DB9722',
    yellow700: '#B77717',
    yellow800: '#935A0E',
    yellow900: '#7A4509',

    red100: '#FFD9D3',
    red200: '#FFACA8',
    red300: '#FF7C83',
    red400: '#FF5C74',
    red500: '#ff265b',
    red600: '#DB1B5D',
    red700: '#B7135B',
    red800: '#930C54',
    red900: '#7A074F'
  },
  fonts: {
    fontMain: '"Work Sans", sans-serif'
  },
  radius: {
    main: '16px',
    semiRounded: '12px',
    rounded: '28px'
  }
});

export default rootDefault;
