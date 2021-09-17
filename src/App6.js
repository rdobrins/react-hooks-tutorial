import React, { useState, useEffect } from 'react';
import './App.css';

function App6() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [integer, setInteger] = useState(0);

  useEffect(() => {
    setLoading(false);
  }, [results])

  useEffect(() => {
    fetchResults();
  }, [integer])

  const IntegerResults = () => {
    return <h1>{results}</h1>;
  }

  const fetchResults = () => {
    setLoading(true);
    fetch(`http://numbersapi.com/${integer}`)
      .then(response => response.text())
      .then(x =>
        setTimeout(() => {
          setResults(x)
        }, 1000)
      );
  }

  const addOne = () => {
    setInteger(integer + 1)
  }

  const subtractOne = () => {
    setInteger(integer - 1)
  }

  return (
    <div className="numbers-container">
      { loading ? 'loading ...' : <IntegerResults/> }
      <h1>{integer}</h1>
      <div className="numbers-buttons-container">
        <button onClick={addOne}>+</button>
        <button onClick={subtractOne}>-</button>
      </div>
    </div>
  );
}

export default App6;


// https://wordsapiv1.p.mashape.com/words/blue/rhymes
