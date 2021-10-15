import React, {useState} from 'react';
import './App.css';
import Unmounter from './Unmounter';

function App5(props) {
  const [mounted, setMounted] = useState(true);

  return (
    <>
      <div className="count-container">
        <button onClick={() => { setMounted(!mounted) }}>{mounted ? 'Unmount' : 'Mount'}</button>
      </div>
      { mounted && <Unmounter/> }
    </>
  );
}

export default App5;
