import styled from 'styled-components';

const Style = styled.div`

  .category{
    padding: ${props => props.theme.paddingStandard};
    background-color: #FFF;
    border-radius: 12px;
    margin-bottom: 20px;
  }
  
  .section{
    margin-bottom: 20px;
  }
  
  .sectionTitle{
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 5px;
  }

  .farmField{
    padding: 5px 0px;
  }
  
  .farmDesc{
    float: left;
    color: #666;
  }
  .farmNumbers{
    float: right;
    font-weight: bold;
  }
  
`;

export default Style;
