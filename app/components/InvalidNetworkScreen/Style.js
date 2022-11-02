import styled from 'styled-components';

const Style = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, 0.6);
  /* padding-top: 120px;
  padding-left: 100px; */
  z-index: 999;
  
  .panel{
    background-color: #FFF;
    border-radius: 4px;
    width: 400px;
    /* height: 150px; */
    margin: auto;
    padding: 20px 30px;
    margin-top: calc(250px);
    font-size: 14px;
    text-align: center;
  }
  
  .title{
    font-weight: 700;
    font-size: 16px;
  }
`;

export default Style;
