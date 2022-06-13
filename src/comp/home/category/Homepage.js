import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import pics from "../../imgs/blue.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../Globalstate/GlobalState";
import axios from "axios";
const Homepage = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState([]);
  const user = useSelector((state) => state.user);
  const product = useSelector((state) => state.persistedReducer.product);

  console.log(product);

  // const id = user._id;

  const onGetData = async () => {
    try {
      const mainRoute = "https://rolemore-back.herokuapp.com";
      const url = `${mainRoute}/api/item/all`;

      await axios.get(url).then((res) => {
        setGetData(res.data.data);
        dispatch(addProduct(res.data.data));
      });

      console.log(getData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  // useEffect(() => {

  // }, []);
  return (
    <div>
      <Container>
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
                <Detail>
                  <h4>Detail</h4>
                  <div>
                    amet risus faucibus eum! Animi nisl elementum atque semper?
                    Pariatur lacus elit tortor aliquam omnis, non curabitur
                    expedita sapiente primis scelerisque, quasi. Massa pex, orci
                    tempora, urna fugit vulputate. Excepturi, pariatur aliqui
                    magni eligendi corrupti illo? Mollit facilisis itaque
                  </div>
                </Detail>
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
          <SecondComp>
            <NewProdT>NEW PRODUCTS</NewProdT>
            <Related>Related Products</Related>
            <Pd>
              Excepturi, pariatur aliqui magni eligendi corrupti illo? Mollit
              facilisis itaque
            </Pd>
          </SecondComp>
          <TirLayer>
            {product?.map((props) => {
              return (
                <Holder key={props.id}>
                  <Pecent>Get up to 50% off Today Only</Pecent>
                  <PImageHolder>
                    <Pimg src={props.avatar} />
                  </PImageHolder>
                  <ProductNam>{props.description}</ProductNam>
                  <PPrice>
                    {props.Price}
                    <span>/$ 249.99</span>
                  </PPrice>
                </Holder>
              );
            })}
          </TirLayer>

          <Loader>
            <ButtonLoader>Load more Products</ButtonLoader>
          </Loader>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Homepage;

// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
const ButtonLoader = styled.button`
  padding: 10px 35px;
  border: 0;
  outline: none;
  background-color: #004080;
  color: #fff;
  border-radius: 3px;
  :hover {
    transform: scale(1.05);
    cursor: pointer;
    transition: all 350ms;
  }
`;
const Loader = styled.div`
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PPrice = styled.div`
  font-size: 15px;
  color: green;
  span {
    color: silver;
  }
`;
const ProductNam = styled.div`
  margin-top: 50px;
  font-weight: bold;
  font-size: 15px;
  span {
    color: green;
  }
`;
const Pimg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin-left: 20px;
`;
const PImageHolder = styled.div`
  height: 130px;
  width: 130px;
  /* object-fit: contain;
  background-image: url("/tv.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain; */
`;
const Pecent = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-left: 12px;
  margin-bottom: 19px;
  span {
    color: green;
  }
`;
const Holder = styled.div`
  padding: 10px;
  height: 290px;
  width: 250px;
  border: 1px solid silver;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;
const TirLayer = styled.div`
  display: flex;
  margin-top: 50px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
`;
const Pd = styled.div`
  text-align: center;
  width: 300px;
  font-size: smaller;
`;
const Related = styled.div`
  font-size: 30px;
  font-weight: 650;
`;
const NewProdT = styled.div`
  font-size: smaller;
  color: darkorange;
`;
const SecondComp = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const FirstComp = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  flex-wrap: wrap;
  padding: 10px;
  background-color: blue;
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
const Detail = styled.div`
  width: 600px;
  margin-bottom: 50px;
  h4 {
    font-size: 22px;
  }
  p {
    font-size: 20px;
    color: lightgrey;
    width: 590px;
    background-color: green;
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
  height: 200px;
  width: 200px;
  object-fit: contain;
  /* background-color: rgba(0, 0, 0, 1); */
`;
const SmallImgHolder = styled.div`
  width: 450px;
  display: flex;
  font-size: 30px;
  align-items: center;
  justify-content: space-between;
`;
const BigImg = styled.div`
  /* border-bottom: 5px; */
`;
const BigImageHolder = styled.div`
  margin-bottom: 25px;
  border-radius: 10px;
  /* border: 1px solid lightgray; */
  height: 450px;
  width: 520px;
  background-color: orange;

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
const Wrapper = styled.div`
  width: 93%;
  height: 80%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: green;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: green;

  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
