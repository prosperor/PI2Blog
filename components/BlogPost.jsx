import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from './Link';
import Header from './Header';
import blogposts from '../data/blog-posts';
import { Container, Box, Typography } from '@material-ui/core';
import Footer from './Footer';

const BlogPost = (
    {
        meta, children
    }
) => {
    const current = blogposts.map(
        ({title}) => title 
    ). indexOf(meta.title);

    const next = blogposts[current - 1];

    const prev = blogposts[current + 1];

    return (
        <Fragment>
            <Header />
            <Container maxWidth="md">
                
                <Box my={4}>
                    <Link href="/">
                        {'< '} HOME 
                    </Link>
                </Box>

                <Typography variant="h4" component="h1" gutterBottom>
                    {meta.title}
                </Typography>
                {children}
                <hr />
                <Box my={4} display="flex" justifyContent="center">
                    <Box mx={4}>
                        {prev && (
                            <NextPost
                            href={prev.path}
                            position="< Previous post"
                            title={prev.title}/>
                        )}
                    </Box>

                    <Box mx={4}>
                        {next && (
                            <NextPost
                            href={next.path}
                            position="Next post >"
                            title={next.title}/>
                        )}
                    </Box>
                </Box>
            </Container>

            <Footer title="Portifólio" description="Seja bem vindo ao nosso portifólio" />

        </Fragment>
    )
};

export default BlogPost;