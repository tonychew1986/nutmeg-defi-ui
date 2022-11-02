import styled from 'styled-components';

const Style = styled.div`
  .poolEntry {
    float: left;
    width: 100%;
    /* height: 330px; */
    /* width: calc(25% - 10px); */
    padding: 15px 25px;
    background-color: ${props => props.theme.pale};
    margin: 5px 0px;
    /* margin-right: 20px; */
    /* text-align: center; */

    /* border: 1px solid #ddd;
    -webkit-box-shadow: -2px -2px 15px -10px rgba(209, 207, 209, 1);
    -moz-box-shadow: -2px -2px 15px -10px rgba(209, 207, 209, 1);
    box-shadow: -2px -2px 15px -10px rgba(209, 207, 209, 1); */
    border-radius: 12px;
  }
  
  .poolEntry:hover{
    background-color: ${props => props.theme.milk};
  }

  .poolEntryLogo {
    float: left;
    padding: 15px 10px;
    /* height: 110px; */
    width: 60px;
  }
  
  .poolEntryLogo img{
    width: 30px;
  }
  
  .poolEntryAssetInfo{
    float: left;
    margin: 12px 0px;
    padding-right: 10px;
    color: #444;
    width: 180px;
  }

  .poolEntryAssetName {
    font-size: 18px;
    font-weight: 700;
  }

  .poolEntryAssetSymbol {
    font-size: 12px;
  }

  .poolEntryAssetDeposit {
    float: left;
    margin: 20px 0px;
    padding-right: 10px;
    color: #444;
    width: 180px;
    font-size: 12px;
  }
  
  .poolEntryAssetDeposit .num{
    padding-right: 5px;
    font-weight: 500;
    font-size: 18px;
  }
  
  .poolEntryAssetInterest{
    float: left;
    margin: 20px 0px;
    padding-right: 10px;
    color: #444;
    width: 180px;
    font-size: 12px;
  }
  
  .poolEntryAssetInterest .num{
    padding-right: 5px;
    font-weight: 500;
    font-size: 18px;
  }
  
  .poolEntryAssetAddress{
    float: left;
    margin: 20px 0px;
    padding-right: 10px;
    color: #444;
    width: 180px;
    font-size: 16px;
    font-weight: 500;
  }
  
  .poolEntryBtn{
    float: right;
    margin: 12px 0px;
    cursor: pointer;
  }
  
  .poolEntryBtn img{
    width: 30px;
  }
`;

export default Style;
