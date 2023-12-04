import {
    AudiS1, RS200, Lancia037, LanciaS4,
    MG, Peugeot205, Peugeot405,
    Porsche, Renault, Stratos
} from './foto/Foto-imports';

import CatalogWrapper from "./Catalog.styled";
import CatalogItem from '../../components/CatalogItem/CatalogItem';
import Filters from '../../components/CardItem/Filters';


const cars = [
    {
        id: 1,
        name: "Audi Quattro S1 E2",
        power: 550,
        weight: 1090,
        acceleration: 3.0,
        imageSrc: AudiS1
    },
    {
        id: 2,
        name: "Ford RS200",
        power: 600,
        weight: 1180,
        acceleration: 3.07,
        imageSrc: RS200
    },
    {
        id: 3,
        name: "Lancia 037",
        power: 325,
        weight: 1090,
        acceleration: 5.0,
        imageSrc: Lancia037
    },
    {
        id: 4,
        name: "Lancia Delta S4",
        power: 500,
        weight: 890,
        acceleration: 2.5,
        imageSrc: LanciaS4
    },
    {
        id: 5,
        name: "MG Metro 6R4",
        power: 410,
        weight: 1090,
        acceleration: 3.2,
        imageSrc: MG
    },
    {
        id: 6,
        name: "Peugeot 205 T16",
        power: 500,
        weight: 910,
        acceleration: 3.0,
        imageSrc: Peugeot205
    },
    {
        id: 7,
        name: "Peugeot 405 T16 'Pikes Peak'",
        power: 600,
        weight: 900,
        acceleration: 2.5,
        imageSrc: Peugeot405
    },
    {
        id: 8,
        name: "Renault 5 Turbo Group B",
        power: 350,
        weight: 970,
        acceleration: 5.0,
        imageSrc: Renault
    },
    {
        id: 9,
        name: "Porsche 911 SC/RS",
        power: 280,
        weight: 1090,
        acceleration: 5.0,
        imageSrc: Porsche
    },
    {
        id: 10,
        name: "Lancia Stratos",
        power: 280,
        weight: 980,
        acceleration: 6.0,
        imageSrc: Stratos
    }
]


const Catalog = () => {
    return(
        <div>
            <Filters />
            <CatalogWrapper>
                {cars.map(({id, name, power, weight, acceleration, imageSrc}, idx) =>(
                    <CatalogItem 
                    id = {id}
                    name = {name}
                    power = {power}
                    weight = {weight}
                    acceleration = {acceleration}
                    imageSrc = {imageSrc}
                    />
                ))}
            </CatalogWrapper>
        </div>
    )
};

export default Catalog;