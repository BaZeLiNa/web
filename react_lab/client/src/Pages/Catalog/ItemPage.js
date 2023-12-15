import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Image, Text, PriceSec } from './ItemPage.styled';
import { Wrapper, Inner } from '../../components/components';
import { Button, Input, Select } from 'antd';
import { Link } from "react-router-dom";
import Loader from '../../components/Loader/Loader';
import imageMap from '../../components/Foto/Images';
import { fetchCarData } from '../../components/fetching';
import { addToCart } from '../../components/redux/actions';
import { useDispatch } from 'react-redux';

const ItemPage = () => {
  const { carId } = useParams();
  const [car, setCar] = useState();
  const [counter, setCounter] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const carData = await fetchCarData(carId);
        setCar(carData);
      } catch (error) {
      }
    };

    fetchData();
  }, [carId]);

  const handleCounterChange = (value) => {
    setCounter(value);
  };

  const addItem = () =>{
    console.log(car, parseInt(counter));
    dispatch(addToCart(car, parseInt(counter)));
  };

  if (!car) {
    return <Loader />;
  }

  return (
    <div>
      <Wrapper>
        <Inner style={{ justifyContent: "start" }}>
          <Image src={imageMap[car.imageSrc]} />
          <Text>
            <h1>{car.name}</h1>
            <p>Power: {car.power} hp</p>
            <p>Weight: {car.weight} kg</p>
            <p>Acceleration: {car.acceleration} sec</p>
            <div>
              <p>Input value:</p>
              <Input
                style={{ width: 200, marginRight: "30px" }}
                value={counter}
                type="number"
                min="0"
                step="1"
                onChange={(e) => handleCounterChange(e.target.value)}
              />
              <Select style={{ width: 200 }} defaultValue="Select Field:">
                <Select.Option value="field1">Field 1</Select.Option>
                <Select.Option value="field2">Field 2</Select.Option>
                <Select.Option value="field3">Field 3</Select.Option>
              </Select>
            </div>
          </Text>
        </Inner>
        <PriceSec>
          <h2>Price: {car.price * counter}$</h2>
          <div>
            <Button style={{ marginRight: "30px" }}>
              <Link to={`/Catalog`}>Go back</Link>
            </Button>
            <Button style={{ backgroundColor: 'gray', color: 'white' }} onClick={addItem}>Add to cart</Button>
          </div>
        </PriceSec>
      </Wrapper>
    </div>
  );
};

export default ItemPage;
