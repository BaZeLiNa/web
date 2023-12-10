import styled from "styled-components";
import {Wrapper} from "../components";

export const Image = styled.img`
  width: 40%;
  height: 40%;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
`;

export const HeadingText = styled.div`
  max-width: 40%;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 20px;
  h2 {
    font-size: 2vw;
    text-align: center;
  }

  span {
    color: black;
    font-size: 1.15vw;
    margin-right: 0;
    padding: 0.6vw 2.6vw;
  }
`;
export const HeadingWrapper = styled(Wrapper)`
  justify-content: space-between;
  max-width: 95%;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: none;
  border-radius: 15px;
`;
