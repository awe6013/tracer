import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

// layouts
import {MainLayout} from '../../ui/layouts/MainLayout.jsx';
import {PublicLayout} from '../../ui/layouts/PublicLayout.jsx';
import {NotFoundLayout} from '../../ui/layouts/NotFoundLayout.jsx';

// Import needed templates
import SignInWrapper from '../../ui/pages/SignInWrapper.jsx'
import DashboardWrapper from '../../ui/pages/DashboardWrapper.jsx';
import SummaryWrapper from '../../ui/pages/SummaryWrapper.jsx';
import TransactionsWrapper from '../../ui/pages/TransactionsWrapper.jsx';
import CategoriesWrapper from '../../ui/pages/CategoriesWrapper.jsx';
import NotFoundWrapper from '../../ui/pages/NotFoundWrapper.jsx';

function signInForceCheck(context) {
  // context is the output of `FlowRouter.current()`
	if(!Meteor.userId()){
		FlowRouter.go(FlowRouter.path("signin"));
	}
}

function autoForward() {
	if ( Meteor.userId() ) {
		FlowRouter.go(FlowRouter.path("dashboard"));
	}
}

// Set up all routes in the app
let publicRoutes = FlowRouter.group({
	prefix: "/",
	name: "public"
});

publicRoutes.route('/', {
	name: "signin",
	action() {
		mount(PublicLayout, {
			content: (<SignInWrapper />)
		})
	},
	triggersEnter: [autoForward]
});

// publicRoutes.route('/join', {
// 	name: "join",
// 	action() {
// 		mount(PublicLayout, {
// 			content: (<CreateAccountWrapper />)
// 		})
// 	}
// });


let appRoutes = FlowRouter.group({
	prefix: "/app",
	name: "app",
	triggersEnter: [signInForceCheck]
})

appRoutes.route('/', {
  name: 'dashboard',
  action() {
    mount(MainLayout, {
			header: "Dashboard",
			index: 0,
			content: (<DashboardWrapper />)
		})
  }
});

appRoutes.route('/transactions', {
  name: 'transactions',
  action() {
    mount(MainLayout, {
			header: "Transactions",
			index: 1,
			content: (<TransactionsWrapper />)
		})
  }
});

appRoutes.route('/summary', {
  name: 'summary',
  action() {
    mount(MainLayout, {
			header: "Summary",
			index: 2,
			content: (<SummaryWrapper />)
		})
  }
});

appRoutes.route('/categories', {
  name: 'categories',
  action() {
    mount(MainLayout, {
			header: "View/Edit Categories",
			index: 3,
			content: (<CategoriesWrapper />)
		})
  }
});

FlowRouter.notFound = {
  action() {
    mount(NotFoundLayout, {
			content: (<NotFoundWrapper />)
		})
  }
};
