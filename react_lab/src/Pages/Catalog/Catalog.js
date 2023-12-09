import {
    AudiS1, RS200, Lancia037, LanciaS4,
    MG, Peugeot205, Peugeot405,
    Porsche, Renault, Stratos
} from './foto/Foto-imports';

import React, { useState } from 'react';
import CatalogWrapper from "./Catalog.styled";
import CatalogItem from '../../components/CatalogItem/CatalogItem';
import Filters from '../../components/CatalogFilter/Filters';

export const useCars = () => {
  const [cars_arr] = useState([
        {
            id: 1,
            name: "Audi Quattro S1 E2",
            power: 550,
            weight: 1090,
            acceleration: 3.0,
            price: 200000,
            imageSrc: AudiS1
        },
        {
            id: 2,
            name: "Ford RS200",
            power: 600,
            weight: 1180,
            acceleration: 3.07,
            price: 250000,
            imageSrc: RS200
        },
        {
            id: 3,
            name: "Lancia 037",
            power: 325,
            weight: 1090,
            acceleration: 5.0,
            price: 180000,
            imageSrc: Lancia037
        },
        {
            id: 4,
            name: "Lancia Delta S4",
            power: 500,
            weight: 890,
            acceleration: 2.5,
            price: 300000,
            imageSrc: LanciaS4
        },
        {
            id: 5,
            name: "MG Metro 6R4",
            power: 410,
            weight: 1090,
            acceleration: 3.2,
            price: 220000,
            imageSrc: MG
        },
        {
            id: 6,
            name: "Peugeot 205 T16",
            power: 500,
            weight: 910,
            acceleration: 3.0,
            price: 280000,
            imageSrc: Peugeot205
        },
        {
            id: 7,
            name: "Peugeot 405 T16 'Pikes Peak'",
            power: 600,
            weight: 900,
            acceleration: 2.5,
            price: 320000,
            imageSrc: Peugeot405
        },
        {
            id: 8,
            name: "Renault 5 Turbo Group B",
            power: 350,
            weight: 970,
            acceleration: 5.0,
            price: 180000,
            imageSrc: Renault
        },
        {
            id: 9,
            name: "Porsche 911 SC/RS",
            power: 280,
            weight: 1090,
            acceleration: 5.0,
            price: 250000,
            imageSrc: Porsche
        },
        {
            id: 10,
            name: "Lancia Stratos",
            power: 280,
            weight: 980,
            acceleration: 6.0,
            price: 200000,
            imageSrc: Stratos
        }    

  ]);

  return { cars_arr};
};


// export const cars_arr = [
//     {
//         id: 1,
//         name: "Audi Quattro S1 E2",
//         power: 550,
//         weight: 1090,
//         acceleration: 3.0,
//         price: 200000,
//         imageSrc: AudiS1
//     },
//     {
//         id: 2,
//         name: "Ford RS200",
//         power: 600,
//         weight: 1180,
//         acceleration: 3.07,
//         price: 250000,
//         imageSrc: RS200
//     },
//     {
//         id: 3,
//         name: "Lancia 037",
//         power: 325,
//         weight: 1090,
//         acceleration: 5.0,
//         price: 180000,
//         imageSrc: Lancia037
//     },
//     {
//         id: 4,
//         name: "Lancia Delta S4",
//         power: 500,
//         weight: 890,
//         acceleration: 2.5,
//         price: 300000,
//         imageSrc: LanciaS4
//     },
//     {
//         id: 5,
//         name: "MG Metro 6R4",
//         power: 410,
//         weight: 1090,
//         acceleration: 3.2,
//         price: 220000,
//         imageSrc: MG
//     },
//     {
//         id: 6,
//         name: "Peugeot 205 T16",
//         power: 500,
//         weight: 910,
//         acceleration: 3.0,
//         price: 280000,
//         imageSrc: Peugeot205
//     },
//     {
//         id: 7,
//         name: "Peugeot 405 T16 'Pikes Peak'",
//         power: 600,
//         weight: 900,
//         acceleration: 2.5,
//         price: 320000,
//         imageSrc: Peugeot405
//     },
//     {
//         id: 8,
//         name: "Renault 5 Turbo Group B",
//         power: 350,
//         weight: 970,
//         acceleration: 5.0,
//         price: 180000,
//         imageSrc: Renault
//     },
//     {
//         id: 9,
//         name: "Porsche 911 SC/RS",
//         power: 280,
//         weight: 1090,
//         acceleration: 5.0,
//         price: 250000,
//         imageSrc: Porsche
//     },
//     {
//         id: 10,
//         name: "Lancia Stratos",
//         power: 280,
//         weight: 980,
//         acceleration: 6.0,
//         price: 200000,
//         imageSrc: Stratos
//     }    
// ];

export const handleSearch = (value, cars, setSortedCars) => {
    // Ваша логіка пошуку тут, наприклад, фільтрація за іменем машини
    const filteredCars = cars.filter((car) =>
      car.name.toLowerCase().includes(value.toLowerCase())
    );
  
    // Оновити список відсортованих автомобілів
    setSortedCars(filteredCars);
  };
   

const Catalog = () => {
    const { cars_arr } = useCars();
    const [sortedCars, setSortedCars] = useState(cars_arr);
    const [sortOrder, setSortOrder] = useState(null);

    
    return(
        <div>
            <Filters
            cars={sortedCars}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            setSortedCars={setSortedCars}
            />

            <CatalogWrapper>
                {sortedCars.map(({id, name, power, weight, acceleration, price, imageSrc}, idx) =>(
                    <CatalogItem 
                    id = {id}
                    name = {name}
                    power = {power}
                    weight = {weight}
                    acceleration = {acceleration}
                    price = {price}
                    imageSrc = {imageSrc}
                    />
                ))}
            </CatalogWrapper>
        </div>
    )
};

export default Catalog;