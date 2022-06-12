import React, { useEffect } from "react";
import styled from "styled-components";
import ij from "../img/ven.png";
import { BsCartFill } from "react-icons/bs";
import { goThreeBars } from "react-icons/go";
import { BiSearch } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";

import { RiArrowDropDownLine } from "react-icons/ri";
import { AiFillCustomerService } from "react-icons/ai";
import { RiProductHuntFill } from "react-icons/ri";

import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../Globalstate/GlobalState";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.persistedReducer.user);

  useEffect(() => {}, []);

  return (
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
              <goThreeBars size="10px" />
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
          </Holder>
        ) : (
          <Sign to="/signup">Login</Sign>
        )}
      </Wrapper>
    </Container>
  );
};
export default Header;
// const Menu = styled.div``
// const Menu = styled.div``
// const Menu = styled.div``
// const Menu = styled.div``
const WrapIcon = styled(Link)`
  cursor: pointer;
`;
const Holder3 = styled.div`
  display: flex;
  align-items: center;
  width: 150px;
  justify-content: space-between;
  @media (max-width: 600px) and (min-width: 320px) {
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
const Icon4 = styled(BsCartFill)`
  height: 20px;
  width: 20px;
`;
const Icon3 = styled.div``;
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
  width: 340px;
  padding: 10px;
`;
const Icon = styled.div``;
const Search = styled.div`
  border: 1px solid lightgray;
  width: 400px;
  height: 40px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  padding: 0 10px;
`;
const SearchDiv = styled.div`
  /* width: 100px; */
  flex: 0.5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: red; */
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
    display: none;
  }
`;
const Logo = styled.div``;
const Wrapper = styled.div`
  width: 89%;

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
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  /* min-width: 100vw; */
  border-bottom: 1px solid gray;
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
