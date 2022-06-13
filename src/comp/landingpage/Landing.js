import React, { useEffect } from "react";
import styled from "styled-components";
import ig from "../img/landing.jpg";
// import vid from "../img/watch.mp4";
import AOS from "aos";
import "aos/dist/aos.css";
import lv from "../imgs/btn.jpg";
import { Link } from "react-router-dom";
const Landing = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Container>
      <Wrapper>
        <Content data-aos="fade-up">
          <Maquee>
            20 % off on <span>anything</span>
          </Maquee>
          <Description>
            dignissim similique commodi arcu suspendisse sint, porro, sapiente,
            consectetuer dignissim, labore.interdum, tincidunt eros hymenaeos
            nibh torquent ad aptent! Nonummy voluptas repudiandae. Nostrud rerum
            tortor cumque ad commodo
          </Description>

          <Button to="/signup">Get Started</Button>
        </Content>
        <ImgHolder data-aos="zoom-in-up">
          <Img src={lv} alt="pix" />
        </ImgHolder>
      </Wrapper>
    </Container>
  );
};

export default Landing;

// const Div = styled.div``
const Container = styled.div`
  width: 100%;
  height: calc(100vh -80px);
  /* min-height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.9);
  background-position: center;
  background-size: cover;
`;
const Wrapper = styled.div`
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
  width: 85%;
  min-height: 100vh;
  // height: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div`
  /* display: flex; */
  height: 500px;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;
const Maquee = styled.h1`
  span {
    color: orange;
  }
  height: 100px;
  color: white;
  width: 450px;
  font-weight: bold;
  font-size: 40px;
`;
const Description = styled.div`
  height: 130px;
  width: 600px;
  color: white;
  height: 190px;
  font-size: 20px;
`;
const Button = styled(Link)`
  padding: 14px 50px;
  background-color: orange;
  border: none;
  outline: none;
  color: white;
  border-radius: 3px;
  text-decoration: none;
  font-size: 25px;
  :hover {
    transform: scale(1.1);
    transition: all 350ms;
    cursor: pointer;
  }
`;
const ImgHolder = styled.div`
  width: 550px;
  height: 650px;
  border-radius: 20px;
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  border-radius: 10px;
`;
