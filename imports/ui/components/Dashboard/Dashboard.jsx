import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import FavoriteCard from './FavoriteCard.jsx';
import { Categories } from '../../../startup/both/collections.js';

export default class Dashboard extends TrackerReact(React.Component) {
	constructor(){
		super();

	}

	getFavorites(){
		let cats = Categories.find().fetch();
		console.log(cats);
		return cats;
	}

	render(){
		let favorites = this.getFavorites();
		return (
			<div className="grid">
				{favorites.map( (favorite, i) => {
					return <FavoriteCard key={i} favorite={favorite} />
				})}
			</div>
		)
	}
}
