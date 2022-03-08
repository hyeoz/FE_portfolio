import { LogOut } from "react-feather";
import { useNavigate } from "react-router";
import styled from "styled-components";

const StyledBtn = styled.button`
  font-family: "Cairo", sans-serif;
  font-size: 1rem;
  margin: auto 0;
  position: absolute;
  top: 10px;
  right: 10px;
  /* border: 2px solid #fff2cc; */
  background-color: inherit;
  border: 0;
  border-radius: 5px;
  h2 {
    margin: 0;
  }
  svg {
    margin: auto 0;
  }
  &:hover {
    /* box-shadow: 3px 3px 3px #bcbcbc; */
    color: #e06666;
  }
`;

const StyledButton = () => {
  const navigator = useNavigate();

  return (
    <StyledBtn
      style={{ marginBottom: "10px", display: "flex" }}
      onClick={() => navigator(-1)}
    >
      <LogOut size={30} />
      <h2>BACK</h2>
    </StyledBtn>
  );
};

export default StyledButton;
