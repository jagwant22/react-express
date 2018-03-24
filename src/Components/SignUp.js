import React, {Component} from 'react';

export default class SignUp extends Component{
	constructor(props){
		super(props);
		this.singUp = this.signUp.bind(this);
	}
	signUp(event){
		event.preventDefault();
		let user = document.getElementById('sign_username').value;
		let password = document.getElementById('sign_password').value;
		let data_to_send = {
			username : user,
			password : password
		}

		console.log("sending");
		console.log(data_to_send);
		alert("/api/signup");
		fetch("api call", {
			method :"post",
			data : JSON.stringify(data_to_send),
			headers : {
				"Content-Type":"application/json"
			}
		}).then((response) => {
			return response.json();
		}).then((result) => {
			console.log("do something");
		});

	}
	render(){
		return(
			<div>
				<div className='col-sm-12'>
					<center>
						<h3>Sign Up</h3>
					</center>
					<div className='col-sm-8'>
						<form method='POST' onSubmit={this.signUp}>
							<label>Select Username </label>
							<input className='form-control input-sm' id='sign_username'/>
							<label> Select Password </label>
							<input className='form-control input-sm' type='password' id='sign_password' />
							<input type='submit' />
						</form>
					</div>

				</div>
			</div>
		);
	}
}