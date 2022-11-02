import styled from 'styled-components';

const Style = styled.div`

  .assetEntry{
    padding: ${props => props.theme.paddingStandard};
    margin: 10px 0px;
    background-color: #EEE;
    border: 1px solid #DDD;
    border-radius: 2px;
    -webkit-box-shadow: -2px -2px 25px -10px rgba(209,207,209,1);
    -moz-box-shadow: -2px -2px 25px -10px rgba(209,207,209,1);
    box-shadow: -2px -2px 25px -10px rgba(209,207,209,1);
  }
  
  .asset{
    float: left;
    width: 50%;
  }
  
  .balance{
    float: left;
    color: #666;
  }
  
  .actions{
    float: right;
  }
  
`;

export default Style;
