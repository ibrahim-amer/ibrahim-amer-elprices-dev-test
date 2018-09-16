import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/searchbar/comp'
import SearchBar from './components/searchbar/comp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='https://static.elprices.com/images/content/large/1bnccHsRM-2c830cf86ecf3a83.png' className="App-logo" alt="logo" />
        </header>
        <SearchBar />
      </div>
    );
  }
}

export default App;
