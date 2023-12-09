import React from 'react';
import { useParams } from 'react-router-dom';
import {useCars} from "../Catalog/Catalog";
import { Image, Text, PriceSec } from './ItemPage.styled';
import { Wrapper, Inner } from '../../components/components';
import { Button, Input, Select } from 'antd';
import {Link} from "react-router-dom";

const ItemPage = () => {
    const { carId } = useParams();
    const { cars_arr} = useCars();
    const car = cars_arr.find((car) => car.id === parseInt(carId));
  
    if (!car) {
      return <div>Car not found</div>;
    }
  
    return (
      <div>
        <Wrapper>
            <Inner style={{justifyContent: "start"}}>
            <Image src={car.imageSrc}/>
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