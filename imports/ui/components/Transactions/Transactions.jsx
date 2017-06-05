import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Transactions } from '../../../startup/both/collections.js';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class Transactions extends TrackerReact(React.Component) {
	constructor(){
		super();

	}

	getTransactions(){
		return Transactions.find().fetch();
	}

	render(){
		let transactions = this.getTransactions();
		return (
			<Table >
		    <TableHeader displaySelectAll={false}>
		      <TableRow>
		        <TableHeaderColumn>Date</TableHeaderColumn>
		        <TableHeaderColumn>Category</TableHeaderColumn>
		        <TableHeaderColumn>Description</TableHeaderColumn>
						<TableHeaderColumn>Amount</TableHeaderColumn>
		      </TableRow>
		    </TableHeader>
		    <TableBody displayRowCheckbox={false}>
					{transactions.map( (tran) => {
						return (<TableRow>
			        <TableRowColumn>{tran.date}</TableRowColumn>
			        <TableRowColumn>{tran.category}</TableRowColumn>
			        <TableRowColumn>{tran.desc}</TableRowColumn>
							<TableRowColumn>{tran.amount}</TableRowColumn>
			      </TableRow>)
					})}

		    </TableBody>
		  </Table>
		)
	}
}
