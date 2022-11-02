import styled from 'styled-components';

const Style = styled.div`
  margin-top: 30px;

  .assetEntry{
    font-weight: 500;
    font-size: 16px;
    color: #333;
    width: calc(100% - 20px);
    /* margin: auto; */
    text-align: left;
  }
  
  .assetEntry:nth-child(even){
    background-color: #EEE;
  }
  
  .assetEntryName{
    float: left;
    padding: 5px;
    width: 170px;
    padding-left: 10px;
  }
  
  .assetEntryAmount{
    float: left;
    padding: 5px;
    width: 100px;
  }
  
  .assetEntryPriceValue{
    float: left;
    padding: 5px;
    width: 100px;
  }
`;

export default Style;
