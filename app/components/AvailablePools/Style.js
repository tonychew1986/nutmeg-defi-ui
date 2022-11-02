import styled from 'styled-components';

const Style = styled.div`
  .title{
    font-weight: 500;
    font-size: 17px;
    padding-bottom: 5px;
    margin-top: 40px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #555;
  }
  
  .content{
    padding: 35px 40px;
    background-color: #FFF;
    margin: 5px 10px;
    border: 1px solid rgb(212, 217, 225);
    border-radius: 4px;
  }
  
  .table{
    border: 1px solid #000;
  }
  
  .tableEntry{
    /* padding: 10px 20px; */
  }
  
  .tableEntryHeader{
    border-bottom: 1px solid #000;
  }
  
  .tableEntryColumnHeader{
    width: 100px;
    min-height: 20px;
    border-right: 1px solid #000;
  }
  
  .tableEntryColumn{
    float: left;
    width: 20%;
    /* padding: 10px 20px; */
  }
  
  .tableEntryColumnContent{
    padding: 10px 20px;
    min-height: 40px;
  }
  
`;

export default Style;
