import styled from 'styled-components';
import Popup from 'reactjs-popup';

const PopupStyle = styled(Popup)`
  /* .popup-content{
    width: 350px !important;
  } */
  /* use your custom style for ".popup-content" */
  &-content {
    width: 610px !important;
  }
`;

export default PopupStyle;
