import React from 'react';
import Link from 'next/link';

const Posts = ({post}) => {
    return (
        <Link href={post.path}>
            <CardContent>
                    <p> {post.title} </p>

                    <h1> {post.publishedAt} </h1>

                    <h1> {post.summary} </h1>
            </CardContent>
        </Link>
    )
}

Posts.propTypes={
    post : PropTypes.object
}

export default Posts;

