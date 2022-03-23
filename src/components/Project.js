import styled from "styled-components";
import movie_project from "../images/movie_home.png";
import my_page_home from "../images/my_page_home.png";
import buycircle_home from "../images/hwitter_home.png";
import mm_home from "../images/mm_account.png";
import { PieChart } from "react-feather";
import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  /* display: grid;
  grid-template-columns: repeat(8, 1fr); */
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-family: "Staatliches", cursive;

  // style clear
  a {
    text-decoration: none;
    color: inherit;
  }

  .block .odd {
    justify-content: end;
  }
`;

const StyledSlide = styled(Slider)`
  /* border: 1px solid red; */
  padding: 10px;
  width: 60%;
  margin: auto 0;
  margin-left: 30px;
  margin-right: 30px;

  button.slick-prev::before {
    color: grey;
  }
  button.slick-next::before {
    color: grey;
  }
`;

const Block = styled(Link)`
  margin: auto;
  text-align: center;
  background-color: white;
  border: 1px solid #eeeeee;
  border-radius: 15px;
  width: 20%;
  height: 30rem;
  margin: 10px;
  box-shadow: 10px 10px 10px #eeeeee;
  overflow: hidden;
  transition: all 1s;

  &:hover {
    transform: scale(1.3);
    z-index: 999;
    box-shadow: 10px 10px 10px #bcbcbc;
    font-size: 1.5rem;
    transition: all 1s;
  }
`;
const PythonBlock = styled.a`
  margin: auto;
  text-align: center;
  border: 1px solid #eeeeee;
  border-radius: 15px;
  height: 30rem;
  margin: 10px;
  box-shadow: 10px 10px 10px #eeeeee;
  overflow: hidden;
  transition: box-shadow 0.3s;
  transition: width 1s;
  width: 10%;
  position: relative;
  /* grid-column: 7 / 8;
  grid-row: 2 / 3; */
  transition: all 1s;

  svg {
    position: absolute;
    top: 45%;
    left: 40%;
  }
  h1 {
    opacity: 0;
    font-size: 2rem;
    margin: 0;
    position: absolute;
    top: 30%;
  }
  &:hover {
    /* width: 15rem; */
    transform: scale(1.3);
    transition: all 1s;
    z-index: 999;

    h1 {
      opacity: 100;
    }
    svg {
      opacity: 0;
    }
  }
`;
const Contents = styled.div`
  /* display: flex; */
  img {
    width: 100%;
    transition: width 0.1s;
  }
`;
const Text = styled.div`
  /* border-top: 1px solid black; */
  padding: 1rem;
  h3 {
    color: #f39b79;
  }
`;

const Project = ({ projectRef }) => {
  return (
    <div ref={projectRef}>
      <h1
        style={{
          // position: "relative",
          // left: "10%",
          paddingLeft: "10%",
          fontFamily: "'Staatliches', cursive",
        }}
      >
        Project
      </h1>

      <Wrapper>
        <Block
          to="/mm_project"
          // style={{ gridColumn: "3/5", gridRow: "1/2" }}
          className="block odd"
        >
          <Contents>
            <img src={mm_home} alt="" />
            <Text>
              <h3>#JavaScript #React #Bootstrap #AWS #Firebase</h3>
              <p>Real estate brokerage Platform Admin Page</p>
            </Text>
          </Contents>
        </Block>

        <Block
          to="/buycircle"
          // style={{ gridColumn: "5/7", gridRow: "1/2" }}
        >
          <Contents>
            <img src={buycircle_home} alt="" />
            <Text>
              <h3>#JavaScript #React #Firebase #ReactHooks</h3>
              <p>
                {/* 트위터 클론코딩을 바탕으로 가계부와 SNS를 접목한 어플리케이션.
                작성한 포스팅은 영수증 형태의 레이아웃으로 확인할 수 있고,
                상품에 대한 본문과 사진, 가격, 결제 방식을 선택할 수 있음. */}
                Buycircle_Account Book & SNS
              </p>
            </Text>
          </Contents>
        </Block>
        <Block
          to="/my_page"
          // style={{ gridColumn: "5/7", gridRow: "2/3" }}
        >
          <Contents>
            <img src={my_page_home} alt="" />
            <Text>
              <h3>#JavaScript #React #ReactHooks #Redux</h3>
              <p>
                {/* 현재 시간과 날씨, 위치 정보를 확인할 수 있는 메인 페이지와 TODO
                페이지, 뉴스 페이지로 구성되어있는 어플리케이션. */}
                Time, Weather, TODO & News Application
              </p>
            </Text>
          </Contents>
        </Block>
        <Block
          to="/movie"
          // style={{ gridColumn: "3/5", gridRow: "2/3" }}
          className="block odd"
        >
          <Contents>
            <img src={movie_project} alt="" />
            <Text>
              <h3>#JavaScript #React #CSS #NodeJS #Axios</h3>
              <p>
                {/* yts.mx 의 영화 평점 API를 활용하여 특정 평점 이상 영화들의
                평점과 러닝타임, 장르, 줄거리 등의 정보를 확인할 수 있는
                어플리케이션. */}
                Movie Information Application
              </p>
            </Text>
          </Contents>
        </Block>
        <PythonBlock
          href="https://www.notion.so/Project-0975bb9dc65f47d59c2a43d452fa0518"
          target="_blank"
          className="python"
        >
          <h1>
            Another Data Analysis project is{" "}
            <span style={{ color: "#e06666" }}>Here!</span>
          </h1>
          <PieChart size={40} />
        </PythonBlock>
      </Wrapper>
    </div>
  );
};

export default Project;
