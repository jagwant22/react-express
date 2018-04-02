import React, {Component} from 'react';

let overlay_styling = {
	background : "white",
	minWidth: "100hh",
	minHeight: "100vh",
	color: "#28a745"

};
export default class LoaderOverlay extends Component{


	render(){
		return(
				<div id='load_overlay' style={overlay_styling}>
					<center>
					<h3>
						Loading ... 
					</h3>
					</center>
				</div>

			);
	}
}