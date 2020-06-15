
import React from "react";
import ReactDOM from "react-dom";
import orderPage from './views/Pages/Order/Order';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose} from 'redux'; // to create the store and middleware
import rootReducer from './Redux/RootReducer/RootReducer';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";
 
import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
const middlewares= [logger,thunk];

const store = createStore(rootReducer,compose(applyMiddleware(...middlewares),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Route path="/auth" render={props => <AuthLayout {...props} />} />
      <Route path="/orders/:id" component={orderPage} />


      <Redirect from="/" to="/auth/login" />
    </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
