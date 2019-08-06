import React from 'react';
import './App.css';
import NavBar from './components/layout/NavBar'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>Hello from react</h1>
      </div>
    );
  }

}

export default App;
