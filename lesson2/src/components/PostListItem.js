import React, { memo } from 'react'

const PostListItem = (props) => {
	return(
		<div>
			<h3>{props.id}</h3>
			<h5>{props.title}</h5>
			<span>{props.body}</span>
		</div>
	);

};

const MemorizedPostListItem = memo(PostListItem);

export default MemorizedPostListItem;
