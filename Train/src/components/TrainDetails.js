

import React, { useState, useEffect } from 'react';
import { getTrainByNumber } from '../api/trainApi';

const TrainDetails = ({ trainNumber }) => {
  const [train, setTrain] = useState(null);

  useEffect(() => {
   
    fetchTrain();
  }, []);

  const fetchTrain = async () => {
    try {
      const trainData = await getTrainByNumber(trainNumber);
      setTrain(trainData);
    } catch (error) {
      console.error('Error fetching train data:', error);
    }
  };

  return (
    <div>
      {train ? (
        <div>
          <h2>{train.trainName}</h2>
          <p>Train Number: {train.trainNumber}</p>
          <p>Departure Time: {train.departureTime.Hours}:{train.departureTime.Minutes}</p>
         
        </div>
      ) : (
        <p>Loading train details...</p>
      )}
    </div>
  );
};

export default TrainDetails;
