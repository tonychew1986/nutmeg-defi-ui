import styled from 'styled-components';

const Style = styled.div`
  .title{
    font-weight: 500;
    font-size: 17px;
    padding-bottom: 5px;
    /* margin-top: 40px; */
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #555;
  }
  
  .content{
    padding: 5px 5px;
    /* background-color: ${props => props.theme.pale}; */
    margin: 5px 10px;
  }
  
  .trancheHighlight{
    font-weight: bold;
  }
  
  .trancheTriangle{
    margin-left: 200px;
  }
  
  .trancheText{
    
  }
  
  .AAA{
    width: 90px;
    height: 50px;
    border-bottom: solid 50px rgb(200,30,50);
    border-left: solid 50px transparent;
    border-right: solid 50px transparent;
  }
  .AA{
    width: 200px;
    height: 60px;
    border-bottom: solid 50px rgb(200,30,50);
    border-left: solid 50px transparent;
    border-right: solid 50px transparent;
    margin-left: -50px;
  }
  .B{
    width: 400px;
    height: 110px;
    border-bottom: solid 100px rgb(200,30,50);
    border-left: solid 100px transparent;
    border-right: solid 100px transparent;
    margin-left: -150px;
  }
  
  .trancheHeader{
    /* padding: 20px 30px; */
  }
  
  .trancheToken{
    /* float: left;
    width: 200px; */
    margin-top: 10px;
  }
  
  .trancheTokenImg{
    float: left;
    padding-right: 15px;
  }
  
  .trancheTokenImg img{
    width: 20px;
  }
  
  .trancheTokenSymbol{
    float: left;
    font-size: 20px;
    text-transform: uppercase;
    margin-top: 0px;
    font-weight: bold;
    color: #444;
  }
  
  .trancheLevel{
    margin-left: 35px;
    margin-top: 5px;
    font-size: 16px;
  }
  
  .trancheTokenInfo{
    /* float: left;
    width: calc(100% - 200px); */
    padding: 20px 0px;
  }
  
  .trancheYield{
    float: left;
    width: calc(50% - 20px);
    color: #444;
    padding: 20px 30px;
    margin: 10px 10px;
    background-color: ${props => props.theme.pale};
    border-radius: 12px;
  }
  
  .trancheTVL{
    float: left;
    width: calc(50% - 20px);
    color: #444;
    padding: 20px 30px;
    margin: 10px 10px;
    background-color: ${props => props.theme.pale};
    border-radius: 12px;
  }
  
  .trancheRisk{
    float: left;
    width: calc(50% - 20px);
    color: #444;
    padding: 20px 30px;
    margin: 10px 10px;
    background-color: ${props => props.theme.pale};
    border-radius: 12px;
  }
  
  .trancheDepositBalance{
    float: left;
    width: calc(50% - 20px);
    color: #444;
    padding: 20px 30px;
    margin: 10px 10px;
    background-color: ${props => props.theme.pale};
    border-radius: 12px;
  }
  
  .trancheDetailTitle{
    font-size: 14px;
    font-weight: 500;
    padding-bottom: 10px;
    letter-spacing: 0.5px;
  }
  
  .trancheDetailNum{
    font-size: 20px;
    padding-bottom: 5px;
    color: ${props => props.theme.gold};
    font-weight: bold;
  }
  
  .trancheBody{
    background-color: #fff;
    padding: 20px 30px;
    margin-top: 15px;
  }
  
  .trancheDeposit{
    /* float: left;
    width: 50%; */
    padding: 10px 30px;
  }
  
  .trancheDepositTitle, .trancheWithdrawTitle{
    font-weight: bold;
    font-size: 20px;
    padding-bottom: 15px;
    color: ${props => props.theme.gold};
  }
  
  .trancheBalance{
    font-weight: 14px;
  }
  
  .trancheBalanceTitle{
    /* font-weight: bold; */
    padding-bottom: 5px;
  }
  
  .trancheBalanceAmount{
    font-weight: bold;
    font-size: 20px;
  }
  
  .trancheBalanceInput{
    padding: 10px 0px;
  }
  
  .trancheBalanceInputPrompt{
    padding: 20px 30px;
    margin: 10px 0px;
    /* font-weight: 500; */
    font-size: 15px;
    background-color: ${props => props.theme.pale};
    border-radius: 12px;
    /* text-align: center; */
  }
  
  .trancheWithdraw{
    /* float: left;
    width: 50%; */
    padding: 10px 30px;
  }
`;

export default Style;
