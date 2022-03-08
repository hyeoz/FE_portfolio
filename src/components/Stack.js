import styled from "styled-components";
import js from "../images/JavaScript_logo_2.svg.png";
import fb from "../images/firebase.png";
import aws from "../images/aws_logo_smile_1200x630.png";
import py from "../images/python-logo-master-v3-TM.png";
import ts from "../images/Typescript_logo_2020.svg.png";
import node from "../images/nodejs.png";
import reactt from "../images/images.png";
import gs from "../images/github.jpg";

const Wrapper = styled.div`
  /* background-color: #fce5cd; */
  display: grid;
  margin: 0 auto;
  /* margin-bottom: 20px; */
  text-align: center;
  justify-content: center;
  width: 400px;
  height: 400px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  span {
    /* border: 1px solid black; */
    border-radius: 20px;
    transition: box-shadow 0.5s;
    &:hover {
      box-shadow: 10px 10px 10px #bcbcbc;
    }
  }
  span:nth-child(1) {
    background-image: url(${js});
    background-size: 100%;
    grid-column: 1/3;
    grid-row: 1/3;
  }
  span:nth-child(2) {
    background-image: url(${fb});
    background-size: 90%;
    background-position: center;
    grid-column: 3/4;
    grid-row: 1/2;
  }
  span:nth-child(3) {
    background-image: url(${aws});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    grid-column: 3/4;
    grid-row: 2/3;
  }
  span:nth-child(4) {
    background-image: url(${py});
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    grid-column: 4/5;
    grid-row: 1/4;
  }
  span:nth-child(5) {
    background-image: url(${ts});
    background-size: 100%;
    grid-column: 1/2;
    grid-row: 3/4;
  }
  span:nth-child(6) {
    background-image: url(${node});
    background-size: 100%;
    background-position: center;
    grid-column: 1/2;
    grid-row: 4/5;
  }
  span:nth-child(7) {
    background-image: url(${reactt});
    background-size: 100%;
    background-position: center;
    grid-column: 2/4;
    grid-row: 3/5;
  }
  span:nth-child(8) {
    background-image: url(${gs});
    background-size: 100%;
    background-position: center;
    grid-column: 4/5;
    grid-row: 4/5;
  }
`;

const SkillStack = ({ skillRef }) => {
  return (
    <div ref={skillRef}>
      <h1
        style={{
          position: "relative",
          left: "10%",
          fontFamily: "'Staatliches', cursive",
        }}
      >
        Skill
      </h1>
      <Wrapper>
        <span>{/* <img src={js} /> */}</span>
        <span>{/* <img src={fb} /> */}</span>
        <span>{/* <img src={aws} /> */}</span>
        <span>{/* <img src={py} /> */}</span>
        <span>{/* <img src={ts} /> */}</span>
        <span>{/* <img src={node} /> */}</span>
        <span>{/* <img src={reactt} /> */}</span>
        <span>{/* <img src={gs} /> */}</span>
      </Wrapper>
    </div>
  );
};

export default SkillStack;
