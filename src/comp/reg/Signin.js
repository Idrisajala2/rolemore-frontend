import React from "react";
import styled from "styled-components";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createUser } from "../Globalstate/GlobalState";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    email: yup.string().email().required("This field most not be empty"),
    password: yup.string().required("This field most not be empty"),
  });
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = handleSubmit(async (value) => {
    console.log(value);
    const { password, email } = value;
    const mainURL = "http://localhost:1101";
    const url = `${mainURL}/api/user/signin`;

    await axios.post(url, { email, password }).then((res) => {
      dispatch(createUser(res.data.data));
    });

    navigate("/home");
  });
  return (
    <Container>
      <Wrapper>
        <Box onSubmit={onSubmit}>
          <Uptextholder>
            <Imgholder>
              <Img src="/beauty.jpg" alt="" />
            </Imgholder>
            <Bigtxt>Welcome back</Bigtxt>
            <SmallText>Welcome back please enter your detail</SmallText>
          </Uptextholder>

          <InputHolder>
            <Input placeholder="Email" {...register("email")} />
          </InputHolder>

          <InputHolder>
            <Input
              placeholder="Password"
              type="password"
              {...register("password")}
            />
          </InputHolder>

          <OR>
            <B>Remember me for 30days</B>
            <C>forget password</C>
          </OR>
          <Button type="submit">Login</Button>

          <Butt>
            <AiOutlineGoogle size="17px" color="#004080" />
            <div>Signin with Google</div>
          </Butt>
          <Div>
            <H1>dont have an account</H1> <H2 to="/signup">sign up</H2>
          </Div>
        </Box>
        <Box1>
          <Div1>
            we've bein using Untitled to kick start every new project and cant
            imagin working without it.
          </Div1>
        </Box1>
      </Wrapper>
    </Container>
  );
};

export default Signin;
// const Div1 = styled.div``;
// const Div1 = styled.div``;
// const Div1 = styled.div``;
// const Div1 = styled.div``;
// const Div1 = styled.div``;
const C = styled.div`
  font-weight: bold;
`;
const Butt = styled.button`
  display: flex;
  margin-top: 15px;
  outline: none;
  border: 1px solid lightgray;
  font-size: 10px;
  border-radius: 3px;
  padding: 6px 58px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  :hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 350ms;
  }
  div {
    margin-left: 2px;
  }
`;
const SmallText = styled.div`
  font-size: 10px;
  color: silver;
  margin-top: 10px;
`;
const Bigtxt = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const Uptextholder = styled.div`
  height: 100px;
  margin-top: 30px;
  width: 220px;
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 100%;
`;
const Imgholder = styled.div`
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const Div1 = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  height: 150px;
  width: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  padding: 0 20px;
`;

const Box1 = styled.div`
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  height: 85%;
  width: 40%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-image: url("/bt.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const B = styled.div`
  color: gray;
`;

const OR = styled.div`
  margin-bottom: 20px;
  font-size: 9px;
  width: 190px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const H1 = styled.div`
  color: gray;
  font-size: smaller;
`;
const H2 = styled(Link)`
  font-weight: bold;
  color: black;
  text-decoration: none;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 350ms;
  }
`;

const Div = styled.div`
  margin-top: 10px;
  display: flex;
  width: 68%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
`;

const Button = styled.button`
  padding: 7px 95px;
  border-radius: 3px;
  outline: none;
  border: none;
  background-color: black;
  color: #fff;
  font-size: 12px;
  :hover {
    transform: scale(1.1);
    transition: all 350ms;
    cursor: pointer;
    color: orange;
  }
`;
const Input = styled.input`
  width: 85%;
  height: 50%;
  border: none;
  outline: none;
`;
const InputHolder = styled.div`
  height: 29px;
  width: 85%;
  border: 1px solid #eee;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
`;
const Box = styled.form`
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  height: 85%;
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 80%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  height: 600px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background: #232a34; */
  opacity: 0.9;
`;
