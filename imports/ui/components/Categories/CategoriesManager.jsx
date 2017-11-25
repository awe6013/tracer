import React from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Paper from 'material-ui/Paper';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import { loadCategories, loadFavoriteCategories, buildCategoryTree } from '/imports/api/categories/categories';
import { addCategory } from '/imports/api/categories/client/categories';

export default class CategoriesManager extends TrackerReact(React.Component) {
	constructor(){
		super();

		this.state = {
			categoryID: null,
			categoryName: '',
			newCategoryModalOpen: false
		};

		this.closeCategoryModal = this.closeCategoryModal.bind(this);
		this.handleCategoryNameChange = this.handleCategoryNameChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);


	}

	render(){
		const favorites = this.getFavorites();
		const allCategories = this.buildCategoryTree();
		const actions = this.getActions();
		return (
			<Paper style={paperStyle} zDepth={1}>
				<List>
					<Subheader>Favorites</Subheader>
					{favorites.map( (favorite) => {
						return (
							<ListItem	key={favorite._id} primaryText={favorite.desc}	/>
						)
					})}
				</List>
				<Divider />
				<List>
					<Subheader>All Categories</Subheader>
					{this.renderTree( allCategories )}
				</List>
				<Dialog
					title="Add New Category"
					actions={actions}
					modal={false}
					onRequestClose={this.closeCategoryModal}
					open={this.state.newCategoryModalOpen}
				>
					<TextField
						floatingLabelText="New Category Name"
						value={this.state.categoryName}
						onChange={this.handleCategoryNameChange}
					/>
				</Dialog>
			</Paper>
		)
	}

	getFavorites(){
		return loadFavoriteCategories();
	}

	getAllCategories(){
		return loadCategories();
	}

	buildCategoryTree(){
		return buildCategoryTree({type: "", userid: Meteor.userId()});
	}

	handleCategoryNameChange(event, newValue){
		this.setState({categoryName: newValue});
	}

	getActions(){
		let actions = [
			<FlatButton
				label="Cancel"
				primary={true}
				onTouchTap={this.closeCategoryModal} />,
			<FlatButton
				label="Add"
				primary={true}
				onTouchTap={this.handleSubmit} />
		];
		return actions;
	}

	openNewCategoryModal( categoryID ){
		this.setState({
			newCategoryModalOpen: true,
			categoryID: categoryID
		});
	}

	closeCategoryModal(){
		this.setState({newCategoryModalOpen: false});
	}

	handleSubmit(){
		addCategory({ name: this.state.name, id: this.state.categoryID });

		// Reset the form
		this.setState({
			name: "",
			categoryID: null
		});
		this.closeCategoryModal();
	}

	renderTree( categories ) {
		return categories.map( (category, i) => {
			category.children = this.renderTree( category.children );
			return (
				<ListItem
					key={i}
					primaryText={category.desc}
					nestedItems={category.children}
					leftIcon={
						<FontIcon
							className="material-icons"
							onClick={()=>{this.openNewCategoryModal(category._id)}}
						>
							add
						</FontIcon>
					}
				/>
			)
		});
	}

}


const paperStyle = {
	minWidth: 300,
  margin: 20,
  display: 'inline-block',
};
