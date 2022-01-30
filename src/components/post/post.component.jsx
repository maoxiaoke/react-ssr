import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Post = (props) => {
    const isSSR = props.staticContext || window.initial_state;
    const initialPost = props.staticContext || window.initial_state || { title: '', description: '' };
    const [loading, setLoading] = useState(!isSSR);
    const [post, setPost] = useState(initialPost);

    useEffect(() => {
        if (!isSSR) {
            Post.fetchData().then( data => {
                setLoading(false);
                setPost({
                    title: data.title,
                    description: data.body,
                })
            } );
        }
    }, [])

    return (
        <div className='ui-post'>
            <p className='ui-post__title'>Post Widget</p>

            {
                loading ? 'loading...' : (
                    <div className='ui-post__body'>
                        <p className='ui-post__body__title'>{ post.title }</p>
                        <p className='ui-post__body__description'>{ post.description }</p>
                    </div>
                )
            }
        </div>
    );
}

Post.fetchData = () => {
console.log( 'Post.fetchData()' );

   return axios.get( 'https://jsonplaceholder.typicode.com/posts/3' ).then( response => {
        return {
            title: response.data.title,
            body: response.data.body,
        };
    } );
}
