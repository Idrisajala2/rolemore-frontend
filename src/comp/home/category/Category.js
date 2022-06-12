import React from "react";
import styled from "styled-components";
const Category = () => {
  return (
    <Container>
      <Wrapper>
        <Box>
          <Navigation>
            <Navi>see all collection</Navi>
            <Nav>tv</Nav>
            <Nav>Air conditioners</Nav>
            <Nav>refrigrators</Nav>
            <Nav>washing machine</Nav>
            <Nav>dish washer</Nav>
            <Nav>grinder</Nav>
          </Navigation>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Category;

// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
const Navi = styled.div`
  :hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 350ms;
    color: darkorange;
  }
`;
const Nav = styled.div`
  :hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 350ms;
    color: darkorange;
  }
`;
const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;
const Box = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  width: 80%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 1100px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid silver;
`;
