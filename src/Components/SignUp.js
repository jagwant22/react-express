import React, {Component} from 'react';

export default class SignUp extends Component{
	
	render(){
		return(
			<div>
				<div className='col-sm-12'>
					
					<div className='col-sm-8'>
						<form method='POST' onSubmit={this.signUp}>
							<label>Select Username </label>
							<input className='form-control input-sm' id='sign_username'/>
							<label> Select Password </label>
							<input className='form-control input-sm' type='password' id='sign_password' /><br />
							<input className='btn btn-primary' type='submit' />
						</form>
					</div>

				</div>
			</div>
		);
	}
}