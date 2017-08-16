import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import TransactionsTable from '../components/Transactions/TransactionsTable.jsx';

export default class TransactionsWrapper extends TrackerReact(React.Component) {
	constructor(){
		super();

		this.state = {
			subscription: {
				trans:  Meteor.subscribe("allTransactions"),
				categories: Meteor.subscribe("allCategories")
			}
		}
	}

	componentWillUnmount() {
    this.state.subscription.trans.stop();
		this.state.subscription.categories.stop();
  }

	render(){
		if(!(
			this.state.subscription.trans.ready() &&
			this.state.subscription.categories.ready()
			)){
			return false;
		}
		return (
			<TransactionsTable />
		)
	}
}
