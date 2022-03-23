import { GitHub, Send, Type } from "react-feather";
import styled from "styled-components";
import memoji from "../images/memoji.jpeg";

const Block = styled.div`
  background-color: #ffe599;
  /* border-bottom: 2px solid black; */
  width: 100%;
  text-align: center;
  padding-top: 40px;
  font-family: "Black Han Sans", sans-serif;
`;
const Introduce = styled.div`
  img {
    position: absolute;
    top: 12%;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1;
  }
  span {
    position: absolute;
    top: 20%;
    h3 {
      margin: 0;
      font-size: 300%;
    }
    .before_img {
      position: relative;
      left: -125%;
      /* top: 200%; */
    }
    .after_img {
      position: absolute;
      left: 25%;
      top: 0;
    }
  }
  p {
    position: absolute;
    top: 25%;
    left: 54%;
  }
`;
const Contact = styled.div`
  margin-top: 16rem;
  padding-bottom: 10px;

  h1,
  h3,
  p {
    margin: 0;
  }

  h1 {
    margin-top: 2rem;
    font-size: 2.5rem;
  }
  p {
    font-size: 1.5rem;
  }
  h3 {
    margin-top: 1rem;
  }
  div a {
    text-decoration: none;
    color: inherit;
    .tooltip {
      font-size: 1rem;
      background-color: rgba(0, 0, 0, 0.7);
      color: white;
      border-radius: 10px;
      /* border: 3px solid #0b5394; */
      padding: 5px;
      visibility: hidden;
      position: absolute;
      &.tooltip_mail {
        /* left: 42%; */
      }
      &.tooltip_github {
        /* left: 43.7%; */
      }
      &.tooltip_blog {
        /* left: 47%; */
      }

      &::after {
        content: "";
        position: absolute;
        top: -60%;
        left: 13%;
        border-width: 10px;
        border-style: solid;
        border-color: transparent transparent rgba(0, 0, 0, 0.7) transparent;
      }
    }
    &:hover {
      color: #e06666;
      .tooltip {
        visibility: visible;
      }
    }
  }
`;

const Info = ({ infoRef }) => {
  return (
    <Block ref={infoRef}>
      <Introduce>
        <img
          src={memoji}
          style={{
            width: "150px",
            borderRadius: "50%",
            border: "1px solid black",
            padding: "5px",
          }}
          alt="Profile_Image_Here"
        />
        <span>
          <h3 className="before_img">FRONTEND</h3>
          <h3 className="after_img">DEVELOPER</h3>
        </span>
        <p>...And Data Scientist</p>
      </Introduce>
      <Contact>
        <h1>이혜원 (LEE HYEWON)</h1>
        <p>
          웹 프론트엔드 개발을 공부하고 있습니다! 특기는 밤샘입니다 ;)
          <br /> 저에대해 더 알고싶으시다면 아래의 경로를 통해 연락해주세요,
          답장은 꽤 빠를지도?
        </p>

        <h3>Contact. </h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <a href="mailto:hyeoz0608@gmail.com">
            <Send size={35} />
            <p className="tooltip tooltip_mail">E-Mail 보내기</p>
          </a>
          <a href="https://github.com/hyeoz" target="_blank" rel="noreferrer">
            <GitHub size={35} />
            <p className="tooltip tooltip_github">Github 놀러가기</p>
          </a>
          <a href="https://hyeoz.tistory.com/" target="_blank" rel="noreferrer">
            <Type size={35} />
            <p className="tooltip tooltip_blog">블로그 놀러가기</p>
          </a>
        </div>
      </Contact>
    </Block>
  );
};

export default Info;
