import React from 'react';
import PostListItem from './PostListItem';


const PostsList = (props) => {
	return (
		<div>
			{
				props.posts.map((postItem, index) => {
					return <PostListItem key={index}/>
				})
			}
		</div>
	);
};

export default PostsList;
