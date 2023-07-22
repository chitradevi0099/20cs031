

import React, { useState, useEffect } from 'react';
import { getTrains } from '../api/trainApi';

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
   
    fetchTrains();
  }, []);

  const fetchTrains = async () => {
    try {
      const trainsData = await getTrains();
      setTrains(trainsData);
    } catch (error) {
      console.error('Error fetching trains data:', error);
    }
  };

  return (
    <div>
      <h1>All Trains Page</h1>
      {trains.map((train) => (
        <div key={train.trainNumber}>
          <h3>{train.trainName}</h3>
          <p>Train Number: {train.trainNumber}</p>
          <p>Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}</p>
          
        </div>
      ))}
    </div>
  );
};

export default AllTrainsPage;
