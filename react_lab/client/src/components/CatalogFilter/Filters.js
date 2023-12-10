import React, { useState } from 'react';
import { Button, Input } from "antd";
import { Wrapper, Inner } from "../components";
import {handleSearch} from "../../Pages/Catalog/Catalog";
import { useLocation } from 'react-router-dom';

const Filters = ({ cars, setSortedCars }) => {
    const location = useLocation();
    const [searchValue, setSearchValue] = useState("");

    const handleInputChange = (value) => {
        setSearchValue(value);
        if (location.pathname === '/Catalog') {
          handleSearch(value, cars, setSortedCars);
        }
      };
      const resetSearch = async (setSortedCars) => {
        try{
            const apiUrl = `http://localhost:8080/api/car`;
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
              }
              const data = await response.json();
              setSortedCars(data);
            } catch (error) {
              console.error('Помилка під час отримання даних:', error.message);
            }
        };

      const fetchDataAndSetCars = async (sortBy, setSortedCars) => {
        try {
          const apiUrl = `http://localhost:8080/api/car?sortBy=${sortBy}`;
          const response = await fetch(apiUrl);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setSortedCars(data);
        } catch (error) {
          console.error('Помилка під час отримання даних:', error.message);
        }
      };
      
    return (
        <div>
            <Wrapper style={{display: "flex"}}>
                <Inner style={{ marginBottom: "20px", marginTop: "20px"}}>
                    <Button style={{ marginRight: "30px" }} onClick={() => fetchDataAndSetCars('power', setSortedCars)}>Sort by Power</Button>
                    <Button style={{ marginRight: "30px" }} onClick={() => fetchDataAndSetCars('weight', setSortedCars)}>Sort by Weight</Button>
                    <Button onClick={() => fetchDataAndSetCars('acceleration', setSortedCars)}>Sort by Acceleration</Button>
                </Inner>
                <Inner style={{ marginBottom: "20px", marginTop: "20px"}}>
                    <Input.Search
                    placeholder="Search cars"
                    value={searchValue}
                    onChange={(e) => handleInputChange(e.target.value)}
                    style={{ width: 200, marginLeft: '20px' }}
                    />
                <Button style={{ marginLeft: "30px" }} onClick={() => resetSearch(setSortedCars)}>Reset</Button>
                </Inner>
            </Wrapper>
        </div>
    );
};

export default Filters;
