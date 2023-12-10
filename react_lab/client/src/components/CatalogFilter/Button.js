import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd/es/radio";

const SortButtons = ({ sortCars, sortOrder, setSortOrder, setSortedCars }) => {
  const navigate = useNavigate();

  const handleSortClick = (sortField) => {
    // Get the current URL
    const currentPath = window.location.pathname;

    // Create a new URL with the sorting parameter
    const newUrl = `${currentPath}?sortBy=${sortField}`;

    // Change the URL
    navigate(newUrl);

    // Call the sorting function
    sortCars(sortField);
  };

  return (
    <>
      <Button
        style={{ marginRight: "30px" }}
        onClick={() => handleSortClick("power")}
      >
        Sort by Power
      </Button>
      <Button
        style={{ marginRight: "30px" }}
        onClick={() => handleSortClick("weight")}
      >
        Sort by Weight
      </Button>
      <Button onClick={() => handleSortClick("acceleration")}>
        Sort by Acceleration
      </Button>
    </>
  );
};

export default SortButtons;
