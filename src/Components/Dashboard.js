import React, {Component} from 'react';

export default class Dashboard extends Component {
	constructor(props){
		// initialize state
		super(props);
		this.state = {
			loggedIn : false
		};

	}

	check_if_logged_in = () =>{
		console.log("checking login status");
		return this.state.loggedIn ;  
	};

	componentwillMount(){
		console.log("inside componentwillMount");
		let check = this.check_if_logged_in();
		if(check === false){
			window.location = '/';
		}
	}




	render(){
		return(
				<div>
					<h4>Dashboard</h4>
				</div>
			);
	}
}