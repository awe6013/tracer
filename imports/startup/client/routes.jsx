import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

// layouts
import {MainLayout} from '../../ui/layouts/MainLayout.jsx';
import {NotFoundLayout} from '../../ui/layouts/NotFoundLayout.jsx';

// Import needed templates
import DashboardWrapper from '../../ui/pages/DashboardWrapper.jsx';
import SummaryWrapper from '../../ui/pages/SummaryWrapper.jsx';
import TransactionsWrapper from '../../ui/pages/TransactionsWrapper.jsx';
import NotFoundWrapper from '../../ui/pages/NotFoundWrapper.jsx';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'dashboard',
  action() {
    mount(MainLayout, {
			header: "Dashboard",
			index: 0,
			content: (<DashboardWrapper />)
		})
  }
});

FlowRouter.route('/transactions', {
  name: 'transactions',
  action() {
    mount(MainLayout, {
			header: "Transactions",
			index: 1,
			content: (<TransactionsWrapper />)
		})
  }
});

FlowRouter.route('/summary', {
  name: 'summary',
  action() {
    mount(MainLayout, {
			header: "Summary",
			index: 2,
			content: (<SummaryWrapper />)
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
