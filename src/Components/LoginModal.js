import React, {Component} from 'react';

export default class LoginModal extends Component{
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
			<div className='inline margin2 right'>
			<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#login_modal">
			  Log In
			</button>
			<div className="modal fade" id="login_modal">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Log In</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<div className='col-md-6'>
						
							<label>Username</label>
							<input className='form-control input-sm' type='text' id='username' placeholder='Start typing here' />
							<br />
							<label>Password</label>
							<input type='password' id='password' className='form-control input-sm' placeholder='Start typing here' />
							<br />
							<button className='btn btn-primary' onClick={this.loginGo}>Go</button>
						

						</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
		);
	}
}

