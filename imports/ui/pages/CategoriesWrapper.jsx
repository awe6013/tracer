import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import CategoriesManager from '../components/Categories/CategoriesManager.jsx';

export default class CategoriesWrapper extends TrackerReact(React.Component) {
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
			<CategoriesManager />
		)
	}
}
