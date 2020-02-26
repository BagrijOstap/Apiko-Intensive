import React from 'react';
import './App.css';
import PostsList from './components/PostsList';
import PostListItem from './components/PostListItem';
import MoreButton from './components/MoreButton';

function App() {
  return (
    <div className="App">
      <PostsList>
        <PostListItem/>
        <MoreButton/>
      </PostsList>
    </div>
  );
}

export default App;
