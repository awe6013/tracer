import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class FavoriteCard extends React.Component {
	constructor(){
		super();

	}

	render(){
		return (
			<div className="col">
				<Card className="card">
			    <CardHeader
			      title={this.props.favorite.desc}
			    />
			  </Card>
			</div>
		)
	}
}
