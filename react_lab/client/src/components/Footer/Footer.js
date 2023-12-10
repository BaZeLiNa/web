import React from "react";
import { Wrapper, Inner, LogoImg} from "../components";
import {IconBase, BrandInfo, MediaList, VerticalLine, StyledText} from "./Footer.styled";

import CarLogo from "./logo.png";
import {
    TwitterOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    YoutubeOutlined
  } from "@ant-design/icons";

const Footer = () => {
  return (
    <Wrapper>
        <Inner>
            <BrandInfo>
            <h2>Historical cars</h2>
            <span>Some beautiful words about the legendary Group B.</span>
            </BrandInfo>
            <LogoImg src={CarLogo} alt={"car"} />
            <MediaList>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                <IconBase component={YoutubeOutlined} color='red'/>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <IconBase component={TwitterOutlined} color='blue'/>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <IconBase component={LinkedinOutlined} color='black' />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <IconBase component={InstagramOutlined} color='#FC0FC0' />
              </a>
            </MediaList>
        </Inner>
        <VerticalLine />
        <StyledText>© 2023 IoT. Copyright all rights reserved.</StyledText>
    </Wrapper>
  );
};
export default Footer;