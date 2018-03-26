import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React , {Component} from 'react';
import Home from '../Components/Home';
import Dashboard from '../Components/Dashboard';
function Routes() {
	return(
		<BrowserRouter >
			<Switch>
				<Route path ='/' exact component = {Home} />
				<Route path = '/dashboard' exact component = {Dashboard} />
			</Switch>
		</BrowserRouter>
		);
	
};

export default Routes;