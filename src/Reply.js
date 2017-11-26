import React, { Component } from 'react';

class Reply extends Component{

	deleteReply(){
		this.props.deleteReply(this.props.id);
	};

	render(){
		return (
			<div>
				<div>{this.props.data}
				<button className="del" onClick={this.deleteReply.bind(this)}>X</button></div><br/>			
			</div>
			);
	}

}

export default Reply;