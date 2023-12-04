import React from "react";
import {Button, Card} from "antd";
import DefautIMG from "./default.png";
import {Link} from "react-router-dom";
const {Meta} = Card;

const CatalogItem = ({
    id,
    name = "Not specified",
    power = "Not specified",
    weight = "Not specified",
    acceleration = "Not specified",
    imageSrc = DefautIMG}) => (
        <Card
          hoverable
          style={{ width: 300, borderRadius: "20px", backgroundColor: "#f5f2ed", marginBottom: "50px" }}
          cover={
            <img style={{ borderRadius: "15px"}} alt="car foto" src={imageSrc} />
          }
        >
         <Meta
        title={name}
        description={
        <>
            <p>Power: {power} hp</p>
            <p>Weight: {weight} kg</p>
            <p>Acceleration 0-100: {acceleration} sec</p>
        </>
        }
        />
        <Button>
          <Link to={`/Catalog/${id}`}>Show more</Link>
        </Button>
        </Card>
);

export default CatalogItem;