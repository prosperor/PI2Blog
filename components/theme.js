import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

//Aqui fica o tema

const theme = createMuiTheme(
    {
        palette: {
            primary: {
                main: '#283E4A',
            },
            secondary: {
                main: '#19857b',
            },
            error: {
                main: red.A400,
            },
            background: {
                default: '#F5F5F5',
            },
        },
    }
);

export default theme;