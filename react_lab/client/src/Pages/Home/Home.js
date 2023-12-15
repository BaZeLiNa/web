import {ImageLanciaS4, ImageAudiS1, ImageLancia037} from "./images/Imports";
import Heading from "../../components/Heading/Heading";
import {CardWrapper, ViewMore} from "./Home.style";
import CardItem from "../../components/CardItem/CardItem";
import { Button } from "antd";
import {Link} from "react-router-dom";


const data = [
    {
      title: "Lancia delta S4",
      text: `
        The Lancia Delta S4, a standout in Group B rallying, 
        is celebrated for its innovative turbocharged and supercharged engine design.`,
      image: ImageLanciaS4,
    },
    {
      title: "Audi Sport Quattro S1 E2",
      text: `
        The Audi Quattro S1 E2, a legend in Group B rallying, 
        is renowned for its turbocharged power and distinctive 
        5-cylinder engine design, maintaining performance without 
        altering its length.`,
      image: ImageAudiS1,
    },
    {
      title: "Lancia 037",
      text: `
        The Lancia 037, a notable Group B rally car, 
        is famed for its distinctive rear-wheel-drive and mid-engine 
        setup, setting it apart in the iconic era of rallying.`,
      image: ImageLancia037,
    },
];


const Home = () => {
  return (
    <div>
      <Heading/>
      <CardWrapper>
        {data.map(({ title, text, image}, idx) => (
          <CardItem
            title={title}
            text={text}
            imageSrc={image}
            id={idx}
          />
        ))}
      </CardWrapper>
      <ViewMore>
        <Link to={`/Catalog`}>
          <Button>View more</Button>
        </Link>
        
      </ViewMore>
    </div>
  );
};

export default Home;