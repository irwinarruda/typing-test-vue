import { CTabListStyles, CTabStyles } from './Tabs';

export const theme = {
    baseStyles: {
        CTab: CTabStyles,
        CTabList: CTabListStyles,
    },
    styles: {
        global: {
            body: {
                bgColor: 'white',
                color: 'black',
            },
        },
    },
    colors: {
        white: '#FDFDFD',
        black: '#393F45',
        brand: {
            200: '#A5CDFF',
            300: '#80B8FF',
            400: '#4F9CFF',
            500: '#177FFE',
        },
        blue: {
            200: '#A5CDFF',
            300: '#80B8FF',
            400: '#4F9CFF',
            500: '#177FFE',
        },
        orange: {
            200: '#FFC4BB',
            300: '#FFADA1',
            400: '#FF7F6B',
            500: '#FF624A',
        },
        gray: {
            200: '#E9EFF5',
            300: '#D1DEEB',
            400: '#A9C1D9',
            500: '#86A4C2',
        },
        green: {
            300: '#7CFFAE',
            400: '#2FFF7F',
            500: '#0CF063',
            700: '#1AE066',
        },
        red: {
            300: '#FF72A3',
            400: '#FF508D',
            500: '#F62B71',
            700: '#E41A60',
        },
    },
    fonts: {
        body: "'Roboto Mono', monospace",
        heading: "'Chakra Petch', sans-serif;",
    },
};
