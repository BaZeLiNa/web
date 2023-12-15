import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementCounter, decrementCounter, removeFromCart } from '../../components/redux/actions';
import { Button } from "antd";
import { Wrapper } from "../../components/components";
import imageMap from "../../components/Foto/Images";
import { CartItemWrapper } from "./Cart_styled";
import {Link, NavLink} from "react-router-dom";


const Cart = () => {
  const carItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [price, setPrice] = useState(0); 

  useEffect(() => {
    let total = 0;
    carItems.forEach(element => {
      total += element.car.price * element.counter;
    });
    setPrice(total);
  }, [carItems]);

  const handleIncrement = (carId) => {
    dispatch(incrementCounter(carId));
  };

  const handleDecrement = (carId, counter) => {
    if (counter === 1){
      dispatch(removeFromCart(carId));
    }else{
      dispatch(decrementCounter(carId));
    }
  };
  const deleteItem = (carId =>{
    dispatch(removeFromCart(carId));
  });


  return (
    <div>
      <Wrapper>
          <h1 style={{textAlign: "center", marginBottom: "50px"}}>Shopping Cart</h1>
          {carItems.map((item) => (
            <CartItemWrapper key={item.car.id}>
              <img style={{ width: "150px", height: "100px", borderRadius: "9px" }} src={imageMap[item.car.imageSrc]} alt={item.car.name} />
              <NavLink
              style={{alignItems: "center", marginTop: "35px", marginLeft: 60}}
              exact to={`/Catalog/${item.car.id}`}
              >{item.car.name}</NavLink>
              <div style={{marginTop: "35px", marginRight: 50, marginLeft: "auto"}}>
                <Button onClick={() => handleIncrement(item.car.id)}>+</Button>
                <span style={{marginLeft: "20px"}}>{item.counter}</span>
                <Button onClick={() => handleDecrement(item.car.id, item.counter)} style={{marginLeft: "20px"}}>-</Button>
                <Button onClick={() => deleteItem(item.car.id)} style={{marginLeft: "20px"}}>Delete</Button>
              </div>
              <span style={{marginRight: "10px", marginTop: "35px"}}>{(item.car.price) * (item.counter)}$</span>
            </CartItemWrapper> 
          ))};
          
          <h2>Total price: ${price}</h2>
          <div style={{width: "80%", paddingInline: "10%", marginBottom: 30, justifyContent: "space-between", display: "flex"}}>
            <Link to={`/Catalog`}>
              <Button >Back to catalog</Button>
            </Link>
            <Button style={{ backgroundColor: 'gray', color: 'white' }}>Continue</Button>
          </div>
      </Wrapper>
    </div>
  );
};

export default Cart;
