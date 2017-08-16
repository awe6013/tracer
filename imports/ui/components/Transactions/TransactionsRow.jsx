import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import { formatDate } from "/imports/utils/time.js";
import { Categories } from "/imports/startup/both/collections.js";

export default class TransactionsRow extends TrackerReact(React.Component) {
	constructor(){
		super();

	}

	getCategory(){
		return Categories.findOne(this.props.tran.category).desc;
	}

	render(){
		let tran = this.props.tran;
		return (
			<TableRow>
        <TableRowColumn>{formatDate(tran.date)}</TableRowColumn>
        <TableRowColumn>{this.getCategory()}</TableRowColumn>
        <TableRowColumn>{tran.desc}</TableRowColumn>
				<TableRowColumn style={{textAlign: "right"}}>{tran.amount}</TableRowColumn>
      </TableRow>
		)
	}
}
