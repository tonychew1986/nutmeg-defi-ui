import styled from 'styled-components';

const Style = styled.div`

  .row{
    /* margin: 15px 0px; */
  }
  
  .tvlGraph{
    float: left;
    width: calc(50% - 40px);
    height: 400px;
    overflow: hidden;
  
    background-color: #fff;
    margin: 5px 20px;
    /* border: 1px solid rgb(212, 217, 225); */
    border-radius: 12px;
    padding: 40px 0px;
  }
  
  .treasuryGraph{
    float: left;
    width: calc(50% - 40px);
    height: 400px;
    overflow: hidden;
  
    background-color: #fff;
    margin: 5px 20px;
    /* border: 1px solid rgb(212, 217, 225); */
    border-radius: 12px;
    padding: 40px 0px;
  }
  
  .treasuryPool{
    /* float: left;
    width: 50%; */
  }
  
  .fundsBorrowed{
    /* float: left;
    width: 50%; */
  }
  
  .navLeftIndicators{
    /* float: left;
    padding-top: 8px;
    padding-left: 40px; */
  }
`;

export default Style;
