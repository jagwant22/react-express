import React, {Component} from 'react';
import SignUp from './SignUp';

export default class SignUpModal extends Component{
	constructor(props){
		super(props);
		this.signUp = this.signUp.bind(this);
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
		alert("");
		fetch("/api/user", {
			method :"post",
			body : JSON.stringify(data_to_send),
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
			<div className='inline margin2 right'>
			<button type="button" className="btn btn-warning" data-toggle="modal" data-target="#signup_modal">
			  Sign Up
			</button>
			<div className="modal fade" id="signup_modal">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title">Sign Up</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<div className='col-sm-12'>
								<SignUp />
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>

			);
	};
}

