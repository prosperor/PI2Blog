import { creatMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

//Criando o Tema

const theme = creatMuiTheme(
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