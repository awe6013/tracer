import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import { Categories } from '/imports/startup/both/collections.js';
import AutoComplete from 'material-ui/AutoComplete';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';


export default class TransactionForm extends TrackerReact(React.Component) {
	constructor(){
		super();

		this.state = {
			open: false,
			description: "",
			category: "",
			date: new Date(),
			amount: ""
		}

		this.open = this.open.bind(this);
		this.close = this.close.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
		this.handleCategoryChoice = this.handleCategoryChoice.bind(this);
		this.handleDateChange = this.handleDateChange.bind(this);
		this.handleAmountChange = this.handleAmountChange.bind(this);

		this.submit = this.submit.bind(this);

	}

	open(){
		this.setState({open: true});
	}

	close(){
		this.setState({open: false});
	}

	submit(){
		let amount = parseFloat(this.state.amount.trim());
		if(!amount){
			window.alert("Amount value is not valid. Please provide a number in the format given.");
			return;
		}
		Meteor.call("postTransaction",
			this.state.description.trim(),
			this.state.date,
			amount,
			this.state.category
		);
		this.close();
		this.initializeState();
	}

	initializeState(){
		this.setState({
			description: "",
			category: "",
			date: new Date(),
			amount: ""
		});
	}

	getCategories(){
		// let categories = [];
		// Categories.find().fetch().forEach( (category) => {
		// 	categories.push(category.desc);
		// });;

		return Categories.find().fetch();
	}

	getActions(){
		let actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onTouchTap={this.close} />,
			<FlatButton
				label="Post"
				primary={true}
				onTouchTap={this.submit} />
		];
		return actions;
	}

	handleDescriptionChange(event, newValue){
		this.setState({description: newValue});
	}

	handleCategoryChoice(chosenRequest, index){
		this.setState({category: chosenRequest._id});
	}

	handleDateChange(event, date){
		this.setState({date: date});
	}

	handleAmountChange(event, newValue){
		this.setState({amount: newValue});
	}

	render(){
		let categories = this.getCategories();
		let actions = this.getActions();
		return (
				<Dialog
					title="Post new transaction"
					actions={actions}
					modal={true}
					open={this.state.open}
					>
					<TextField
						floatingLabelText="Description"
						value={this.state.description}
						onChange={this.handleDescriptionChange}
						/>

					<AutoComplete
						onNewRequest={this.handleCategoryChoice}
						hintText="Category"
						dataSourceConfig={{text: "desc", value: "_id"}}
						dataSource={this.getCategories()}
						fullWidth={true} />

					<DatePicker
						floatingLabelText="Date"
						autoOk={true}
						defaultDate={this.state.date}
						onChange={this.handleDateChange}
						/>

					<TextField
						floatingLabelText="Amount ($)"
						onChange={this.handleAmountChange}
						hintText="999.99"
						/>


				</Dialog>

		)
	}
}
