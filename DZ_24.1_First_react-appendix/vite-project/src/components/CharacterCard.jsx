import React from 'react';

const CharacterCard = ({ character }) => {
  return (
    <div className="character-card">
      <h3>{character.name}</h3>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
      <p>Birth Year: {character.birthYear}</p>
      <p>Gender: {character.gender}</p>
    </div>
  );
};

export default CharacterCard;
