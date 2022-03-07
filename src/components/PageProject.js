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
import { ArrowLeft, ArrowRight, Send } from "react-feather";

const Wrapper = styled.div`
  display: flex;
  margin: auto 0;
  font-family: "Gothic A1", sans-serif;
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
  width: 40%;
  margin-left: 10%;
  img {
    width: 300px;
  }
`;
const InfoBlock = styled.ul`
  padding: 10px;
  margin-left: 10%;
  border: 1px solid black;
`;

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <ArrowRight />
    </div>
  );
};
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <ArrowLeft />
    </div>
  );
};

const PageProject = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // arrow: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
          <img src={todo} />
          <img src={news} />
        </StyledSlide>
        <InfoBlock>
          <li>
            <div style={{ display: "flex", padding: "auto" }}>
              <p>Creating With </p>
              <img src={js} style={{ width: "40px", height: "40px" }} />
              <img src={reactt} style={{ width: "40px", height: "40px" }} />
              <img src={red} style={{ width: "40px", height: "40px" }} />
            </div>
          </li>
          <li>
            기본 기능 : 기본 브라우저 기능과 투두, 뉴스 기능을 더한 웹
            어플리케이션입니다.{" "}
          </li>
          <li>
            상세 기능 : 시간과 날짜, 날씨를 확인할 수 있고 투두기능에서 오늘의
            할 일을 체크할 수 있습니다. 또 News API 의 뉴스 정보를 확인할 수
            있습니다.
          </li>
          <li>
            페이지 설명 : 메인 화면에서는 기본 날짜와 시간을 확인할 수 있고 위치
            기반 정보를 허가하면 위치와 날씨 정보를 확인할 수 있습니다. 투두
            페이지에서는 하루의 할 일을 체크할 수 있으며 작성한 뒤 새로고침
            하거나 리렌더링이 되었을 때 자동으로 local storage 에 저장됩니다.
            이때 저장된 데이터가 하루가 넘으면 자동으로 삭제됩니다. 뉴스
            페이지에서는 각 카테고리 별 뉴스를 확인할 수 있습니다. 각 기사를
            클릭하면 원문으로 연결됩니다.
          </li>
          <li>
            Github URL :{" "}
            <a href="https://github.com/hyeoz/my-page">
              https://github.com/hyeoz/my-page
            </a>
          </li>
          <a
            href="https://hyeoz.github.io/my-page"
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

export default PageProject;
