import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import detail from "../images/movie_detail.png";
import loading from "../images/movie_loading.png";
import home from "../images/movie_home.png";
import node from "../images/nodejs.png";
import reactt from "../images/images.png";
import js from "../images/JavaScript_logo_2.svg.png";
import { Send } from "react-feather";

const Wrapper = styled.div`
  display: flex;
  margin: auto 0;
  font-family: "Gothic A1", sans-serif;

  // style clear
  a {
    text-decoration: none;
    color: inherit;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;
const StyledSlide = styled(Slider)`
  width: 70%;
`;
const InfoBlock = styled.ul`
  padding: 10px;
  margin-left: 20px;
  border: 1px solid black;
`;

const MovieProject = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
  };
  return (
    <>
      <button style={{ marginBottom: "10px", display: "block" }}>
        <a href="/">HOME</a>
      </button>
      {/* 1. 사진 슬라이드 구현 2. 사용 기술 스택 이미지 3. 상세한 기능 설명 4.배포된 주소 연결 */}
      <Wrapper>
        <StyledSlide {...settings}>
          <img src={home} />
          <img src={detail} />
          <img src={loading} />
        </StyledSlide>
        <InfoBlock>
          <li>
            <div style={{ display: "flex", padding: "auto" }}>
              <p>Creating With </p>
              <img src={js} style={{ width: "40px", height: "40px" }} />
              <img src={reactt} style={{ width: "40px", height: "40px" }} />
              <img src={node} style={{ width: "40px", height: "40px" }} />
            </div>
          </li>
          <li>
            기본 기능 : yts.mx API 를 이용하여 특정 평점 이상에 해당하는 영화의
            정보를 확인하는 웹 애플리케이션입니다.
          </li>
          <li>
            상세 기능 : 영화의 포스터와 개봉 년도, 장르, 러닝타임 및 줄거리를
            확인할 수 있습니다.
          </li>
          <li>
            페이지 설명 : 각 영화를 클릭하면 상세 페이지로 넘어갈 수 있습니다.
            API 로딩시에는 로딩 페이지를 확인할 수 있습니다.
          </li>
          <li>
            Github URL :{" "}
            <a href="https://github.com/hyeoz/react-movie-page">
              https://github.com/hyeoz/react-movie-page
            </a>
          </li>
          <a
            href="https://hyeoz.github.io/react-movie-page/"
            style={{ fontSize: "1.5rem", margin: "auto 0", color: "#999999" }}
          >
            <Send size={30} />
            Click HERE to Explore the Page!
          </a>
        </InfoBlock>
      </Wrapper>
    </>
  );
};

export default MovieProject;
