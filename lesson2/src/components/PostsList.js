import React from 'react';
import PostListItem from './PostListItem';

const PostsList = (props) => {
	return (
		<div>
			{
				props.posts.map((postItem, index) => {
					return <PostListItem key={index} id={postItem.id} title={postItem.title} body={postItem.body}/>
				})
			}
		</div>
	);
};

export default PostsList;
 //