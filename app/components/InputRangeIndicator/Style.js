import styled from 'styled-components';

const Style = styled.div`
  padding: 5px 0px;
  font-size: 11px;
  font-weight: 500;
  color: #333;
  /* background-color: #EEE;
  margin: 5px; */

  .range{
    float: left;
    width: 20%;
    text-align: center;
  }
  
  .rangeText{
    cursor: pointer;
  }
  
  .rangeText:hover{
    color: #FFAA00;
  }
  
  .rangeFirst{
    text-align: center;
  }
  
  .rangeLast{
    text-align: center;
  }
  
`;

export default Style;
