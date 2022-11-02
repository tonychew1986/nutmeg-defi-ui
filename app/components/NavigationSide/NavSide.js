import styled from 'styled-components';

const NavSide = styled.div`
  position: fixed;
  padding: 0px 0px;
  background-color: #fff;
  width: 220px;
  height: 100%;
  padding-top: 20px;
  z-index: 900;
  border-right: 1px solid #DDD;
  
  .logo{
    padding-bottom: 20px;
    padding-left: 20px;
  }
  
  .svgLogo img{
    width: 130px;
  }
  
  .navSideEntry{
    cursor: pointer;
    padding: 20px 30px;
    width: 220px;
    height: 70px;
  }
  
  .navSideEntry img{
    width: 24px;
    height: 24px;
  }
  
  .navSideEntry:hover{
    background-color: #eee;
  }
  
  .navSideEntrySelected{
    background-color: #EEE !important;
    border-right: 6px solid #DDD;
  }
  
  .icon{
    float: left;
    padding-right: 12px;
    opacity: 0.8;
  }
  
  .iconText{
    float: left;
    font-size: 14px;
    opacity: 0.8;
    margin-top: 4px;
    text-transform: uppercase;
    font-weight: 500;
  }
`;

export default NavSide;
