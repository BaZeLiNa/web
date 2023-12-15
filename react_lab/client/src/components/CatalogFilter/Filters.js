import React, { useState } from 'react';
import { Button, Input } from "antd";
import { Wrapper, Inner } from "../components";
import {handleSearch} from "../../Pages/Catalog/Catalog";
import { useLocation } from 'react-router-dom';
import { resetSearch, fetchDataAndSetCars } from "../fetching";

const Filters = ({ cars, setSortedCars }) => {
  const location = useLocation();
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (value) => {
    setSearchValue(value);
    if (location.pathname === '/Catalog') {
      handleSearch(value, cars, setSortedCars);
    }
  };

  const resetAndFetch = async () => {
    await resetSearch(setSortedCars);
  };

  const fetchDataAndSort = async (sortBy) => {
    await fetchDataAndSetCars(sortBy, setSortedCars);
  };
      
    return (
        <div>
            <Wrapper style={{display: "flex"}}>
                <Inner style={{ marginBottom: "20px", marginTop: "20px"}}>
                    <Button style={{ marginRight: "30px" }} onClick={() => fetchDataAndSort('power', setSortedCars)}>Sort by Power</Button>
                    <Button style={{ marginRight: "30px" }} onClick={() => fetchDataAndSort('weight', setSortedCars)}>Sort by Weight</Button>
                    <Button onClick={() => fetchDataAndSetCars('acceleration', setSortedCars)}>Sort by Acceleration</Button>
                </Inner>
                <Inner style={{ marginBottom: "20px", marginTop: "20px"}}>
                    <Input.Search
                    placeholder="Search cars"
                    value={searchValue}
                    onChange={(e) => handleInputChange(e.target.value)}
                    style={{ width: 200, marginLeft: '20px' }}
                    />
                <Button style={{ marginLeft: "30px" }} onClick={() => resetAndFetch(setSortedCars)}>Reset</Button>
                </Inner>
            </Wrapper>
        </div>
    );
};

export default Filters;
