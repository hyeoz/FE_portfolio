import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import news from "../images/my_page_news.png";
import todo from "../images/my_page_todo.png";
import home from "../images/my_page_home.png";
import red from "../images/redux_logo.png";
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

  /* height: 1rem; */

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

const PageProject = () => {
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
          <img src={todo} alt="" />
          <img src={news} alt="" />
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
                  <img
                    src={reactt}
                    style={{ width: "40px", height: "40px" }}
                    alt=""
                  />
                  <img
                    src={red}
                    style={{ width: "40px", height: "40px" }}
                    alt=""
                  />
                </div>
              </div>
              <Connector
                href="https://hyeoz.github.io/my_page/"
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
            기본 기능
            <br /> 기본 브라우저 기능과 투두, 뉴스 기능을 더한 웹
            어플리케이션입니다.{" "}
          </li>
          <li>
            상세 기능
            <br /> 시간과 날짜, 날씨를 확인할 수 있고 투두기능에서 오늘의 할
            일을 체크할 수 있습니다. 또 News API 의 뉴스 정보를 확인할 수
            있습니다.
          </li>
          <li>
            페이지 설명
            <br /> 메인 화면에서는 기본 날짜와 시간을 확인할 수 있고 위치 기반
            정보를 허가하면 위치와 날씨 정보를 확인할 수 있습니다. 투두
            페이지에서는 하루의 할 일을 체크할 수 있으며 작성한 뒤 새로고침
            하거나 리렌더링이 되었을 때 자동으로 local storage 에 저장됩니다.
            이때 저장된 데이터가 하루가 넘으면 자동으로 삭제됩니다. 뉴스
            페이지에서는 각 카테고리 별 뉴스를 확인할 수 있습니다. 각 기사를
            클릭하면 원문으로 연결됩니다.
          </li>
          <li>
            Github URL
            <br />{" "}
            <a href="https://github.com/hyeoz/my-page">
              https://github.com/hyeoz/my-page
            </a>
          </li>
        </InfoBlock>
      </Wrapper>
    </>
  );
};

export default PageProject;
