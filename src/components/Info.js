import { GitHub, Send, Type } from "react-feather";
import styled from "styled-components";
import memoji from "../images/memoji.jpeg";

const Back = styled.div`
  background-color: #ffe599;
  /* border-bottom: 2px solid black; */
  text-align: center;
  padding-top: 40px;
  font-family: "Gothic A1", sans-serif;
`;
const Contact = styled.div`
  margin-top: 10px;
  padding-bottom: 10px;
  p {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Info = () => {
  return (
    <Back>
      <h1>LEE HYEWON</h1>
      <h3>FRONTEND DEVELOPER</h3>
      <img
        src={memoji}
        style={{
          width: "100px",
          borderRadius: "50%",
          border: "1px solid black",
          padding: "5px",
        }}
        alt="Profile_Image_Here"
      />
      <Contact>
        <a href="mailto:hyeoz0608@gmail.com">
          <Send size={25} />
        </a>
        <a href="https://github.com/hyeoz" target="_blank">
          <GitHub size={25} />
        </a>
        <a href="https://hyeoz.tistory.com/">
          <Type size={25} />
        </a>
      </Contact>
    </Back>
  );
};

export default Info;
