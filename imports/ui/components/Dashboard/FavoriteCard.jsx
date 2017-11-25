import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class FavoriteCard extends React.Component {
	constructor(){
		super();

		this.handleTouchTap = this.handleTouchTap.bind(this);
	}

	handleTouchTap(){
		this.props.onTouchTap(this.props.favorite._id);
	}

	render(){
		return (
			<div className="col">
				<Card className="card" onTouchTap={this.handleTouchTap}>
			    <CardHeader
			      title={this.props.favorite.desc}
			    />
			  </Card>
			</div>
		)
	}
}
