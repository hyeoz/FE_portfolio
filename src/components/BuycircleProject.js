import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import post from "../images/hwitter_post.png";
import login from "../images/hwitter_login.png";
import home from "../images/hwitter.png";
import mypage from "../images/hwitter_mypage.png";
import fb from "../images/firebase.png";
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

const BuycircleProject = () => {
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
          <img src={login} />
          <img src={home} />
          <img src={post} />
          <img src={mypage} />
        </StyledSlide>
        <InfoBlock>
          <li>
            <div style={{ display: "flex", padding: "auto" }}>
              <p>Creating With </p>
              <img src={js} style={{ width: "40px", height: "40px" }} />
              <img src={reactt} style={{ width: "40px", height: "40px" }} />
              <img src={fb} style={{ width: "40px", height: "40px" }} />
            </div>
          </li>
          <li>기본 기능 : 가계부와 SNS를 접목한 웹 애플리케이션입니다.</li>
          <li>
            상세 기능 : 상품에 대한 이야기, 가격, 구매 방법 및 사진과 태그를
            함께 업로드 할 수 있습니다. 업로드 한 포스트는 영수증 형태의
            레이아웃으로 표현됩니다.
          </li>
          <li>
            페이지 설명 : 초기 화면에서 계정 생성과 로그인이 가능합니다. 계정은
            일반 이메일 가입, 구글 계정 연동, 깃허브 계정 연동이 가능합니다.
            로그인 후에는 메인 화면에서 모든 포스팅을 5개 단위로 스크롤하여
            확인할 수 있습니다. 프로필 화면에서는 닉네임과 프로필 이미지를
            변경할 수 있으며 본인이 작성한 글과 랜덤한 다른 회원들의 프로필
            이미지를 확인할 수 있습니다.
          </li>
          <li>
            Github URL :{" "}
            <a href="https://github.com/hyeoz/buycircle_v2">
              https://github.com/hyeoz/buycircle_v2
            </a>
          </li>
          <a
            href="https://hyeoz.github.io/buycircle"
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

export default BuycircleProject;
