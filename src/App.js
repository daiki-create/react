// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from './views/Home/index';
import Review from './views/Review/index';
import Antd from './views/Antd/index';

import './App.css';

function App() {
  const style = {
    width: "50%",
    margin: "0 auto",
    marginTop: 150
  };
  return (
    // <div className="App">
    //   <div style={style}>
    //     <Sample />
    //   </div>
    // </div>
    <>
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path={`/review`} element={<Review />} />
        <Route path={`/antd`} element={<Antd />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;