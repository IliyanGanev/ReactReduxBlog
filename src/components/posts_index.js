import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
	render(){
		return (
			<div>
				PostsIndex
			</div>
		);
	}
}

//same as mapDispatch to props
export default connect(null, { fetchPosts })(PostsIndex);