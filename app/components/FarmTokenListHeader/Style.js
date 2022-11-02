import styled from 'styled-components';

const Style = styled.div`
  .farmList{
    padding: ${props => props.theme.paddingStandard};
    background-color: ${props => props.theme.pale};
    /* border: 1px solid #DDD; */
    border-radius: 12px;
    /* -webkit-box-shadow: -2px -2px 25px -10px rgba(209,207,209,1);
    -moz-box-shadow: -2px -2px 25px -10px rgba(209,207,209,1);
    box-shadow: -2px -2px 25px -10px rgba(209,207,209,1); */
  }
  
  .farmListEntryHeader{
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 20px;
    /* text-transform: uppercase; */
    /* margin-top: 15px; */
    color: #333;
  }
  
  .farmListEntry{
    float: left;
    width: 100%;
    color: #333;
  }
  
  .pool{
    width: 10%;
    height: 10px;
  }
  
  .pair{
    width: 20%;
    height: 10px;
  }
  
  .name{
    width: 20%;
    height: 10px;
  }
  
  .apy{
    width: 20%;
    height: 10px;
  }
  
  .leverage{
    width: 10%;
    height: 10px;
  }
  
  .farmBtn{
    width: 20%;
    height: 10px;
  }
`;

export default Style;
