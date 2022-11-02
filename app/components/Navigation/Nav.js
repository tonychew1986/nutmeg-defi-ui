import styled from 'styled-components';

const Nav = styled.div`
  /* position: fixed;
  background-color: #fff; */
  /* height: 80px;
  width: 100%;
  z-index: 999;
  border-bottom: 1px solid #DDD; */
  
  .svgLogo img{
    width: 130px;
  }

  .navLeft{
    float: left;
    padding: 15px 25px;
  }
  
  .navLeftLogo{
    float: left;
    width: 140px;
    padding-right: 20px;
  }

  .navRight{
    float: right;
    padding: 10px 40px;
  }
  
  .navRightUser{
    float: left;
    background-color: #EEE;
    padding: 16px 0px;
    padding-right: 25px;
    padding-top: 17px;
  }
  
  .walletConnect{
    float: left;
  }
  
  .walletConnect button{
    border: 1px solid ${props => props.theme.gold};
    background: rgba(0,0,0,0.1);
    color: ${props => props.theme.gold};
    font-weight: bold;
    margin-top: -5px;
  }
  
  .balance{
    float: left;
    padding-right: 20px;
    margin-top: 18px;
    font-size: 18px;
  }
  
  .balanceNum{
    padding-right: 5px;
  }
  
  .balanceUnit{
    font-weight: bold;
  }
  
  .network{
    float: left;
    padding: 10px 20px;
    background-color: #333;
    border-radius: 4px;
    color: #FFF;
    margin: 10px 15px;
    text-transform: uppercase;
    font-size: 12px;
  }
  
  .address{
    float: left;
    border: 2px solid ${props => props.theme.gold};
    border-radius: 12px;
    padding: 10px 20px;
    font-size: 14px;
    margin-top: 7px;
    color: ${props => props.theme.gold};
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export default Nav;
