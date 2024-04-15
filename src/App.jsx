import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');

  const changeBackgroundColor = (color) => {
    document.body.style.backgroundColor = color;
    setBackgroundColor(color);
  };

  return (
    <div className="App">
      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt=""  width={"100px"} className='m-5'/>
      <h2>Click to change background</h2>
      <div style={{ backgroundColor: backgroundColor }} className="color-box m-5"></div>
      <button onClick={() => changeBackgroundColor('#ff6500')}>Orange</button>
      <button onClick={() => changeBackgroundColor('#0077B6')}> Blue</button>
      <button onClick={() => changeBackgroundColor('#32cd32')}>Green</button>
      <button onClick={() => changeBackgroundColor('#ff0000')}>Red</button>
      <button onClick={() => changeBackgroundColor('#ffff00')}>Yellow</button>
      
    </div>
  );
}

export default App;
