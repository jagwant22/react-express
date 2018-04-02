import React, {Component} from 'react';
import LoaderOverlay from './LoaderOverlay';

export default class Dashboard extends Component {
	
	constructor(props){
		super(props);
		if(sessionStorage.getItem('logged_in') == "false"){
    		window.location = '/';
    	}
	}
	componentWillMount() {
		
    	
  	};




	render(){
		return(
				<div>
					<LoaderOverlay />
					<h4>Dashboard</h4>
				</div>
			);
	}
}