import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import FavoriteCard from './FavoriteCard.jsx';
import TransactionForm from '/imports/ui/components/Transactions/TransactionForm.jsx';
import { Categories } from '/imports/startup/both/collections.js';

export default class Dashboard extends TrackerReact(React.Component) {
	constructor(){
		super();

		this.handleTouchTap = this.handleTouchTap.bind(this);

	}

	handleTouchTap(){
		this.refs.form.open();
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
					return <FavoriteCard key={i} favorite={favorite} onTouchTap={this.handleTouchTap} />
				})}
				<TransactionForm
					title="Post new transaction"
					ref="form"
					/>
			</div>
		)
	}
}
