import styled from 'styled-components'

const HeaderWrapper = styled.header`
  background-color: black;
  display: flex;
  padding: 1rem 0;
`
const Heading = styled.h2`
  color: white;
  font-size: 1rem;
  padding-left: 1rem;
  text-align: center;
  margin: auto;
`
const Logo = styled.img`
  display: block;
  width: 100px;
`

export { HeaderWrapper, Heading, Logo }
