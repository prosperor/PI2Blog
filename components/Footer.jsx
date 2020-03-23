import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

//Rodapé

function Copyrigth() {
    return (
        <Typography color="inherit"
        variant="body2" aling="center">
            {'Copyrigth ©'}
            Meu blog
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(
    theme => (
        {
            footer:{
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.background.paper,
                padding: theme.spacing(6, 0),
            }
        }
    )
);

export default function Footer(props){
    const classes = useStyles();
    const { description, title } = props;

    return (
        <footer className={classes.footer}>
            <Container maxWidth="lg">
                <Typography variant="h6"
                aling="center" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="subtitle1" aling="center"
                color="inherit" component="p">
                    {description}
                </Typography>
                <Copyrigth />
            </Container>
        </footer>
    );
}