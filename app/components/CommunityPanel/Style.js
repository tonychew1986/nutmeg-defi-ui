import styled from 'styled-components';

const Style = styled.div`
  background-color: #fff;
  padding: 20px 25px;
  width: calc(33.33% - 20px);
  float: left;
  margin: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  
  .sourceLogo{
    float: left;
    width: 100px;
  }
  
  .sourceContent{
    float: left;
    width: calc(100% - 100px);
  }
  
  .sourceContentTitle{
    font-size: 16px;
    padding-bottom: 10px;
    font-weight: bold;
  }
  
  .sourceContentDesc{
    font-size: 14px;
    padding-bottom: 10px;
    color: #666;
  }
  
  .sourceContentLink{
    font-size: 14px;
    color: brown;
  }
`;

export default Style;
