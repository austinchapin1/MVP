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


export const ModalBackGround = styled.div`
  z-index: auto;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width:100vw;
  background: rgba(0,0,0,.65);
`

// export const Replies = styled.div`


// `


export const Container = styled.div`
z-index:1000;
display: flex;
flex-direction: column;
align-items: center;
position:fixed;
background: #f1f1f1;
min-width: 80vw;
min-height: 80vw;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
border-radius: 10px;
padding: 0.75rem;
color: rgba(0,0,1, 0.5);
max-height: 90%;

@media (min-width: 40em) {
  min-width: 80vw;
  min-height: 40vw;
  max-height: 90%;
}

@media (min-width: 80em) {
  min-width: 40vw;
  min-height: 40vh;
  max-height: 90%;
}
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
  ::placeholder {
    color: grey;
  }
`

export const TextBody = styled.textarea`
  font-family: "Proxima Nova", "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin: 30px auto;
  background-color: #f1f1f1;
  border: 1px solid black;
  font-size: 16px;
  line-height: 38px;
  min-height: 20vh;
  padding-left: 12px;
  width: 100%;
  ::placeholder {
    color: grey;
  }
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
  min-height: 6vh;

  option {
    color: grey;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

export const PostContainer = styled.div`

  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 100px 50px 100px;
  golumn-gap: 20px;
  row-gap: 20px;
  justify-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    background-color: green;
  }
`

export const PostWrapper = styled.div`
  justify-self: center;
  margin: 20 20 20 20px;
`

// export const PostWrapper = styled.div`
//   display: flex;
//   gap: 0.25rem;
//   padding: 0.25rem;
//   align-items: center;
//   grid-area: content;
//   justify-content: center;
// `;

// export const PostStatWrapper = styled.div`
//   grid-area: stats;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   grid-template-rows: 1fr;

//   border-radius: 15px;
//   background: white;
// `;

export const PostTextBody = styled.p`
  color: grey;
  font-size: 40px;
  font-weight: 300;
`;

export const Separator = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;