import React from 'react';
import Header from './components/Header';
import CharacterList from './components/CharacterList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <CharacterList />
      </main>
    </div>
  );
};

export default App;
