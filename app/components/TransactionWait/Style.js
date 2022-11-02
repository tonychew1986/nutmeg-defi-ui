import styled from 'styled-components';

const Style = styled.div`
  position: fixed;
  z-index: 9999999;
  top: 100px;
  right: 30px;
  
  .panel{
    position: relative;
    z-index: 9999999;
    padding: 20px 20px;
    font-weight: 12px;
    background-color: #EEE;
    border: 1px solid #DDD;
  }
  
  .loader{
    float: left;
    width: 60px;
    height: 30px;
    padding: 20px;
  }
  
  .info{
    float: left;
    /* width: 40px; */
  }

  .action{
    font-weight: bold;
    padding-bottom: 5px;
    font-size: 14px;
  }
  
  .hash{
    font-size: 12px;
  }
  
  .hash:hover{
    color: #FFA200;
  }
`;

export default Style;
