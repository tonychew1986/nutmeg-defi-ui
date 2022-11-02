import styled from 'styled-components';

const Style = styled.div`
  .popup-content{
    width: 350px !important;
  }
  
  .assetEntry{
    padding: 5px 20px;
    /* margin: 10px 0px; */
    /* background-color: #EEE; */
    border-bottom: 1px solid #DDD;
    color: #666;
    /* border-radius: 2px;
    -webkit-box-shadow: -2px -2px 25px -10px rgba(209,207,209,1);
    -moz-box-shadow: -2px -2px 25px -10px rgba(209,207,209,1);
    box-shadow: -2px -2px 25px -10px rgba(209,207,209,1); */
  }
  
  .assetEntry:last-child{
    border-bottom: none;
  }
  
  .assetEntryHeader{
    background-color: #DDD;
    color: #333;
    padding: 12px 20px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  
  .asset{
    float: left;
    width: 50px;
  }
  
  .assetImg{
    padding-top: 10px;
  }
  
  .assetImg img{
    width: 30px;
    height: 30px;
  }
  
  .name{
    float: left;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 16px;
    width: 150px;
    padding-top: 15px;
  }
  
  .balance{
    float: left;
  }
  
  .balanceNum{
    padding-top: 15px;
    font-weight: bold;
    font-size: 16px;
  }
  
  .actions{
    float: right;
  }
  
`;

export default Style;
