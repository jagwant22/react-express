import React, {Component} from 'react';
import SignUp from './SignUp';

import { Route, Redirect } from 'react-router';

export default class Home extends Component{
	constructor(props){
		super(props);
		this.state = {
			loggedIn : false
		};
	}
	loginGo(){
		let username = document.getElementById('username').value;
		let password = document.getElementById('password').value;
		let datasend = {
			username  :username,
			password : password
		};
		
		fetch('/api/login', {
			method:'post',
			body : JSON.stringify(datasend),
			headers : {
				'Content-Type': 'application/json'
			}
		}).then(function(response){
			return response.json();
		}).then(function(result){
			console.log(result.status === 200);
			if(result.status === 200){
				// Redirect to dashboard
				try{
					console.log("TRUE");
					sessionStorage.setItem("logged_in", true);
					console.log("session storage status : " + sessionStorage.getItem("logged_in"));
					console.log("redirecting");
					window.location = '/dashboard/';	
				}catch(err){
					console.log(err);
				}
				

			}else{
				alert("Sorry.. Invalid User or Password..");
				
			}
		});
	}
	render(){
		return(
			<div>
				
				<div className ='container'> 
					<center>
						<h3>Please Log In to Continue </h3>
						<hr />
					
						<div className='col-md-6'>
						
							<label>Username</label>
							<input className='form-control input-sm' type='text' id='username' placeholder='Start typing here' />
							<br />
							<label>Password</label>
							<input type='password' id='password' className='form-control input-sm' placeholder='Start typing here' />
							<br />
							<button className='btn btn-primary' onClick={this.loginGo}>Go</button>
						

						</div>
						<hr />
						<center>
						<h3>
							OR 
						</h3>
						<hr />
						</center>
						<div className='col-md-6'>
							<SignUp />
						</div>
					</center>
				</div>
			</div>

		);
	}
}