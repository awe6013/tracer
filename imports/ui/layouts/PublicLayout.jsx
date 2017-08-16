import React from 'react';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export const PublicLayout = ({content}) => (
	<MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
		<main>
			{content}
		</main>
	</MuiThemeProvider>
);
