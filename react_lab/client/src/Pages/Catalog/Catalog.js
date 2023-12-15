import React, { useState, useEffect } from 'react';
import CatalogWrapper from "./Catalog.styled";
import CatalogItem from '../../components/CatalogItem/CatalogItem';
import Filters from '../../components/CatalogFilter/Filters';
import Loader from '../../components/Loader/Loader';
import { fetchSortedCars } from '../../components/fetching';


export const handleSearch = (value, cars, setSortedCars) => {
    const filteredCars = cars.filter((car) =>
      car.name.toLowerCase().includes(value.toLowerCase())
    );
  
    setSortedCars(filteredCars);
  };
   
  
  const Catalog = () => {
    const [sortedCars, setSortedCars] = useState();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const carsData = await fetchSortedCars();
          setSortedCars(carsData);
        } catch (error) {
        }
      };
  
      fetchData();
    }, []);
      if (!sortedCars) {
        return <Loader />;
      }
  
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
  