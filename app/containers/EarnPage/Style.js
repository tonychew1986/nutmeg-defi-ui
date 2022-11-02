import styled from 'styled-components';

const Style = styled.div`
  .poolMissing{
    padding: ${props => props.theme.paddingStandard};
    font-size: 18px;
  }
  
  .title{
    font-weight: 500;
    font-size: 17px;
    padding-bottom: 5px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #555;
  }
  
  .titleSuper{
    font-weight: 900;
    font-size: 28px;
    padding-bottom: 25px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #555;
  }
  
  .content{
    padding: 35px 40px;
    border-radius: 12px;
    /* background-color: #EEE;
    margin: 5px 10px; */
    background-color: #fff;
    margin: 20px 20px;
  }
  
  .trancheSelectWrapper{
    float: left;
    width: calc(60%);
  }
  
  .desc{
    /* padding-bottom: 25px; */
    /* padding-right: 65px; */
    /* max-width: 500px; */
    color: #666;
    font-size: 15px;
  }
  
  .selectAsset{
    /* overflow: auto; */
    padding-bottom: 35px;
  }
  
  .trancheDesc{
    float: left;
    width: 350px;
  }
  
  .trancheSelect{
    padding: 5px 10px;
    /* background-color: #FFF;
    overflow: auto;
    border: 1px solid #DDD; */
  }
  
  /* .trancheSelectAsset{
    float: left;
    width: 55%;
    padding-right: 30px;
  } */
  
  .trancheSelectRisk{
    /* float: left; */
    width: 100%;
    min-width: 200px;
    border: 2px solid #000;
    text-align: center;
  }
  
  .trancheSelectRiskEntry{
    cursor: pointer;
    font-size: 18px;
    font-weight: 500;
    border-bottom: 1px solid #333;
  }
  
  .trancheSelectRiskEntry:first-child{
    border: none;
  }
  
  .trancheSelectRiskEntrySelected{
    background-color: ${props => props.theme.gold} !important;
  }
  
  .trancheSelectRiskLow{
    height: 150px;
    background-color: ${props => props.theme.milk};
    padding: 10px;
    padding-top: 65px;
  }
  
  .trancheSelectRiskLow:hover{
    background-color: ${props => props.theme.pale};
  }
  
  .trancheSelectRiskMedium{
    height: 100px;
    background-color: ${props => props.theme.milk};
    padding: 10px;
    padding-top: 40px;
  }
  
  .trancheSelectRiskMedium:hover{
    background-color: ${props => props.theme.pale};
  }
  
  .trancheSelectRiskHigh{
    height: 50px;
    background-color: ${props => props.theme.milk};
    padding: 10px;
    padding-top: 15px;
  }
  
  .trancheSelectRiskHigh:hover{
    background-color: ${props => props.theme.pale};
  }
  
  .trancheSelectRiskDesc{
    float: left;
    padding-left: 30px;
    text-align: center;
    font-weight: 500;
    font-size: 16px;
  }
  
  .trancheSelectRiskDescTop{
    
  }
  
  .trancheSelectRiskDescArrow{
    height: 232px;
  }
  
  .trancheSelectRiskDescBottom{
    
  }
  
  .trancheInfo{
    float: left;
    width: calc(100% - 350px);
  }
  
  
`;

export default Style;
