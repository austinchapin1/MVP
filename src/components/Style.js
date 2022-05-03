import styled from 'styled-components';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const NavButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: light-blue
`

export const NavBox = styled.div`
display: flex;
flex-direction: row;
@media (max-width: 768px) {
  flex-direction: column;
  background-color: green;
}
`

export const BB = styled.div`
  width: 80%;
  height: 80%;
  background-color: grey
`

export const MailModal = styled.div`
  z-index: auto;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width:100vw;
  background: rgba(0,0,0,.65);
`

export const Container = styled.div`
z-index:1000;
display: flex;
flex-direction: column;
position:fixed;
background: antiquewhite;
width: 33%;
height: 300px;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
border-radius: 10px;
padding: 0.75rem;
color: rgba(0,0,139, 0.5);
`;

export const FormInput = styled.input`
  font-family: "Proxima Nova", "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin-top: 3px;
  background-color: #f1f1f1;
  border: 1px solid black;
  font-size: 16px;
  line-height: 38px;
  min-height: 38px;
  padding-left: 12px;
  width: 100%;
`

export const Select = styled.select`
  font-family: "Proxima Nova", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 16px;
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;