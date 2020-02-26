import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Loader from './Loader';
import List from './List';


const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading , setIsLoading] = useState(true);

    useEffect(() => {
	    axios.get('https://jsonplaceholder.typicode.com/posts')
		    .then(response => {
			    setPosts(response.data);
			    setIsLoading(false);
		    });
    }, []);


    return(
			<div>
				<h1>Post list</h1>
				{
					isLoading ?  <Loader/> : <List/>
				}
			</div>
    );
};


export default PostList;
