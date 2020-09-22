import React from 'react';
import './App.css';
import HandleForm from './HandleForm';

function App3() {
  const [firstFormValues, setFirstFormValue] = HandleForm({firstName: "", lastName: "", email: "", password: ""});
  const [secondFormValues, setSecondFormValue] = HandleForm({firstName: "", lastName: "", email: "", password: ""});

  return (
    <div className="form-container">
      <div className="form">
        <h3>Some very cool react form</h3>
        <label>First Name:</label>
        <input onChange={setFirstFormValue} name="firstName" type="text" value={firstFormValues.firstName} placeholder="First Name"/>
        <label>Last Name:</label>
        <input onChange={setFirstFormValue} name="lastName" type="text" value={firstFormValues.lastName} placeholder="Last Name"/>
        <label>Email:</label>
        <input onChange={setFirstFormValue} name="email" type="text" value={firstFormValues.email} placeholder="Email"/>
        <label>Password:</label>
        <input onChange={setFirstFormValue} name="password" type="password" value={firstFormValues.password} placeholder="Password"/>
      </div>

      <div className="form">
        <h3>Another very cool react form</h3>
        <label>First Name:</label>
        <input onChange={setSecondFormValue} name="firstName" type="text" value={secondFormValues.firstName} placeholder="First Name"/>
        <label>Last Name:</label>
        <input onChange={setSecondFormValue} name="lastName" type="text" value={secondFormValues.lastName} placeholder="Last Name"/>
        <label>Email:</label>
        <input onChange={setSecondFormValue} name="email" type="text" value={secondFormValues.email} placeholder="Email"/>
        <label>Password:</label>
        <input onChange={setSecondFormValue} name="password" type="password" value={secondFormValues.password} placeholder="Password"/>
      </div>
    </div>
  );
}

export default App3;
