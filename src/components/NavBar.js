import { Archive, Mail, Monitor, Terminal } from "react-feather";
import styled from "styled-components";

const Wrapper = styled.header`
  background-color: #fff2cc;
  /* border: 1px solid grey; */
  display: flex;
  position: fixed;
  z-index: 1;
  width: 100%;
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
      color: #e06666;
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

const NavBar = ({ infoClick, projectClick, skillClick }) => {
  return (
    <Wrapper>
      <Logo>
        <Terminal size={30} />
        <h1>hyeoz</h1>
      </Logo>
      <Nav>
        <Text>
          <h1 onClick={infoClick}>Info</h1>
          <h1 onClick={projectClick}>Project</h1>
          <h1 onClick={skillClick}>Skill</h1>
        </Text>
        <Icon>
          <Mail onClick={infoClick} size={30} />
          <Monitor onClick={projectClick} size={30} />
          <Archive onClick={skillClick} size={30} />
        </Icon>
      </Nav>
    </Wrapper>
  );
};

export default NavBar;
