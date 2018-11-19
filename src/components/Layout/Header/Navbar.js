import React from 'react';
import styled from 'styled-components'
import Wrapper from '../../../Styles/Wrapper';


const NavWrapper = styled.div`
 background: transparent;
 position: absolute;
 z-index: 1001;
 width: 100%;
 top: 0;
  left: 0;
 .wrapper {
  display: flex;
  justify-content:space-between;
  align-items: center;
  padding: 20px 0;
 }
 nav a ,div a{ 
  color: #F0F0EF;
   text-decoration: none;
   font-family:'Open-sans',sans-serif;
   &:hover { 
     color: #c0a756;
   }
 }
 nav { 
   display: flex;
   justify-content: space-between;
   width: 58%;
   @media (max-width: 1030px){  
     width: 43%;
   }
   a { 
     text-transform: uppercase;
     font-size: 1.35rem;
    @media (max-width: 1030px){  
     font-size: 1.1rem;
    }
   }
   .nav__active { 
     color:#c0a756;
   }
 }
 .navbar__content-overlay { 
  background:rgba(0,0,0,0.60);
 }
 .navbar__logo { 
   font-size: 3.5rem;
   color: #c0a756;
   font-family: 'Lobster', cursive;
   font-weight: 100;
   letter-spacing: 3px;
 }
`
// style Ends here

const Navbar = (props) => {
  return (
    <>
      {/* Header starts Here Navbar */}
      <NavWrapper>
        <div className="navbar__content-overlay">
          <Wrapper className="wrapper">
            <div>
              <a href="logo" className="navbar__logo">
                Miranda
              </a>
            </div>
            <nav>
              <a href=".." className="nav__active">Home</a>
              <a href="..">About</a>
              <a href="..">Menu</a>
              <a href="..">Gallery</a>
              <a href="..">Reservations</a>
              <a href="..">Location</a>
            </nav>
          </Wrapper>
        </div>
      </NavWrapper>
      {/* Header Ends Here Here Navbar */}
    </>
  );
}

export default Navbar;