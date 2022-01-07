import React, { Fragment, lazy, Suspense } from 'react'
import * as styles from './App12/styles'

import { Switch, Route, Link } from 'react-router-dom'

const Default = lazy(() => import('./App12/Default'))
const Chester = lazy(() => import('./App12/Chester'))
const Chiquita = lazy(() => import('./App12/Chiquita'))
const Grimace = lazy(() => import('./App12/Grimace'))
const Hamburglar = lazy(() => import('./App12/Hamburglar'))

const App12 = (props) => {
  const { path } = props.match

  const {
    linkStyleHash,
    navStyleHash
  } = styles

  return(
    <Fragment>
      <h1>Code Splitting</h1>

      <nav style={navStyleHash}>
        <Link style={linkStyleHash} to={`${path}`}>Home</Link>
        <Link style={linkStyleHash} to={`${path}/grimace`}>Grimace</Link>
        <Link style={linkStyleHash} to={`${path}/chester`}>Chester</Link>
        <Link style={linkStyleHash} to={`${path}/chiquita`}>Chiquita</Link>
        <Link style={linkStyleHash} to={`${path}/hamburglar`}>Hamburglar</Link>
      </nav>

      <Suspense fallback={<p>loading!</p>}>
        <Switch>
          <Route exact path={`${path}/`} component={Default} />
          <Route path={`${path}/chester`} component={Chester} />
          <Route path={`${path}/chiquita`} component={Chiquita} />
          <Route path={`${path}/grimace`} component={Grimace} />
          <Route path={`${path}/hamburglar`} component={Hamburglar} />
        </Switch>
      </Suspense>

    </Fragment>
  )
}

export default App12
