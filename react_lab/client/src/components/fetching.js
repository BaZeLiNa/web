import axios from 'axios';

export const fetchCarData = async (carId) => {
  try {
    const apiUrl = `http://localhost:8080/api/car/${carId}`;
    const response = await axios.get(apiUrl);

    if (response.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error('Помилка при отриманні даних автомобіля:', error.message);
    throw error;
  }
};

export const fetchSortedCars = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/car');
      return response.data;
    } catch (error) {
      console.error('Помилка при отриманні даних з сервера:', error);
      throw error;
    }
  };

export const resetSearch = async (setSortedCars) => {
    try {
      const apiUrl = 'http://localhost:8080/api/car';
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      setSortedCars(data);
    } catch (error) {
      console.error('Error resetting search:', error.message);
    }
  };
  
  export const fetchDataAndSetCars = async (sortBy, setSortedCars) => {
    try {
      const apiUrl = `http://localhost:8080/api/car?sortBy=${sortBy}`;
      const response = await fetch(apiUrl);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      setSortedCars(data);
    } catch (error) {
      console.error('Error fetching and sorting data:', error.message);
    }
  };
  

