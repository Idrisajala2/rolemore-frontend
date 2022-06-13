import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ij from "../img/ven.png";
import { BsCartFill } from "react-icons/bs";
import { GoThreeBars, goThreeBars } from "react-icons/go";
import { BiSearch } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";

import { GiCancel } from "react-icons/gi";
import { AiFillCustomerService } from "react-icons/ai";
import { RiProductHuntFill } from "react-icons/ri";

import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../Globalstate/GlobalState";

const Header = () => {
  const [bar, setBar] = useState(false);
  const [state, setState] = useState(false);

  const menuBar = () => {
    setBar(!bar);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.persistedReducer.user);

  useEffect(() => {}, []);

  return (
    <>
      <Container>
        <Wrapper>
          <Holders to="/home">
            <Img src={ij} alt="think" />
            <Brand to="/">Rolemore</Brand>
          </Holders>
          {user ? (
            <Holder>
              <SearchDiv>
                <Search>
                  <Icon>
                    <BiSearch />
                  </Icon>
                  <Input placeholder="Search" />
                </Search>
              </SearchDiv>

              <Iconholder>
                <WrapIcon to="/post">
                  <AiOutlineUser size="30px" color="gray" />
                </WrapIcon>

                <WrapIcon to="/home">
                  <AiFillHome size="30px" color="gray" />
                </WrapIcon>

                <WrapIcon to="/about">
                  <AiFillCustomerService size="30px" color="gray" />
                </WrapIcon>

                <WrapIcon to="/home">
                  <AiOutlineShoppingCart size="30px" color="gray" />
                </WrapIcon>
                <WrapIcon to="/product">
                  <RiProductHuntFill size="30px" color="gray" />
                </WrapIcon>
              </Iconholder>

              <Holder3>
                <Profile>
                  <Icon2>
                    <img src={user?.avatar} />
                  </Icon2>
                </Profile>

                <Link to="/signIn">
                  <button
                    onClick={() => {
                      dispatch(signOut());
                      navigate("/signIn");
                    }}
                  >
                    Log Out
                  </button>
                </Link>
              </Holder3>
              <Goholder>
                <Icon3
                  id="bars"
                  size="40px"
                  onClick={() => {
                    document.getElementById("Slide").style.top = "0px";
                    document.getElementById("bars").style.display = "none";
                    document.getElementById("cancle").style.display = "block";
                  }}
                />
                <Icon4
                  id="cancle"
                  size="40px"
                  onClick={() => {
                    document.getElementById("Slide").style.top = "700px";
                    document.getElementById("bars").style.display = "block";
                    document.getElementById("cancle").style.display = "none";
                  }}
                  style={{ display: "none" }}
                />
              </Goholder>
            </Holder>
          ) : (
            <Sign to="/signup">Login</Sign>
          )}
        </Wrapper>
      </Container>
      <Slide
        id="Slide"
        onClick={() => {
          document.getElementById("Slide").style.top = "700px";
          document.getElementById("bars").style.display = "block";
          document.getElementById("cancle").style.display = "none";
        }}
      >
        <WrapIcon to="/product">
          <RiProductHuntFill size="30px" color="gray" />
        </WrapIcon>
      </Slide>
    </>
  );
};
export default Header;
// const Menu = styled.div``
// const Menu = styled.div``
// const Menu = styled.div``

const Slide = styled.div`
  overflow: hidden;
  width: 300px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  line-height: 3;
  color: #fff;
  position: fixed;
  left: 0px;
  top: 700px;
  transition: all 2s;
  z-index: 1;
  /* ::before{
        content: "";
        color: #fff;
    } */
`;
const Icon4 = styled(GiCancel)`
  height: 35px;
  width: 35px;
  color: silver;
`;
const Icon3 = styled(GoThreeBars)`
  width: 35px;
  height: 35px;
  color: silver;
`;
const Goholder = styled.div`
  width: 300px;
  /* margin-left: 0px; */
  align-items: center;
  justify-content: center;
  display: flex;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
const WrapIcon = styled(Link)`
  cursor: pointer;
  @media (max-width: 768px) and (min-width: 320px) {
    display: none;
  }
`;
const Holder3 = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  justify-content: space-between;
  @media (min-width: 768px) {
    display: none;
  }
`;
const Iconholder = styled.div`
  @media (max-width: 600px) and (min-width: 320px) {
    display: none;
  }
  @media (min-width: 768px) {
    padding: 20px;
  }
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Brand = styled(Link)`
  font-size: 30px;
  font-weight: 600;
  color: black;
  text-decoration: none;
`;
const Img = styled.img`
  height: 55px;
  width: 55px;
`;
const Holders = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
  @media (min-width: 768px) {
    padding: 10px;
  }
  :hover {
    transform: scale(1.03);
    transition: all 350ms;
    text-decoration: underline;
  }
`;

const Menu = styled.div`
  @media (min-width: 768px) {
    display: block;
  }
`;
const Sign = styled(Link)`
  text-decoration: none;

  font-weight: 600;
  color: black;
  font-size: 20px;
  :hover {
    cursor: pointer;
    transform: scale(1.04);
    transition: all 350ms;
    text-decoration: underline;
  }
`;

const Icon2 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  /* background-color: red; */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 100%;
  }
`;
const Cart = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
`;
const Help = styled(Link)`
  display: flex;
  text-decoration: none;
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: blue;
  color: yellow;
  border: 0;
  outline: none;
  border-radius: 5px;
`;
const Input = styled.input`
  border: 0;
  outline: none;
  width: 500px;
  padding: 10px;
`;
const Icon = styled.div``;
const Search = styled.div`
  border: 1px solid lightgray;
  width: 550px;
  height: 40px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  padding: 0 10px;
`;
const SearchDiv = styled.div`
  /* width: 100px; */
  /* flex: 0.5; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: red; */
  @media (max-width: 768px) {
    display: none;
  }
`;
const Holder = styled.div`
  /* flex: 0.4; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    cursor: pointer;
    padding: 7px 20px;
    color: white;
    background-color: orange;
    border-radius: 3px;
    border: none;
    outline: none;
  }

  @media (max-width: 800px) {
    /* display: none; */
  }
`;
const Logo = styled.div``;
const Wrapper = styled.div`
  width: 89%;
  /* background-color: green; */
  // @media (min-width: 320px) {

  // }

  display: flex;
  /* background-color: blue; */
  /* padding: 0 20px; */
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  width: 100%;
  /* background-color: yellow; */

  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  min-width: 100vw;
  border-bottom: 1px solid gray;
  z-index: 1;
  /* position: fixed; */
`;
// const Button = styled(Link)`
//   padding: 5px 25px;
//   outline: none;
//   border: 1px solid white;
//   background-color: orange;
//   color: #fff;
//   border-radius: 2px;
//   :hover {
//     background-color: orange;
//     cursor: pointer;
//     transform: scale(1.1);
//     transition: all 350ms;
//   }
//   text-decoration: none;
//   color: white;
// `;
