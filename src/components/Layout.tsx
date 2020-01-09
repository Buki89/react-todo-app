import React from "react";
import styled from "styled-components";
import Header, { Button } from "./Header";

const Container = styled.div`
  min-height: 100vh;
`;

interface LayoutProps {
  header?: Button;
  children: React.ReactNode;
}

const Layout = ({ header, children }: LayoutProps) => (
  <Container>
    <Header button={header} />
    {children}
  </Container>
);

export default Layout;
