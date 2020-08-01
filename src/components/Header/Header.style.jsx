import styled from 'styled-components';

export const NavLinks = styled.div`
background:grey;
display:flex;
/* height:50px; */
justify-content:space-evenly;
`
export const Links = styled.button`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 10px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  font-family: fantasy;
  font-size:1.5rem;
  ${props => props.primary && `
    background: white;
    color: black;
  `}
`
