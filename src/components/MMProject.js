import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import account from "../images/mm_account.png";
import billing from "../images/mm_billing.png";
import propose from "../images/mm_propose.png";
import fb from "../images/firebase.png";
import aws from "../images/aws_logo_smile_1200x630.png";
import reactt from "../images/images.png";
import js from "../images/JavaScript_logo_2.svg.png";
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

const MMProject = () => {
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
          <img src={account} alt="" />
          <img src={billing} alt="" />
          <img src={propose} alt="" />
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
                    src={fb}
                    style={{ width: "40px", height: "40px" }}
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src={aws}
                    style={{ width: "40px", height: "40px" }}
                    alt=""
                  />
                </div>
              </div>
              {/* <Connector
                href="https://hyeoz.github.io/react-movie-page/"
                target="_blank"
              >
                <Link size={40} style={{ padding: "auto 0" }} />
                <p className="tooltip">
                  클릭하면 해당 애플리케이션으로 연결됩니다!
                </p>
              </Connector> */}
            </div>
          </li>
          <li>
            기본 기능 <br /> 부동산 중개 플랫폼의 관리자 페이지 입니다.
          </li>
          <li>
            상세 기능
            <br /> 중개인의 상세 정보와 결제 정보, 중개 제안 정보를 확인할 수
            있습니다.
          </li>
          <li>
            페이지 설명
            <br /> 중개인의 프로필을 확인하고 수정할 수 있으며, 지금까지의 결제
            정보, 현재 매매 제안 현황을 확인할 수 있습니다.
          </li>
          <li>
            Github URL
            <br /> 서비스 예정인 어플리케이션이기 때문에 레포지토리는 공개되지
            않습니다.
          </li>
        </InfoBlock>
      </Wrapper>
    </>
  );
};

export default MMProject;
