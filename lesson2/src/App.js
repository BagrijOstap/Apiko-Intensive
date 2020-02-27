import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Loader from './components/Loader';
import PostsList from './components/PostsList';
import MoreButton from './components/MoreButton';

const filterPosts = (posts, filterText) => {
  const result = posts.filter((postItem) => {
    const { title, body } = postItem;
    return title.includes(filterText) || body.includes(filterText);
  });

  return result
};

function App() {
	const [posts, setPosts] = useState([]);
	const [isLoading , setIsLoading] = useState(true);
	const [showCount, setShowCount] = useState(10);
	const [inputValue, setInputValue] = useState('');

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				setPosts(response.data);
				setIsLoading(false);
			});
	}, []);

	const onMoreButtonClick = () => {
	  setShowCount(showCount + 10)
  };

	const onInputChange = (event) => {
    setInputValue(event.target.value);
    setShowCount(10);
  };

	const postsFiltered = filterPosts(posts, inputValue) ;
	const slised = postsFiltered.slice(0, showCount);
	const isButtonDisabled = showCount >= postsFiltered.length;

	return(
    <div className="App">
      <input onChange={onInputChange}/>
	    {
		    isLoading ?  <Loader/> : <PostsList posts={slised}/>
	    }
	    <MoreButton onClick={onMoreButtonClick} disabled={isButtonDisabled}/>
    </div>
	);
}

export default App;
