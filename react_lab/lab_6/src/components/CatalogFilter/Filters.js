import { Button } from "antd";
import { Wrapper, Inner } from "../components";
const Filters = () => {
    return(
        <div>
            <Wrapper>
                <Inner style={ {marginBottom: "20px", marginTop: "20px", justifyContent: "left" }}>
                    <Button style={{marginRight: "30px"}}>Sort by weight</Button>
                    <Button style={{marginRight: "30px"}}>Sort by power</Button>
                    <Button>Sort by acceleration</Button>
                </Inner>
            </Wrapper>
        </div>
    )
};

export default Filters;