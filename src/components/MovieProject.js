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
import { Link } from "react-feather";
import StyledButton from "./Button";

const Wrapper = styled.div`
  display: flex;
  margin: auto 0;
  margin-top: 2.5rem;
  /* font-family: "Noto Sans KR", sans-serif; */
  font-family: "Do Hyeon", sans-serif;

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
const InfoBlock = styled.ul`
  margin-left: 10px;
  padding: 30px;
  /* border-left: 1px solid #eeeeee; */
  list-style: none;
  li {
    font-size: 1.3rem;
    margin-bottom: 5px;
    a {
      color: #073763;
    }
    &::before {
      content: "❗️";
    }
    &:first-child {
      margin-bottom: 10px;
      &::before {
        content: "";
      }
    }
    &:last-child {
      margin-bottom: 10px;
    }
  }
`;
const Connector = styled.a`
  .tooltip {
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    border-radius: 10px;
    /* border: 3px solid #0b5394; */
    padding: 5px;
    visibility: hidden;
    position: absolute;
    right: 20px;

    &::after {
      content: "";
      position: absolute;
      top: -60%;
      right: 10%;
      border-width: 10px;
      border-style: solid;
      border-color: transparent transparent rgba(0, 0, 0, 0.7) transparent;
    }
  }
  &:hover {
    color: #0b5394;
    .tooltip {
      visibility: visible;
    }
  }
`;

const MovieProject = () => {
  return (
    <>
      <StyledButton />
      {/* 1. 사진 슬라이드 구현 2. 사용 기술 스택 이미지 3. 상세한 기능 설명 4.배포된 주소 연결 */}
      <Wrapper>
        <StyledSlide
          dots
          infinite
          speed="500"
          arrows
          autoplay="true"
          autoplaySpeed="100"
        >
          <img src={home} alt="" />
          <img src={detail} alt="" />
          <img src={loading} alt="" />
        </StyledSlide>
        <InfoBlock>
          <li>
            <div
              style={{
                display: "flex",
                padding: "auto",
                paddingRight: "1rem",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex" }}>
                <div>
                  <img
                    src={js}
                    style={{ width: "40px", height: "40px" }}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={reactt}
                    style={{ width: "40px", height: "40px" }}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={node}
                    style={{ width: "40px", height: "40px" }}
                    alt=""
                  />
                </div>
              </div>
              <Connector
                href="https://hyeoz.github.io/react-movie-page/"
                target="_blank"
              >
                <Link size={40} style={{ padding: "auto 0" }} />
                <p className="tooltip">
                  클릭하면 해당 애플리케이션으로 연결됩니다!
                </p>
              </Connector>
            </div>
          </li>
          <li>
            기본 기능 <br /> yts.mx API 를 이용하여 특정 평점 이상에 해당하는
            영화의 정보를 확인하는 웹 애플리케이션입니다.
          </li>
          <li>
            상세 기능
            <br /> 영화의 포스터와 개봉 년도, 장르, 러닝타임 및 줄거리를 확인할
            수 있습니다.
          </li>
          <li>
            페이지 설명
            <br /> 각 영화를 클릭하면 상세 페이지로 넘어갈 수 있습니다. API
            로딩시에는 로딩 페이지를 확인할 수 있습니다.
          </li>
          <li>
            Github URL
            <br />{" "}
            <a href="https://github.com/hyeoz/react-movie-page">
              https://github.com/hyeoz/react-movie-page
            </a>
          </li>
        </InfoBlock>
      </Wrapper>
    </>
  );
};

export default MovieProject;
