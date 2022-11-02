import styled from 'styled-components';

const Style = styled.div`
  .title {
    font-weight: 500;
    font-size: 17px;
    padding-bottom: 25px;
    margin-top: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #555;
  }

  .content {
    padding: 35px 40px;
    border-radius: 12px;
    /* background-color: #EEE;
    margin: 5px 10px; */
    background-color: #fff;
    margin: 20px 20px;
    /* border-radius: 12px;
    padding: 40px 0px;
    overflow: hidden; */
  }
  
  .balancePanel{
    float: left;
    width: calc(50%);
    /* text-align: center; */
  }
  
  .balancePanelTitle{
    /* font-weight: bold; */
    font-size: 16px;
    padding-bottom: 10px;
  }
  
  .balancePanelNum{
    font-weight: 500;
    font-size: 28px;
  }
  
`;

export default Style;
