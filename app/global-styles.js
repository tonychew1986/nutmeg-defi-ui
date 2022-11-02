import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    // font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    position: relative;
    padding-bottom: 6rem;
    min-height: 100%;
  }

  body.fontLoaded {
    // font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
  a{
    color: inherit;
    text-decoration: inherit;
  }

  #app {
    background-color: ${props => props.theme.pale};
    min-height: 100%;
    // min-width: 100%;
    min-width: 900px;
  }

  // p,
  // label {
  //   font-family: Georgia, Times, 'Times New Roman', serif;
  //   line-height: 1.5em;
  // }

  .page{
    // max-width: 1200px;
    width: calc(100% - 70px);
    // margin: auto;
    // padding: 0px 0px;
    overflow: auto;
    min-height: 700px;
    padding-top: 0px;
    padding-left: 230px;
    
    margin: 0 auto;
    // width: 94%;
    padding-bottom: 50px;
  }
  
  .pagePadTop{
    padding-top: 150px;
  }
  
  .hide{
    display: none;
  }
  
  .clear{
    clear: both;
  }
  
  .pageName{
    // background-color: #023e8a;
    // color: white;
    border-bottom: 3px dotted #023e8a;
    color: #023e8a;
    padding: 10px 0px;
    display: inline-block;
    font-size: 14px;
    margin-bottom: 20px;
    // border-radius: 4px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 2px;
  }
  
  .disclaimer{
    font-size: 11px;
    padding: 10px 0px;
  }
  
  .num{
    font-family: ${props => props.theme.fontNumber} !important;
  }
  
  button{
    padding: ${props => props.theme.paddingSmall};
    // background-color: #ff7b00;
    // background-color: #a58c28;
    background-color: ${props => props.theme.buttonBackgroundColor};
    
    border: none;
    margin: 8px 0px;
    color: ${props => props.theme.buttonColor};
    border-radius: 12px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 1px;
  }
  
  button:hover{
    background-color: ${props => props.theme.buttonHoverBackgroundColor};
  }
  
  button.error{
    background-color: ${props =>
    props.theme.buttonErrorBackgroundColor} !important;
  }
  button.error:hover{
    background-color: ${props =>
    props.theme.buttonErrorHoverBackgroundColor} !important;
  }
  
  button.mini{
    padding: 10px 20px;
    font-size: 14px;
    background-color: #9c6644;
  }
  
  button.complete{
    background-color: #AAA;
  }
  
  button.pending{
    background-color: #AAA;
    border: none;
  }
  
  button.hero{
    border-radius: 20px;
    font-size: 15px;
    padding: 12px 20px;
    text-transform: uppercase;
    letter-spacing: 0.2px;
    width: 150px;
  }
  
  button.full{
    // border-radius: 20px;
    font-size: 15px;
    padding: 12px 20px;
    text-transform: uppercase;
    letter-spacing: 1px;
    width: 100%;
  }
  
  .disabled{
    opacity: 0.5;
    pointer-events: none;
  }
  
  .popupContent{
    padding: ${props => props.theme.paddingPopup};
    width: 600px;
  }
  
  .popupContentFixed{
    padding: ${props => props.theme.paddingPopup};
    height: 600px;
    overflow-y: scroll;
  }
  
  .popupContentSmall{
    width: 350px;
    height: 500px;
  }
  
  .wallet{
    float: left;
    width: calc(50% - 10px);
    border: 1px solid #BBB;
    border-radius: 2px;
    padding: ${props => props.theme.paddingStandard};
    min-height:100px;
    margin: 5px;
    text-align: center;
    cursor: pointer;
  }
  
  .wallet:hover{
    border: 1px solid #666;
  }
  
  .walletLogo{
    height: 50px;
  }
  
  .walletName{
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    padding-top: 15px;
  }
  
  .popup-content{
    position: relative;
    min-width: 200px !important;
    z-index: 99999;
    // background-color: #FDCA70 !important;
  }
`;

export default GlobalStyle;
