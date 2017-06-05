import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

export default class Footer extends React.Component {
	constructor(){
		super();

		this.state = {
			//selectedIndex: props.index
		}

		this.recentsIcon = <FontIcon className="material-icons">dashboard</FontIcon>;
		this.favoritesIcon = <FontIcon className="material-icons">view_headline</FontIcon>;
		//this.nearbyIcon = <IconLocationOn />;


	}

	goTo(place){
		FlowRouter.go(FlowRouter.path(place));
	}

	render(){
		let index = this.props.index;
		console.log(index);
		return (
			<div className="footer">
				<Paper zDepth={1}>
	        <BottomNavigation selectedIndex={index}>
	          <BottomNavigationItem
	            label="Dashboard"
	            icon={this.recentsIcon}
	            onTouchTap={this.goTo.bind(this, "dashboard")}
	          />
						<BottomNavigationItem
							label="Transactions"
							icon={this.favoritesIcon}
							onTouchTap={this.goTo.bind(this, "transactions")}
						/>
	          <BottomNavigationItem
	            label="Summary"
	            icon={this.favoritesIcon}
	            onTouchTap={this.goTo.bind(this, "summary")}
	          />
	        </BottomNavigation>
	      </Paper>
			</div>
		)
	}
}
