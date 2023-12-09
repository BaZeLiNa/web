import Icon from '@ant-design/icons';
import styled from 'styled-components';

export const IconBase = styled(Icon)`
    font-size: 24px;
    color: ${({color}) => color};
`;
export const BrandInfo = styled.div`
    align-self: center;
    a {
    cursor: auto;
    }
    h2 {
        margin-top: 10px;
        margin-bottom: 10px;
    }

`
export const MediaList = styled.ul`
  display: flex;
  padding: 0;
  width: 25%;
  align-self: center;
  justify-content: space-around;
  a {
    cursor: auto;
  }
`

export const VerticalLine = styled.hr`
    width: 80%;
    border-bottom: none;
    border-top: 1px solid #EFEFF4;
    margin: 0;
`;
export const StyledText = styled.p`
    margin-top: 0px;
    text-align: center;
    margin-bottom: 5px;
`;

