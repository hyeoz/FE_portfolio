import { Archive, Mail, Monitor, Terminal } from "react-feather";
import styled from "styled-components";

const Wrapper = styled.header`
  background-color: #fff2cc;
  /* border: 1px solid grey; */
  display: flex;
  position: fixed;
  width: 99%;
  margin: auto 0;
  font-family: "Staatliches", cursive;
  // style clear
  a {
    text-decoration: none;
    color: inherit;
  }
  h1 {
    margin: auto 0;
  }
  list-style-type: none;

  svg {
    margin: auto 0;
  }
`;
const Logo = styled.a`
  display: flex;

  svg {
    margin: auto 0;
  }
  h1 {
    margin: 0;
  }
`;
const Nav = styled.nav`
  margin-top: 3px;
`;
const Text = styled.div`
  z-index: 2;
  display: flex;
  position: absolute;
  right: 0.5rem;

  h1 {
    margin-left: 1rem;
    &:hover {
      color: red;
      cursor: pointer;
    }
  }
  @media (max-width: 768px) {
    opacity: 0;
  }
`;
const Icon = styled.div`
  display: flex;
  z-index: 1;
  position: absolute;
  right: 3px;
  opacity: 0;

  svg {
    position: relative;
    &:hover {
      color: red;
    }
  }
  @media (max-width: 768px) {
    opacity: 100;
  }
`;

const NavBar = () => {
  return (
    <Wrapper>
      <Logo>
        <Terminal size={30} />
        <h1>hyeoz</h1>
      </Logo>
      <Nav>
        <Text>
          <h1>Info</h1>
          <h1>Project</h1>
          <h1>Skill</h1>
        </Text>
        <Icon>
          <Mail size={30} />
          <Monitor size={30} />
          <Archive size={30} />
        </Icon>
      </Nav>
    </Wrapper>
  );
};

export default NavBar;
