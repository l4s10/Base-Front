// styles/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
        main: '#212226',
        },
        secondary: {
        main: '#313236',
        },
        error: {
        main: '#FFA570',
        },
        warning: {
        main: '#FEE3A2',
        },
        info: {
        main: '#564734',
        },
        success: {
        main: '#778D45',
        },
        background: {
        default: '#F3F3FB',
        },
    },
});

export default theme;
