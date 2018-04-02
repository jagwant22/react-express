import React, {Component} from 'react';
import SignUpModal from './SignUpModal';
import LoginModal from './LoginModal';
import { Route, Redirect } from 'react-router';
import '../css/Home.css';

let containerStyle = {
	backgroundColor: "blue"
}
export default class Home extends Component{
	
	render(){
		return(
			<div id='home_tab'>
				
				<div className ='container' style={{containerStyle}}> 
					<div className='row option_row'>
						<div className='col-md-12'>
							<LoginModal />
							<SignUpModal />
						</div>
							
					</div>
					
				</div>
			</div>

		);
	}
}