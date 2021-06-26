import React, { useEffect, useState } from 'react';
import { apiClient } from '../api';
import './styles/app.css';

export const App = () => {
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    apiClient
      .get('breed/hound/images')
      .then((response) => setDogImages(response.data.message))
      .catch((error) => new Error(error));
  }, []);

  if (dogImages.length === 0) return <h1>Loading...</h1>;

  return (
    <div className="App">
      <div className="d-flex">
        {dogImages.slice(0, 3).map((dog) => (
          <img key={dog} className="mx-5" alt={dog} src={dog} />
        ))}
      </div>
    </div>
  );
};

export default App;
