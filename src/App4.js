import React, {useEffect} from 'react';
import './App.css';
import HandleForm from './HandleForm';

function App4() {
  const [form, valueChange] = HandleForm({firstName: "", middleName: "", lastName: ""});

  // Will run on any and every state change
  useEffect(() => {
    console.log("there has been a change!!!!")
  });

  // // Equivalent of componentDidMount
  // useEffect(() => {
  //   console.log("the initial render!!! Woot!")
  //
  //   // Equivalent of componentWillUnmount
  //   return () => {
  //     console.log('unmounted...')
  //   }
  // }, []);


  // // Only runs when firstName is modified
  // useEffect(() => {
  //   console.log("first name changed!!!")
  // }, [form.firstName]);


  // // Can pass multiple types of state in
  // useEffect(() => {
  //   console.log("one of them changed!")
  // }, [form.firstName, form.lastName]);


  // // Multiple useEffects is fine, they'll execute in order
  // useEffect(() => {
  //   console.log("first mount")
  // }, []);
  // useEffect(() => {
  //   console.log("second mount")
  // }, []);


  return (
    <div className="form-container">
      <div className="form">
        <label>First Name:</label>
        <input onChange={valueChange} name="firstName" type="text" value={form.firstName}/>
        <label>Middle Name:</label>
        <input onChange={valueChange} name="middleName" type="text" value={form.middleName}/>
        <label>Last Name:</label>
        <input onChange={valueChange} name="lastName" type="text" value={form.lastName}/>
      </div>
    </div>
  );
}

export default App4;
