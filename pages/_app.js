import React, {
    useEffect
} from 'react';

import Head from 'next/head';

import {
    ThemeProvider
} from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import theme from '../components/theme';

//Essas barras "/" funcionam como um chave de fechamento de cada chave
//Theme Provider obtem o tema personalizado para a interface do usuario do material
//JavaScript da pagina principal

function MyApp({
    Component,
    pageProps
}) {
    useEffect(
        () => {
            const jssStyles = document.querySelector('#jss-server-side');
            if (jssStyles) {
                jssStyles.parentElement.removeChild(jssStyles);
            }
        }, []);
    return (
        <React.Fragment>
            <head>
            
            <title> Portifólio </title>
            
            <meta name="viewport"
                content="minimum-scale=1,
                        initial-scale=1, width=device-width"/>

            </head>

            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Component {...pageProps}/>
            </ThemeProvider>
        </React.Fragment>
    );
}

MyApp.prototype={
    Component: PropTypes.oneOfType([PropTypes.node,PropTypes.func]),
    pageProps: PropTypes.object
}

export default MyApp;