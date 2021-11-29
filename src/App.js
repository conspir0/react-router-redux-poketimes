import React, {Component} from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Home/>
        <About/>
        <Contact/>
      </div>
    );
  };
}

export default App;
