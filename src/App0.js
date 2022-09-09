import React, { Fragment, useState } from 'react';
import './App.css';
import DirectoryHash from './AppsDirectoryHash'
import { Link } from 'react-router-dom'

const App0 = (props) => {
  const { path } = props.match

  return (
    <>
      <h1 className="intro-header">
        Introducing Hooks
      </h1>
      <h2 className="intro-header">
        Hooks are a new addition in React 16.8.
        <br/><br/>
        They let you use state and other React features without writing a class.
        <br/><br/>
        Functional Components?!?!?! :)
      </h2>
      <div className="directory-wrapper">
        { Object.keys(DirectoryHash).map((k, i) => {

          const { title, description } = DirectoryHash[k]

          return(
            <Fragment>
              <Link key={k} to={`${path}${k}`}>{`${(i + 1)}. ${title}`}</Link>
              <p>{description}</p>
            </Fragment>
          )
        }) }
      </div>
    </>
  );
}

export default App0;
