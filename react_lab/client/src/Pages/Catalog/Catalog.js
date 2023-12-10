import React, { useState, useEffect } from 'react';
import CatalogWrapper from "./Catalog.styled";
import CatalogItem from '../../components/CatalogItem/CatalogItem';
import Filters from '../../components/CatalogFilter/Filters';


export const handleSearch = (value, cars, setSortedCars) => {
    const filteredCars = cars.filter((car) =>
      car.name.toLowerCase().includes(value.toLowerCase())
    );
  
    setSortedCars(filteredCars);
  };
   
  
  const Catalog = () => {
    const [sortedCars, setSortedCars] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:8080/api/car');
          const data = await response.json();
          setSortedCars(data);
        } catch (error) {
          console.error('Помилка при отриманні даних з сервера:', error);
        }
      };
  
      fetchData();
    }, []);

  
    return (
      <div>
        <Filters
          cars={sortedCars}
          setSortedCars={setSortedCars}
        />
  
        <CatalogWrapper>
          {sortedCars.map(({ id, name, power, weight, acceleration, price, imageSrc }, idx) => (
            <CatalogItem
              id={id}
              name={name}
              power={power}
              weight={weight}
              acceleration={acceleration}
              price={price}
              imageSrc={imageSrc}
            />
          ))}
        </CatalogWrapper>
      </div>
    );
  };
  
  export default Catalog;
  