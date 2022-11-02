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
  
  .platform{
    float: left;
    width: 300px;
    padding: 15px 25px;
    background-color: ${props => props.theme.pale};
    margin: 10px 10px;
    border-radius: 12px;
  }
  
  .platformIcon{
    float: left;
    padding-right: 20px;
  }
  
  .platformFigures{
    float: left;
  }
  
  .platformFiguresTitle{
    font-size: 15px;
    padding-bottom: 5px;
    padding-top: 5px;
  }
  
  .platformFiguresAmount{
    font-size: 30px;
    font-weight: 500;
  }
  
  
  
  
`;

export default Style;
