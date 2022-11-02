import styled from 'styled-components';

const Style = styled.div`
  .title {
    font-weight: 500;
    font-size: 17px;
    padding-bottom: 15px;
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
  
  .header{
    padding: 10px 0px;
    margin-left: 30px;
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 500;
  }
  
  .headerPool{
    float: left;
    width: 230px;
  }
  
  .headerDeposit{
    float: left;
    width: 180px;
  }
  
  .headerInterest{
    float: left;
    width: 180px;
  }
  
  .headerAddress{
    float: left;
    width: 180px;
  }
`;

export default Style;
