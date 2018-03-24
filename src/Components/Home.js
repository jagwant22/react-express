import React, {Component} from 'react';

export default class Home extends Component{
	loginGo(){
		let username = document.getElementById('username').value;
		let password = document.getElementById('password').value;
		let datasend = {
			username  :username,
			password : password
		}
		console.log("Sending " + JSON.stringify(datasend));
		fetch('/api/login', {
			method:"post",
			body : JSON.stringify(datasend),
			headers : {
				"Content-Type": "application/json"
			}
		}).then(function(response){
			return response.text();
		}).then(function(result){
			console.log(result);
		})
	}
	render(){
		return(
			<div>
				Welcome
				<hr />
				<div className ='container'> 
					<center>
					<h3>Log In </h3>
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
					</center>
				</div>
			</div>

			);
	}
}