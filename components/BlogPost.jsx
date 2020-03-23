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
    const current = blogposts
}