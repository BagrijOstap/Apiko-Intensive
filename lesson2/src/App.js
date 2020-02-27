import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Loader from './components/Loader';
import PostsList from './components/PostsList';
import MoreButton from './components/MoreButton';

function App() {
	const [posts, setPosts] = useState([]);
	const [isLoading , setIsLoading] = useState(true);
	const [showCount, setShowCount] = useState(10);

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				setPosts(response.data);
				setIsLoading(false);
			});
	}, []);

	const slised = posts.slice(0, showCount);
	const onMoreButtonClick = () => {
	  setShowCount(showCount + 10)

  };

	const isButtonDisabled = showCount >= posts.length;

	return(
    <div className="App">
	    {
		    isLoading ?  <Loader/> : <PostsList posts={slised}/>
	    }
	    <MoreButton onClick={onMoreButtonClick} disabled={isButtonDisabled}/>
    </div>
	);
}

export default App;
