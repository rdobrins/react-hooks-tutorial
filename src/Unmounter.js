import React, {useEffect} from 'react';
import './App.css';

function Unmounter() {
  useEffect(() => {
    const clickEvent = e => {
      console.log(e);
    }

    console.log('MOUNTED!!!')
    window.addEventListener('click', clickEvent);

    return () => {
      console.log('unmounted...')
      window.removeEventListener('click', clickEvent);
    }
  }, []);

  return <h2 className='unmounter-component'>Hello, I'm the Unmounter component.</h2>;
}

export default Unmounter;
