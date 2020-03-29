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
import blogPosts from '../data/blog-posts';
import Footer from '../components/Footer';

const styles = makeStyles({
  container: {
    minHeight: '80vh'
  }
});

const Index = () => {
  const classes = styles();
  return (
    <React.Fragment>

      <CssBaseline />

      <Header />
      
      <Container maxWidth="lg" className={classes.container}>
        <Box my={4} display="flex" justifyContent="center">

          <Typography variant="h4" component="h1" gutterBottom>
            Featured Blog posts
          </Typography>

        </Box>

        <Grid container spacing={4}>
          {blogPosts.map(post => (
            <PostCard key={post.title} post={post} />
          ))}
        </Grid>
      </Container>

      <Footer title="Blog/Portifólio" description="blog/portifólio para aula de PI" />
      
    </React.Fragment>
  );
};

export default Index;