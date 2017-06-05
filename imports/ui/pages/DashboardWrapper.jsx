import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Dashboard from '../components/Dashboard/Dashboard.jsx';

export default class DashboardWrapper extends TrackerReact(React.Component) {
	constructor(){
		super();

		this.state = {
				subscription: {
					categories: Meteor.subscribe("allCategories")
				}
		}

	}

	render(){
		if(!this.state.subscription.categories.ready()){
			return false;
		}
		return (
			<Dashboard />
		)
	}
}
