import React, { Component } from 'react';
import Status from './Status';

class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: [],
		};
	};

	addStatus(newText){
		var arr = this.state.posts;
		arr.unshift({id:Date.now(),value:newText,like:false,comments:[]});
		this.setState({posts: arr});
	};

	changeLike(index){
		var arr = this.state.posts;
		arr[index].like=!arr[index].like;
		this.setState({posts: arr});
	};

	changeCLike(index,i){
		var arr = this.state.posts;
		arr[index].comments[i].like=!arr[index].comments[i].like;
		this.setState({posts: arr});
	};

	deleteStatus(index){
		var arr = this.state.posts;
		arr.splice(index,1);
		this.setState({posts: arr});
	};

	deleteComment(index,i){
		var arr = this.state.posts;
		arr[i].comments.splice(index,1);
		this.setState({posts: arr});
	};

	deleteReply(ir,ic,is){
		var arr = this.state.posts;
		arr[is].comments[ic].replies.splice(ir,1);
		this.setState({posts: arr});
	};

	addComment(newComment,i){
		var arr = this.state.posts;
		arr[i].comments.push({id:Date.now(),value:newComment,like:false,replies:[]});
		this.setState({posts: arr});
	};

	addReply(reply,i,index){
		var arr = this.state.posts;
		arr[index].comments[i].replies.push(reply);
		this.setState({posts: arr});
	};

	eachStatus(post,i){
		return (
			<Status key={i} id={i} data={post} deleteStatus={this.deleteStatus.bind(this)} deleteReply={this.deleteReply.bind(this)} deleteComment={this.deleteComment.bind(this)} changeLike={this.changeLike.bind(this)} addComment={this.addComment.bind(this)} changeCLike={this.changeCLike.bind(this)} addReply={this.addReply.bind(this)}>
			</Status>
			);
	};

	handleClick(){
		if(this.refs.myStatus !== null){
			this.addStatus(this.refs.myStatus.value);
			this.refs.myStatus.value = "";
		}
	};

	render(){
		return (
			<div>
			<textarea rows="3" cols="50" ref="myStatus" placeholder="What's on your mind?"></textarea><br/>
			<button onClick={this.handleClick.bind(this)} className="postbtn">Post</button>
			<div>
				{
					this.state.posts.map(this.eachStatus.bind(this))
				}
			</div>
			</div>
			);
		};
	}

	export default Post;