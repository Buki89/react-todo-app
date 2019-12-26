import React from "react";
import styled from "styled-components";

const StyledImg = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const Loading = () => (
  <StyledImg>
    <img src='/images/1.gif' alt='loadingGif' />
  </StyledImg>
);

export default Loading;
