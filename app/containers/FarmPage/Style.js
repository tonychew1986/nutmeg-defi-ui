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
    /* margin-top: 40px; */
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
  
  .desc{
    padding-bottom: 25px;
    padding-right: 65px;
    max-width: 500px;
    color: #666;
  }
  
  .trancheDesc{
    float: left;
    width: 350px;
  }
  
  .assetSelect{
    width: 300px;
  }
  
  .farmLists{
    float: left;
    width: calc(100% - 350px);
    /* margin-bottom: 50px; */
  }
  
`;

export default Style;
