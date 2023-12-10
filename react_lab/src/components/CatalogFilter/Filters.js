import React, { useState } from 'react';
import { Button, Input } from "antd";
import { Wrapper, Inner } from "../components";
import { sortCars } from "../SortSearch/SortSearch";
import {handleSearch} from "../../Pages/Catalog/Catalog";
import { useLocation } from 'react-router-dom';
// import { cars_arr } from '../../Pages/Catalog/Catalog';
import { useCars } from '../../Pages/Catalog/Catalog';

const Filters = ({ cars, sortOrder, setSortOrder, setSortedCars }) => {
    const location = useLocation();
    const [searchValue, setSearchValue] = useState("");
    const { cars_arr } = useCars();

    const handleInputChange = (value) => {
        setSearchValue(value);
        // Викликати функцію пошуку тільки на сторінці /Catalog
        if (location.pathname === '/Catalog') {
          handleSearch(value, cars, setSortedCars);
        }
      };
      const resetSearch = () => {
        setSearchValue("");
        setSortedCars(cars_arr); // Змінено тут: скидаємо список автомобілів на оригінальний
      };
    
    return (
        <div>
            <Wrapper style={{display: "flex"}}>
                <Inner style={{ marginBottom: "20px", marginTop: "20px"}}>
                    <Button style={{ marginRight: "30px" }} onClick={() => sortCars(cars, sortOrder, setSortOrder, setSortedCars, 'power')}>Sort by Power</Button>
                    <Button style={{ marginRight: "30px" }} onClick={() => sortCars(cars, sortOrder, setSortOrder, setSortedCars, 'weight')}>Sort by Weight</Button>
                    <Button onClick={() => sortCars(cars, sortOrder, setSortOrder, setSortedCars, 'acceleration')}>Sort by Acceleration</Button>
                </Inner>
                <Inner style={{ marginBottom: "20px", marginTop: "20px"}}>
                    <Input.Search
                    placeholder="Search cars"
                    value={searchValue}
                    onChange={(e) => handleInputChange(e.target.value)}
                    style={{ width: 200, marginLeft: '20px' }}
                    />
                <Button style={{ marginLeft: "30px" }} onClick={resetSearch}>Reset</Button>
                </Inner>
            </Wrapper>
        </div>
    );
};

export default Filters;
