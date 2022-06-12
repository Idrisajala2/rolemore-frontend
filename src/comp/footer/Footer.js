import React from "react";
import styled from "styled-components";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { BiTime, BiLocationPlus } from "react-icons/bi";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Holder>
          <Box>
            <Icon />
            <Phone>-145-25874-02</Phone>
            <Name>Rolmore</Name>
          </Box>
          <Line />
        </Holder>
        <Holder>
          <Box>
            <Icon />
            <Phone>-145-25874-02</Phone>
            <Name>Rolmore</Name>
          </Box>
          <Line />
        </Holder>
        <Holder>
          <Box>
            <Icon1 />
            <Phone>133 lekki,face1 </Phone>
            <Name>mega estate</Name>
          </Box>
          <Line />
        </Holder>
        <Holder>
          <Box>
            <Icon2 />
            <Phone>info@gmail.com</Phone>
            <Name>surport@gmil.com</Name>
          </Box>
          <Line />
        </Holder>

        <Holder>
          <Box>
            <Icon3 />
            <Phone>mon:7:00-23.00</Phone>
            <Name>sun:07:00-16:00</Name>
          </Box>
          <Line />
        </Holder>
      </Wrapper>
    </Container>
  );
};

export default Footer;

// const Holder = styled.div``
// const Icon2 = styled.div``
// const Icon2 = styled.div``
// const Icon2 = styled.div``
// const Icon = styled.div``
const Icon3 = styled(BiTime)`
  color: darkorange;
  margin-bottom: 10px;
  font-size: 20px;
`;
const Icon2 = styled(AiOutlineMail)`
  color: darkorange;
  margin-bottom: 10px;
  font-size: 20px;
`;
const Icon1 = styled(BiLocationPlus)`
  color: darkorange;
  margin-bottom: 10px;
  font-size: 20px;
`;

const Holder = styled.div`
  display: flex;
  width: 120px;
  align-items: center;
  justify-content: space-between;
`;
const Line = styled.div`
  width: 1px;
  height: 70px;
  background-color: silver;
  margin: 0 4px;
`;
const Box = styled.div`
  color: white;
  font-size: smaller;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Phone = styled.div``;
const Icon = styled(AiOutlinePhone)`
  color: darkorange;
  margin-bottom: 10px;
  font-size: 20px;
`;
const Name = styled.div``;
const Container = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: Gray;
  margin-top: 50px;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
