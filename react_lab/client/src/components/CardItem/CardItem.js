import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const CardItem = ({ title='No title.', text, imageSrc}) => (
  <Card
    hoverable
    style={{ width: 350, borderRadius: "20px", backgroundColor: "#f5f2ed" }}
    cover={
      <img style={{ borderRadius: "15px" }} alt="car foto" src={imageSrc} />
    }
  >
    <Meta title={title} description={text} />
  </Card>
);

export default CardItem;