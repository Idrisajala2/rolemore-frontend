import React from "react";
import styled from "styled-components";
// import Category from "./category/Category";
import Homepage from "./category/Homepage";
const Home = () => {
  return (
    <div>
      {/* <Category /> */}
      <Homepage />
    </div>
  );
};

export default Home;

// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
const Wrapper = styled.div`
  height: 80%;
  min-height: 100vh;
  width: 1200px;
  @media (max-width: 768px) and (min-width: 320px) {
    width: 70%;
  }
`;
const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 1200px;
  @media (max-width: 768px) and (min-width: 320px) {
    width: 90%;
  }
`;
