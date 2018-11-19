import styled from 'styled-components';

const Wrapper = styled.div`
/* Desktop  */
max-width: 900px;
margin: 0 auto;

 /* laptop */
 @media (max-width: 1030px){
  max-width: 924px;
  background: red;
  margin: 0 auto;
 }
`

export default Wrapper;