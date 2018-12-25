import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import History from './components/History';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <History></History>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
