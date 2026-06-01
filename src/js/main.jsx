import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

let counter = 0;

const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(() => {
  const one = Math.floor(counter / 1) % 10;
  const two = Math.floor(counter / 10) % 10;
  const three = Math.floor(counter / 100) % 10;
  const four = Math.floor(counter / 1000) % 10;
  const five = Math.floor(counter / 10000) % 10;
  const six = Math.floor(counter / 100000) % 10;

  counter ++;

  root.render(
    <React.StrictMode>
      <Home
      digitOne={one}
      digitTwo={two}
      digitThree={three}
      digitFour={four}
      digitFive={five}
      digitSix={six}
      />
    </React.StrictMode>,
  );
}, 1000);





