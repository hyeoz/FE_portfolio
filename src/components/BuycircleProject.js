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

const BuycircleProject = () => {
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
          <img src={login} alt="" />
          <img src={home} alt="" />
          <img src={post} alt="" />
          <img src={mypage} alt="" />
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
                    src={fb}
                    style={{ width: "40px", height: "40px" }}
                    alt=""
                  />
                </div>
              </div>
              <Connector
                href="https://hyeoz.github.io/buycircle/"
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
            <br /> 가계부와 SNS를 접목한 웹 애플리케이션입니다. 모바일 환경에
            맞추어 레이아웃을 설정하였습니다.
          </li>
          <li>
            상세 기능
            <br /> 상품에 대한 이야기, 가격, 구매 방법 및 사진과 태그를 함께
            업로드 할 수 있습니다. 업로드 한 포스트는 영수증 형태의 레이아웃으로
            표현됩니다.
          </li>
          <li>
            페이지 설명
            <br /> 초기 화면에서 계정 생성과 로그인이 가능합니다. 계정은 일반
            이메일 가입, 구글 계정 연동, 깃허브 계정 연동이 가능합니다. 로그인
            후에는 메인 화면에서 모든 포스팅을 5개 단위로 스크롤하여 확인할 수
            있습니다. 프로필 화면에서는 닉네임과 프로필 이미지를 변경할 수
            있으며 본인이 작성한 글과 랜덤한 다른 회원들의 프로필 이미지를
            확인할 수 있습니다.
          </li>
          <li>
            Github URL
            <br />{" "}
            <a href="https://github.com/hyeoz/buycircle_v2">
              https://github.com/hyeoz/buycircle_v2
            </a>
          </li>
        </InfoBlock>
      </Wrapper>
    </>
  );
};

export default BuycircleProject;
