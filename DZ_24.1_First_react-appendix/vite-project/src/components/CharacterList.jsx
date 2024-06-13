import React from 'react';
import CharacterCard from './CharacterCard';

const CharacterList = () => {
  // Placeholder data
  const characters = [
    { name: 'Luke Skywalker', height: '172', mass: '77', birthYear: '19BBY', gender: 'male' },
    { name: 'Darth Vader', height: '202', mass: '136', birthYear: '41.9BBY', gender: 'male' },
    // Add more characters as needed
  ];

  return (
    <div>
      <h2>Characters</h2>
      <div className="character-list">
        {characters.map((character, index) => (
          <CharacterCard key={index} character={character} />
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
