import React, { Component } from 'react';

class Like extends Component{

	changeLike(){
		this.props.changeLike();
		};

	render(){
		return(
		<button ref="likebtn" onClick={this.changeLike.bind(this)} className="likebtn">
			{this.props.likeState? 'UnLike' : 'Like'}
		</button>
		);
	};

}

export default Like;