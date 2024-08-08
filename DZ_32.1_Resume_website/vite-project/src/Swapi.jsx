import { useEffect, useState } from 'react';

const Swapi = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://swapi.dev/api/people/1/')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div style={{color:"black"}}>
      <h2>SWAPI Data</h2>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Swapi;
