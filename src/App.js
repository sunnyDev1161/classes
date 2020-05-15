import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { create } from 'jss';
import rtl from 'jss-rtl';
import MomentUtils from '@date-io/moment';
import { SnackbarProvider } from 'notistack';
import {
  createStyles,
  jssPreset,
  makeStyles,
  StylesProvider,
  ThemeProvider
} from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import Auth from 'src/components/Auth';
import useSettings from 'src/hooks/useSettings';
import ProtectedRoutes from 'src/Routes';
import Register from './components/Register';
import Forgot from './components/Forgot';
import Dashboard from './components/Dashboard';

const history = createBrowserHistory();
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const useStyles = makeStyles(() =>
  createStyles({
    '@global': {
      '*': {
        boxSizing: 'border-box',
        margin: 0,
        padding: 0
      },
      html: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        height: '100%',
        width: '100%'
      },
      body: {
        height: '100%',
        width: '100%'
      },
      '#root': {
        height: '100%',
        width: '100%'
      }
    }
  })
);

function App() {
  useStyles();

  const { settings } = useSettings();

  return (
    <ThemeProvider>
      <StylesProvider jss={jss}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <SnackbarProvider maxSnack={1}>
            <Router history={history}>
              <Switch>
                <Route path="/login" render={e => <Auth />} exact />
                <Route path="/register" render={e => <Register />} exact />
                <Route path="/forgot-password" render={e => <Forgot />} exact />
                {/* <Route path="/" render={e => <Dashboard />} /> */}
                <ProtectedRoutes component={Dashboard} />
              </Switch>
            </Router>
          </SnackbarProvider>
        </MuiPickersUtilsProvider>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
