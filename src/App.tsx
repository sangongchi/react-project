import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Home from './views/home';
import { Button } from 'antd';

function App() {
  const [count, setCount] = useState(0);
  const [on, setOn] = useState(false);
  const lightSwitch = () => setOn((on) => !on);

  const handleCount = () => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 500);
  };

  return (
    <div className="App">
      <Home></Home>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite </h1>
      <div className="card">
        <Button type="primary" onClick={lightSwitch}>
          {on ? '开灯' : '关灯'}
        </Button>
        <button onClick={handleCount}> 点击count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
}

export default App;
