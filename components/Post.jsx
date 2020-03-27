import React from 'react';
import matter from 'gray-matter';

const posts = matter(require('../api/example-post.md'));

return posts;