import React from "react";
import LanciaFoto from "./LanciaRally037.jpg"
import {
    HeadingWrapper,
    Image,
    HeadingText
} from "./Heading.styles"

const Heading = () =>{
    return (
        <HeadingWrapper>
          <Image src={LanciaFoto} />
          <HeadingText>
            <h2>Legendary cars of group B</h2>
            <span>
            The Group B era in rallying, spanning from 1982 to 1986, is celebrated as a golden age in
             the sport's history. During this period, manufacturers unleashed powerful and technologically advanced
             cars, such as the Audi Quattro and Lancia Delta S4, pushing the limits of speed and performance.
             The competitive frenzy among teams led to continuous innovation, creating some of the most iconic
             rally cars ever built. However, the era came to an abrupt end due to safety concerns after a series of tragic
             accidents, marking the conclusion of the legendary Group B and leaving an enduring legacy in the world of motorsport.
            </span>
          </HeadingText>
      </HeadingWrapper>
    );
};
export default Heading;