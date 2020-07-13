import React from 'react';
import Child from './Child.js';
import './App.css';

function App() {
  return (
    <div>
      <Child name="Faizan Abbasi" degree="Bs Software Engineering" />
      <hr/>
      <Child name="Hairs Waleed " degree="Businiess" />
      <hr/>
      <Child name="Uzair Abbasi " degree="WordPress" />
    </div>
  );
}

export default App;
