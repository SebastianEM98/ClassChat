import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
    palette: {
        background: {
            default: '#333639'
        },
        primary: {
            main: '#fd531e'
        },
        secondary: {
            main: '#333639',
            light: '#515457'
        },
        warning: {
            main: '#ffcd30'
        }
    },
});