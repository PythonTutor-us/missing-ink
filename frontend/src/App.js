import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import MainLayout from './components/MainLayout/MainLayout';
import './App.css';

const theme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: {
            main: '#f44336',
        },
    },
});

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className="App">
                    <MainLayout/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(theme, {withTheme: true})(App);
