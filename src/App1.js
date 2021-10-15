import React, {useState} from 'react';
import './App.css';

function App1(props) {
  const countArray = React.useState(0);

  // const [count, setCount] = useState(0);

  // const [count, setCount] = useState(() => setInitialState());
  //
  // function setInitialState() {
  //   return 0
  // }

  // function AddOne() {
  //   setCount(count + 1);
  // }

  return (
    <div className="count-container">
      <button className="count-button" onClick = {() => countArray[1](currentState => currentState + 1)}>
        + Add to count
      </button>
      <div>{countArray[0]}</div>
    </div>
  );
}

export default App1;
