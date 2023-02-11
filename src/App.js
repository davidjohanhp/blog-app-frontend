import logo from './logo.svg';
import './App.css';
import Users from './Users';
import Login from './components/login';

import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/profile';

class App extends Component {
  render() {
    return (      
        <div>
            <Routes>
              {/* <Route path="/" component={Login} exact/> */}
              <Route path="/login" element={<Login/>}/>
              <Route path="/" element={<Profile />} />
              {/* <Route path="/about" component={About}/> */}
              {/* <Route path="/contact" component={Contact}/> */}
              {/* <Route component={Error}/> */}
           </Routes>
        </div> 
    );
  }
}
 

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Login />
//       </header>
//     </div>
//   );
// }

export default App;
