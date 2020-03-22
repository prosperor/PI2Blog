import React from 'react';
import {
    Container,
    Typography,
    Box,
    Grid,
    CssBaseline
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import PostCard from '../components/PostCard';
import blogPost from '../data/blog-posts';
import Footer from '../components/Footer';

const useStyles = makeStyles(
    {
        container: {
            minHeight: '80vh'
        }
    }
);

const Index = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Header />
            <Container maxWidth="lg" className={classes.container}>


            </Container>
        </React.Fragment>
    )
}