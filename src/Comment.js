import React, { Component } from 'react';
import Reply from './Reply';
import Like from './Like';

class Comment extends Component{

	constructor(props){
		super(props);
		this.state = {
			replybox: false
		};
	};

	changeCLike(){
		this.props.changeCLike(this.props.id);
		};

	// addReply(reply){
	// 	this.props.addReply(reply,this.props.id);
	// };

	eachReply(reply,i){
		return (
			<Reply key={i} id={i} data={reply} addReply={this.addReply} deleteReply={this.deleteReply.bind(this)}></Reply>
			);
	};

	showReplyBox(){
		if(this.state.replybox){
			this.props.addReply(this.refs.newReply.value,this.props.id);
		}
		this.setState({
			replybox: !this.state.replybox
		});
	};

	deleteComment(){
		this.props.deleteComment(this.props.id);
	};

	deleteReply(ir){
		this.props.deleteReply(ir,this.props.id);
	};

	render(){
		return(
		<div>
			<div>{this.props.data.value}
			<button className="del" onClick={this.deleteComment.bind(this)}>X</button></div>
			<Like likeState={this.props.data.like} changeLike={this.changeCLike.bind(this)}></Like>
			<button className="replybtn" onClick={this.showReplyBox.bind(this)}>Reply</button>
			{
				this.props.data.replies.map(this.eachReply.bind(this))
			}
			{
				this.state.replybox? <div>
				<input type="text" placeholder="Reply!!" ref="newReply"/>
				<button onClick={this.showReplyBox.bind(this)}>Submit</button>
				</div> : null
			}
		</div>
		);
	};

}

export default Comment;