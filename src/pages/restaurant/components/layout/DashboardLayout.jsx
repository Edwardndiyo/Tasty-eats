"use client"

import styled from "styled-components"
import Sidebar from "./Sidebar"

const LayoutWrapper = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`

const MainContent = styled.main`
  margin-left: 280px;
  min-height: 100vh;
  width: 75vw;

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`

const PageContent = styled.div`
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`

export default function DashboardLayout({ children }) {
  return (
    <LayoutWrapper>
      <Sidebar />
      <MainContent>
        <PageContent>{children}</PageContent>
      </MainContent>
    </LayoutWrapper>
  )
}


