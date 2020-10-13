import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const action = action => async () => {
    try {
      const resp = await fetch(`//${process.env.REACT_APP_LIVE_IP}:3000/${action}`)
      const text = await resp.text()
      console.log(text)
    } catch (err) {
      console.error(err)
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit  and save to reload.
        </p>
        <div className="ctrls">
          <button onClick={action('play')}>Play</button>
          <button onClick={action('pause')}>Pause</button>
        </div>
      </header>
    </div>
  );
}

export default App;
