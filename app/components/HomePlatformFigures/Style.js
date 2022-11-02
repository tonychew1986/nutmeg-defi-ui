import styled from 'styled-components';

const Style = styled.div`
  .title {
    font-weight: 500;
    font-size: 15px;
    /* padding: 0px 50px; */
    padding-bottom: 5px;
    /* margin-top: 40px; */
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #555;
    height: 39px;
  }

  .navLeftIndicator{
    float: left;
    width: 180px;
    height: 120px;
    padding: 30px;
    margin: 20px 15px;
    border-radius: 12px;
    background-color: white;
  }

  .navLeftIndicatorTitle{
    font-size: 11px;
    font-weight: bold;
    padding-bottom: 5px;
    text-transform: uppercase;
    color: #666;
  }

  .navLeftIndicatorNumber{
    color: ${props => props.theme.gold};
    font-size: 30px;
    font-weight: 500;
  }
`;

export default Style;
