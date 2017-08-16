import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Transactions } from '/imports/startup/both/collections.js';
import { Categories } from "/imports/startup/both/collections.js";
import { formatDollar } from '/imports/utils/format.js';
import TransactionsRow from './TransactionsRow.jsx';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


export default class TransactionsTable extends TrackerReact(React.Component) {
	constructor(){
		super();

		this.getSummary = this.getSummary.bind(this);

		this.state = {
			summary: this.getSummary()
		}

	}

	getSummary(){
		let transactions = this.getTransactions();
		let summary = {
			total: 0,
			income: 0,
			expenses: 0
		};
		let category = "";
		transactions.map( (tran) => {
			category = Categories.findOne(tran.category).type
			if(category == "YJitdfpgKqrdKpPMq"){
				summary.income += tran.amount;
			}
			else{
				summary.expenses += tran.amount;
			}
		});
		summary.total = summary.income - summary.expenses;
		return summary;
	}

	getTransactions(){
		return Transactions.find({},{sort: {date: -1}}).fetch();
	}

	render(){
		let transactions = this.getTransactions();
		let summary = this.state.summary;
		return (
			<div>
				<table>
					<thead>
						<tr>
							<th style={{textAlign: 'left', padding: "5px"}}>Income: </th>
							<th style={{textAlign: 'left', padding: "5px"}}>Expenses: </th>
							<th style={{textAlign: 'left', padding: "5px"}}>Extra: </th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td style={{textAlign: 'left', padding: "5px"}}>$ {formatDollar(summary.income)}</td>
							<td style={{textAlign: 'left', padding: "5px"}}>$ {formatDollar(summary.expenses)}</td>
							<td style={{textAlign: 'left', padding: "5px"}}>$ {formatDollar(summary.total)}</td>
						</tr>
					</tbody>
				</table>
				<Table >
			    <TableHeader displaySelectAll={false}>
			      <TableRow>
			        <TableHeaderColumn>Date</TableHeaderColumn>
			        <TableHeaderColumn>Category</TableHeaderColumn>
			        <TableHeaderColumn>Description</TableHeaderColumn>
							<TableHeaderColumn>Amount ($)</TableHeaderColumn>
			      </TableRow>
			    </TableHeader>
			    <TableBody displayRowCheckbox={false}>
						{transactions.map( (tran) => {
							return (<TransactionsRow key={tran._id} tran={tran} />)
						})}
			    </TableBody>
			  </Table>
			</div>
		)
	}
}
