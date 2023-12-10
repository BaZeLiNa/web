import React from 'react';
import { useParams } from 'react-router-dom';
import { Image, Text, PriceSec } from './ItemPage.styled';
import { Wrapper, Inner } from '../../components/components';
import { Button, Input, Select } from 'antd';
import {Link} from "react-router-dom";
import { useState, useEffect } from 'react';
import Loader from '../../components/Loader/Loader';
import imageMap from '../../components/Foto/Images';

const ItemPage = () => {
    const { carId } = useParams();
    const [car, setCar] = useState();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const apiUrl = `http://localhost:8080/api/car/${carId}`;
            const response = await fetch(apiUrl);
    
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const carData = await response.json();
            setCar(carData);
          } catch (error) {
            console.error('Помилка при отриманні даних автомобіля:', error.message);
          }
        };
    
        fetchData();
      }, [carId]);

    if (!car) {
    return <Loader />;
    }

    return (
      <div>
        <Wrapper>
            <Inner style={{justifyContent: "start"}}>
            <Image src={imageMap[car.imageSrc]}/>
            <Text>
                <h1>{car.name}</h1>
                <p>Power: {car.power} hp</p>
                <p>Weight: {car.weight} kg</p>
                <p>Acceleration: {car.acceleration} sec</p>
                <div>
                    <Input style={{ width: 200, marginRight: "30px" }} defaultValue="Input value"/>
                    <Select style={{ width: 200 }} defaultValue="Select Field:">
                        <Select.Option value="field1">Field 1</Select.Option>
                        <Select.Option value="field2">Field 2</Select.Option>
                        <Select.Option value="field3">Field 3</Select.Option>                  
                    </Select>
                </div>
            </Text>
            </Inner>
            <PriceSec>
                <h2>Price: {car.price}$</h2>
                <div>
                <Button style={{marginRight: "30px"}}>
                    <Link to={`/Catalog/`}>Go back</Link>
                </Button>
                <Button>Add to card</Button>
                </div>
            </PriceSec>
        </Wrapper>
        
      </div>
    );
};
export default ItemPage;