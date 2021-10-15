import React, { Fragment, useState } from 'react'
import App0 from './App0';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';
import App6 from './App6';
import App7 from './App7';
import App9 from './App9';
import App10 from './App10';
import HomeApp from './HomeApp';
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom';

const AppWrapper = (props) => {
  const [currentApp, setCurrentApp] = useState(0)
  const backApp = currentApp - 1
  const nextApp = currentApp + 1

  return(
    <div>
      <Router>
        <div className='directionalBtns'>
          { backApp >= 0 &&
            <a onClick={ () => { setCurrentApp(backApp) } }>
              <Link to={`/${backApp}`}>
                Back
              </Link>
            </a>
          }
          { nextApp <= 10 &&
            <a onClick={ () => { setCurrentApp(nextApp) } }>
              <Link to={`/${nextApp}`}>
                Next
              </Link>
            </a>
          }
        </div>
        <Switch>
          <Route path='/' exact>
            <HomeApp/>
          </Route>

          <Route path='/0'>
            <App0/>
          </Route>

          <Route path='/1' component={App1}>
            <App1 {...props} />
          </Route>

          <Route
            path='/2'
            component={ () => { return <App2 {...props} /> } }
          />

          <Route path='/3/:ryan' component={App3}/>
          <Route path='/4' component={App4}/>
          <Route path='/5' component={App5}/>
          <Route path='/6' component={App6}/>
          <Route path='/7' component={App7}/>
          <Route path='/9' component={App9}/>
          <Route path='/10' component={App10}/>
        </Switch>
      </Router>
    </div>
  )
}

export default AppWrapper
