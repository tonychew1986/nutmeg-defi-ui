import styled from 'styled-components';

const Style = styled.div`
  .title{
    font-weight: 500;
    font-size: 17px;
    padding-bottom: 5px;
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
  
  .panel{
    float: left;
    width: calc(33.33% - 10px);
    /* background-color: #DDD; */
    padding: ${props => props.theme.paddingStandard};
    margin: 5px;
    
    
    /* padding: 15px 25px; */
    background-color: ${props => props.theme.pale};
    /* margin: 5px 0px; */
    border-radius: 12px;
  }
  
  .panelTitle{
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  .panelTitleText{
    float: left;
    padding-right: 5px;
    font-size: 15px;
  }
  
  .panelTitleIcon{
    float: left;
    margin-top: -2px;
  }
  
  .panelTitleIcon img{
    height: 18px;
  }
  
  .panelNum{
    font-size: 30px;
    font-weight: 500;
  }
  
  .panelDollarValue{
    font-size: 12px;
    color: ${props => props.theme.gold};
    margin-left: -20px;
    margin-top: 5px;
  }
`;

export default Style;
