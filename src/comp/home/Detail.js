import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
const Detail = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Contaner>
      <Wrapper>
        <FirstComp>
          <Left
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <BigImageHolder>
              <BigImg />
            </BigImageHolder>

            <SmallImgHolder>
              <Img src="/speak.jpg" />
              <Img src="/nice.png" />
              <Img src="/go.jpg" />
            </SmallImgHolder>
          </Left>
          <Right>
            <TextHolder>
              <Recent>RECENT PRODUCTS</Recent>
              <ProductNew>
                Black bluethooth <span>speaker</span>
              </ProductNew>
              <Details>
                <h4>Detail</h4>
                <div>
                  amet risus faucibus eum! Animi nisl elementum atque semper?
                  Pariatur lacus elit tortor aliquam omnis, non curabitur
                  expedita sapiente primis scelerisque, quasi. Massa pex, orci
                  tempora, urna fugit vulputate. Excepturi, pariatur aliqui
                  magni eligendi corrupti illo? Mollit facilisis itaque
                </div>
              </Details>
              <Price>
                $ 249.99 <span>/ $256.68</span>
              </Price>
              <Review></Review>
            </TextHolder>
            <ButtonsHolder>
              <Qutity>
                <div>Quantity</div>
                <Hd>
                  <div>-</div>
                  <div>2</div>
                  <div>+</div>
                </Hd>
              </Qutity>
              <Buttons>
                <Button1>ADD TO CART</Button1>
                <Button2>BUY NOW</Button2>
              </Buttons>
            </ButtonsHolder>
          </Right>
        </FirstComp>
      </Wrapper>
    </Contaner>
  );
};

export default Detail;

// const Contaner = styled.div``
// const Contaner = styled.div``
// const Contaner = styled.div``
// const Contaner = styled.div``
// const Contaner = styled.div``
// const Contaner = styled.div``
// const Contaner = styled.div``
// const Contaner = styled.div``
// const Contaner = styled.div``
// const Contaner = styled.div``
const Wrapper = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;
const Contaner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FirstComp = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  flex-wrap: wrap;
`;
const Hd = styled.div`
  display: flex;
  width: 80px;
  align-items: center;
  justify-content: center;
  font-weight: bold;

  /* button {
    padding: 3px 7px;
    font-size: 20px;
    background-color: transparent;
    border: 1px solid gray;
  } */
  div {
    border: 1px solid gray;
    padding: 6px 15px;
    :hover {
      cursor: pointer;
      transform: scale(1.05);
    }
  }
`;
const Button2 = styled.button`
  padding: 14px 69px;
  font-size: 12px;
  outline: none;
  border: 0;
  background-color: orange;
  color: #fff;
  cursor: pointer;
  :hover {
    transform: scale(1.05);
    transition: all 350ms;
  }
`;
const Button1 = styled.button`
  cursor: pointer;
  :hover {
    transform: scale(1.05);
    transition: all 350ms;
  }
  padding: 14px 50px;
  font-size: 12px;
  outline: none;
  background-color: transparent;
  border: 1px solid orange;
  color: orange;
  font-weight: bold;
`;
const Buttons = styled.div`
  margin-top: 110px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Qutity = styled.div`
  display: flex;
  width: 200px;
  align-items: center;
  justify-content: space-between;
  margin-top: 65px;
  font-size: 22px;
`;
const ButtonsHolder = styled.div``;
const Review = styled.div``;
const Price = styled.div`
  font-weight: bold;
  font-weight: 600;
  font-size: 25px;
  color: green;
  span {
    color: lightgrey;
    font-weight: 400;
  }
`;
const Details = styled.div`
  width: 600px;
  margin-bottom: 50px;
  h4 {
    font-size: 22px;
  }
  p {
    font-size: 20px;
    color: lightgrey;
    width: 590px;
  }
`;
const ProductNew = styled.div`
  font-size: 30px;
  font-weight: 700;
  span {
    color: orange;
  }
`;
const Recent = styled.div`
  font-size: 20px;
  color: darkorange;
  margin-bottom: 20px;
  font-weight: bold;
`;
const TextHolder = styled.div``;
const Img = styled.img`
  height: 220px;
  width: 220px;
  object-fit: contain;
  /* background-color: rgba(0, 0, 0, 1); */
`;
const SmallImgHolder = styled.div`
  width: 520px;
  display: flex;
  font-size: 30px;
  align-items: center;
  justify-content: space-between;
`;
const BigImg = styled.div`
  border-bottom: 5px;
`;
const BigImageHolder = styled.div`
  margin-bottom: 25px;
  border-radius: 10px;
  /* border: 1px solid lightgray; */
  height: 450px;
  width: 680px;
  /* background-color: rgba(0, 0, 0, 0.9); */
  background-image: url("/blue.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;
const Right = styled.div`
  height: 502px;
`;
const Left = styled.div``;
