import React from 'react';
import Header from './components/Header';
import InputApi from './components/InputApi'
import InputInfo from './components/InputInfo'
import './App.css';

const App = () => {
  return (
    <div className="App container ">
      <Header />
      <main>
        <InputApi />
      </main>
      <InputInfo />
    </div>
  );
};

export default App;
