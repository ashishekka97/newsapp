import React from 'react';

import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import rootSaga from './redux/sagas';

import styles from './App.module.css';
import Content from './containers/Content/Content';
import Details from './containers/Details/Details';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from './containers/Sidebar/Sidebar';
import StickyBox from "react-sticky-box";

const store = configureStore();
store.runSaga(rootSaga);

function App() {
  return (
    <Provider store={store}>
      {/* <Router> */}
      <Router basename="/newsapp">
        <Navbar />
        <div className={styles.container}>
          <StickyBox offsetTop={20} offsetBottom={20}>
            <Sidebar/>
          </StickyBox>
            <Switch>
              <Route exact path="/" component={Content}/>
              <Route exact path="/:section" component={Content}/>
              <Route exact path="/details/:title" component={Details}/>
            </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
