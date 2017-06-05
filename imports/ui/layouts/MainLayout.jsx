import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Footer from './Footer.jsx';

export const MainLayout = ({header, index, content}) => (
	<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
		<div>
			<AppBar title={header} />
			<main>
				{content}
			</main>
			<Footer index={index} />
		</div>
	</MuiThemeProvider>
);
