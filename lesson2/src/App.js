import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Loader from './components/Loader';
import PostsList from './components/PostsList';

function App() {
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
    <div className="App">

	    {
		    isLoading ?  <Loader/> : <PostsList/>
	    }
    </div>
	);
}

export default App;
