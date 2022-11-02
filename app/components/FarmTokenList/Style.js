import styled from 'styled-components';

const Style = styled.div`
  .farmList{
    padding: ${props => props.theme.paddingStandard};
    margin-bottom: 10px;
    background-color: ${props => props.theme.pale};
    padding: 5px 20px;
    /* border: 1px solid #DDD; */
    border-radius: 12px;
    /* -webkit-box-shadow: -2px -2px 25px -10px rgba(209,207,209,1);
    -moz-box-shadow: -2px -2px 25px -10px rgba(209,207,209,1);
    box-shadow: -2px -2px 25px -10px rgba(209,207,209,1); */
  }
  
  .farmListEntry{
    float: left;
    width: 100%;
  }
  
  .farmListEntryImg{
    padding-right: 10px;
  }
  
  .farmListEntryImg img{
    width: 30px;
    height: 30px;
  }
  
  .pool{
    width: 10%;
    padding-top: 10px;
  }
  
  .pair{
    width: 20%;
    padding-top: 10px;
  }
  
  .name{
    width: 20%;
    padding-top: 10px;
  }
  
  .apy{
    width: 20%;
    font-weight: 500;
    font-size: 18px;
    padding-top: 10px;
  }
  
  .leverage{
    width: 10%;
    font-weight: 500;
    font-size: 18px;
    padding-top: 10px;
  }
  
  .nameCategory{
    color: #888;
    font-size: 12px;
    padding-bottom: 5px;
    text-transform: capitalize;
  }
  
  .nameSource{
    color: #333;
    font-size: 16px;
    padding-bottom: 2px;
    text-transform: capitalize;
  }
  
  .namePair{
    color: #333;
    font-size: 16px;
    font-weight: 500;
    margin-top: 5px;
  }
  
  .farmBtn{
    text-align: right;
    width: 20%;
  }
  
  .dropdownPanel{
    padding: 15px 10px;
    /* margin-top: 15px; */
    /* padding-top: 15px; */
    /* border-top: 1px solid #666; */
  }
`;

export default Style;
