import styled from 'styled-components';

const Style = styled.div`
  .title{
    font-weight: 500;
    font-size: 17px;
    padding-bottom: 25px;
    /* margin-bottom: 40px; */
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #555;
  }
  
  .assetName{
    font-weight: bold;
    text-transform: uppercase;
  }
  
  .availableNum{
    font-size: 22px;
    font-weight: 700;
    padding: 10px 0px;
    color: #333;
  }
  
  .availableNumIcon{
    float: left;
    padding-right: 10px;
  }
  
  .availableNumFigure{
    float: left;
  }
  
  .assetImg{
    padding-top: 0px;
  }
  
  .assetImg img{
    width: 18px;
    height: 18px;
  }
`;

export default Style;
