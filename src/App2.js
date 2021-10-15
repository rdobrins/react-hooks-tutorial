import React, {useState} from 'react';
import './App.css';

function App2(props) {
  const [{ count1, count2, count3, count4 }, setCount] = useState({count1: 0, count2: 100, count3: 200, count4: 400});

  return (
    <div className="count-container">
      <button className="count-button" onClick = {() => setCount(currentState => ({
        count1: currentState.count1 + 1,
        count3: currentState.count3 + 2
      }))}>
        + Add to count
      </button>
      <div>Count 1: {count1}</div>
      <div>Count 2: {count2}</div>
      <div>Count 3: {count3}</div>
      <div>Count 4: {count4}</div>
    </div>
  );
}

export default App2;
