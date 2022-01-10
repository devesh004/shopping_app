import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 550;
`;
const Announcement = () => {
  return <Container>Super Deals! Free shipping on order Over $49 </Container>;
};

export default Announcement;
