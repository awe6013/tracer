import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import FavoriteCard from './FavoriteCard.jsx';
import TransactionForm from '/imports/ui/components/Transactions/TransactionForm.jsx';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import { loadFavoriteCategories } from '/imports/api/categories/categories.js';

export default class Dashboard extends TrackerReact(React.Component) {
	constructor(){
		super();

		this.state = {
			category: null,
			open: false
		};

		this.handleTouchTap = this.handleTouchTap.bind(this);
		this.closeForm = this.closeForm.bind(this);

	}

	handleTouchTap(category){
		this.setState({
			category: !!category&&category,
			open: true
		});
	}

	closeForm(){
		this.setState({open: false});
	}

	getFavorites(){
		return loadFavoriteCategories();
	}

	render(){
		let favorites = this.getFavorites();
		return (
			<div>
				<Toolbar style={{backgroundColor: "#e8e8e8"}}>
					<ToolbarGroup>
						<RaisedButton label="New Transaction" primary={true} onTouchTap={this.handleTouchTap} />
					</ToolbarGroup>
				</Toolbar>
				<div className="grid">
					{favorites.map( (favorite, i) => {
						return <FavoriteCard key={i} favorite={favorite} onTouchTap={this.handleTouchTap} />
					})}
					<TransactionForm
						title="Post new transaction"
						category={this.state.category}
						open={this.state.open}
						onClose={this.closeForm}
					/>
				</div>
			</div>
		)
	}
}
