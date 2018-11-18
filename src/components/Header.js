import React from 'react';
import styled from 'styled-components'
import Wrapper from '../Styles/Wrapper';

// style Starts here
const HeaderMain = styled.header`
  /* background: rgba(12,12,13,0.78); */
  background: black;
 .wrapper {
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding: 30px 0;
 }
 nav a ,div a{ 
   color: white;
   text-decoration: none;
   font-size: 1.6rem;
   color: red;
 }
 nav { 
   display: flex;
   width: 48%;
   justify-content: space-between;
 }
`
// style Ends here

const Header = (props) => {
  return (
    <>
      <HeaderMain>
        <Wrapper className="wrapper">
          <div><a href="..">Logo</a></div>
          <nav>
            <a href="..">Home</a>
            <a href="..">About</a>
            <a href="..">Menu</a>
            <a href="..">Gallery</a>
            <a href="..">Reservations</a>
            <a href="..">Location</a>
          </nav>
        </Wrapper>
      </HeaderMain>
    </>
  );
}

export default Header;