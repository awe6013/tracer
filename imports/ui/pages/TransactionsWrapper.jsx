import React from 'react';
import Transactions from '../components/Transactions/Transactions.jsx';

export default class TransactionsWrapper extends React.Component {
	constructor(){
		super();

		this.state = {
			subscription: {
				trans: Meteor.subscribe("allTransactions")
			}
		}
	}

	render(){
		return (
			<Transactions />
		)
	}
}
