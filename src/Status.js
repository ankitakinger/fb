import React, { Component } from 'react';
import Comment from './Comment';
import Like from './Like';

class Status extends Component{

	constructor(props){
		super(props);
		this.state = {
			textbox: false,
		};
	};

	changeLike(){
		this.props.changeLike(this.props.id);
		};

	changeCLike(i){
		this.props.changeCLike(this.props.id,i);
	};

	// addComment(){
	// 	this.props.addComment(this.refs.newComment.value,this.props.id);
	// };

	showTextbox(){
		if(this.state.textbox){
			this.props.addComment(this.refs.newComment.value,this.props.id);
		}
		this.setState({
			textbox: !this.state.textbox
		});
	};

	addReply(reply,i){
		this.props.addReply(reply,i,this.props.id);
	};

	deleteStatus(){
		this.props.deleteStatus(this.props.id);
	};

	deleteComment(index){
		this.props.deleteComment(index,this.props.id);
	};

	deleteReply(ir,ic){
		this.props.deleteReply(ir,ic,this.props.id);
	};

	eachComment(comment,i){
		return (
			<Comment key={i} id={i} data={comment} deleteReply={this.deleteReply.bind(this)} deleteComment={this.deleteComment.bind(this)} changeCLike={this.changeCLike.bind(this)} addReply={this.addReply.bind(this)}></Comment>
			);
	};

	render(){
		return(
			<div className="block">
			<div className="checkStatus">{this.props.data.value}
			<button className="del" onClick={this.deleteStatus.bind(this)}>X</button></div><br/>			
			<Like likeState={this.props.data.like} changeLike={this.changeLike.bind(this)}></Like>
			<button className="commentbtn" onClick={this.showTextbox.bind(this)}>Comment</button>
			<button className="sharebtn">Share</button>
			{
				this.props.data.comments.map(this.eachComment.bind(this))
			}
			{this.state.textbox? <div>
				<input type="text" placeholder="Write Comment!!" ref="newComment"/>
				<button onClick={this.showTextbox.bind(this)}>Submit</button>
			</div> : null}
			</div>)
		};

	}

	export default Status;