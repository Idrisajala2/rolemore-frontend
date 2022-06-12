import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import axios from "axios";
import * as yup from "yup";

const Signup = () => {
  const [image, setImage] = useState("");
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();
  const formSchema = yup.object().shape({
    fullName: yup.string().required("This field most not be empty"),
    email: yup.string().email().required("This field most not be empty"),
    password: yup.string().required("This field most not be empty"),
    confirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must match"),
  });
  const config = {
    "content-type": "multipart/form-data",
    onUploadProgress: (ProgressEvent) => {
      const { loaded, total } = ProgressEvent;
      const percent = Math.floor((loaded * 100) / total);
      console.log(percent);
    },
  };
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleImage = (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);
    setAvatar(file);
  };
  const onSubmit = handleSubmit(async (value) => {
    console.log(value);
    const { userName, password, email } = value;
    const mainURL = "http://localhost:1101";
    const url = `${mainURL}/api/user/register`;

    const formData = new FormData();
    formData.append("fullName", userName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar);

    await axios.post(url, formData, config).then((res) => {
      console.log("Data: ", res);
    });

    navigate("/signin");
  });

  return (
    <Container>
      <Wrapper>
        <Box1>
          <Div1>
            we've bein using Untitled to kick start every new project and cant
            imagin working without it.
          </Div1>
        </Box1>
        <Box onSubmit={onSubmit} type="multipart/form-data">
          <ImageHolder>
            <Image src={image} />
            <ImageLabel htmlFor="pix">Upload your Image</ImageLabel>
            <ImageInput
              id="pix"
              onChange={handleImage}
              type="file"
              accept="image/*"
            />
          </ImageHolder>
          <Uptextholder>
            <Bigtxt>Welcome back</Bigtxt>
            <SmallText>Welcome back please enter your detail</SmallText>
          </Uptextholder>
          <InputHolder>
            <Input placeholder="userName" {...register("fullName")} />
          </InputHolder>

          <InputHolder>
            <Input placeholder="Email" {...register("email")} />
          </InputHolder>

          <InputHolder>
            <Input placeholder="password" {...register("password")} />
          </InputHolder>

          <InputHolder>
            <Input placeholder="confirm" {...register("confirm")} />
          </InputHolder>
          <OR>
            <B>Remember me for 30days</B>
            <C>forget password</C>
          </OR>
          <Button type="submit">create account</Button>

          <Butt>
            <AiOutlineGoogle size="17px" color="#004080" />
            <div>Signin with Google</div>
          </Butt>
          <Div>
            <H1>dont have an account</H1> <H2 to="/signin">sign in</H2>
          </Div>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Signup;
// const Div1 = styled.div``;
// const Div1 = styled.div``;
// const Div1 = styled.div``;
const ImageInput = styled.input`
  display: none;
`;

const ImageLabel = styled.label`
  padding: 10px;
  /* background-color: #004080; */
  color: black;
  border-radius: 3px;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;

const ImageHolder = styled.div`
  width: 200px;
  height: 70px;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
  background-color: gray;
  /* margin-bottom: 5px; */

  transition: all 350ms;
  :hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
// const Img = styled.img``;
// const Imgholder = styled.div``;
const C = styled.div`
  font-weight: bold;
`;
const Butt = styled.button`
  display: flex;
  margin-top: 15px;
  outline: none;
  border: 1px solid lightgray;
  font-size: 15px;
  font-weight: bold;
  border-radius: 3px;
  padding: 14px 150px;
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
  font-size: 20px;
  color: silver;
  margin-top: 10px;
  width: 400px;
`;
const Bigtxt = styled.div`
  font-size: 27px;
  font-weight: bold;
`;
const Uptextholder = styled.div`
  height: 100px;
  margin-top: 30px;
  width: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
`;
// const Img = styled.img`
//   height: 100%;
//   width: 100%;
//   object-fit: cover;
//   border-radius: 100%;
// `;
// const Imgholder = styled.div`
//   height: 30px;
//   width: 30px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 10px;
// `;

const Div1 = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  height: 250px;
  width: 400px;
  font-size: 25px;
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
  height: 100%;
  width: 60%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-image: url("/beauty.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const B = styled.div`
  color: gray;
  font-size: 12px;
`;

const OR = styled.div`
  margin-bottom: 20px;
  font-size: 15px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const H1 = styled.div`
  color: gray;
  font-size: 18px;
`;
const H2 = styled(Link)`
  font-weight: bold;
  color: black;
  font-size: 15px;
  text-decoration: none;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 350ms;
  }
`;

const Div = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
  display: flex;
  width: 68%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
`;

const Button = styled.button`
  padding: 14px 180px;
  border-radius: 3px;
  outline: none;
  border: none;
  background-color: black;
  color: #fff;
  font-size: 15px;
  :hover {
    transform: scale(1.05);
    transition: all 350ms;
    cursor: pointer;
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
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 80%;
  height: 700px;
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

// import React, { useState } from "react";
// import styled from "styled-components";
// import pixer from "../img/uni1.jpg";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";
// // import axois from "axios"
// const Signup = () => {
//   const [uiImage, setUiImage] = useState(pixer);
//   const [image, setImage] = useState("");

//   const formSchema = yup.object().shape({
//     userName: yup.string().required("please this field must be field "),
//     email: yup.string().email().required("please this field must be field "),
//     password: yup.string().required("please this field must be field "),
//     confirm: yup.string().oneOf([yup.ref("password"), null]),
//   });

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(formSchema),
//   });
//   const uploadImage = (e) => {
//     const file = e.target.files[0];
//     const save = URL.createObjectURL(file);
//     setUiImage(save);
//     setImage(file);
//   };

//   const mySubmission = handleSubmit(async (data) => {
//     console.log(data);
//     reset();
//   });

//   return (
//     <Container>
//       <Wrapper>
//         <Box onSubmit={mySubmission}>
//           <Image src={pixer} alt="axio" />
//           <Input1 id="pix" type="file" onChange={uploadImage} />
//           <Label htmlFor="pix">Upload a photo</Label>

//           <Holder>
//             <Lab>username</Lab>
//             <Div>{errors.userName && errors?.userName.message}</Div>
//             <Input placeholder="userName" {...register("userName")} />
//           </Holder>

//           <Holder>
//             <Lab>email</Lab>
//             <Div>{errors.email && errors?.email.message}</Div>
//             <Input placeholder="Email" {...register("Email")} />
//           </Holder>
//           <Holder>
//             <Lab>password</Lab>

//             <Div>{errors.password && errors?.password.message}</Div>
//             <Input placeholder="password" {...register("password")} />
//           </Holder>
//           <Holder>
//             <Lab>confirm</Lab>

//             <Div>{errors.confirm && errors?.confirm.message}</Div>
//             <Input placeholder="confirm" {...register("confirm")} />
//           </Holder>

//           <Button type="submit">SignUp</Button>
//         </Box>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Signup;
// const Lab = styled.label`
//   margin-bottom: 10px;
// `;
// const Container = styled.div`
//   height: 100%;
//   width: 100%;
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
// const Wrapper = styled.div`
//   width: 85%;
//   height: 80%;
//   min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 30px;
// `;
// const Box = styled.form`
//   height: 490px;
//   width: 350px;
//   box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
//     rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
//     rgba(0, 0, 0, 0.09) 0px 32px 16px;
//   flex-direction: column;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
// const Image = styled.img`
//   height: 60px;
//   width: 60px;
//   border-radius: 50%;
//   margin-bottom: 20px;
// `;
// const Input = styled.input`
//   width: 270px;
//   height: 25px;
//   outline: none;
// `;
// const Label = styled.label`
//   height: 30px;
//   width: 150px;
//   background-color: #004080;
//   color: #fff;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   transform: scale(1);
//   border-radius: 3px;
//   :hover {
//     cursor: pointer;
//     transform: scale(1.05);
//     transition: all 350ms;
//   }
// `;
// const Holder = styled.div`
//   margin-top: 12px;
// `;
// const Input1 = styled.input`
//   display: none;
//   border: lightgrey;
// `;

// const Div = styled.p`
//   color: red;
// `;
// const Button = styled.button`
//   padding: 5px 55px;
//   background-color: orange;
//   margin-top: 20px;
//   border: none;
//   outline: none;
//   color: white;
//   border-radius: 3px;
//   :hover {
//     cursor: pointer;
//     transform: scale(1.05);
//     transition: all 350ms;
//   }
// `;
