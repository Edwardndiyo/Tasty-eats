import { useLocation } from "react-router-dom"
import Navbar from "../pages/client/components/Navbar"
import Footer from "../pages/client/components/Footer"
import styled from "styled-components"

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  overflow-x: hidden;
`

const MainContent = styled.main`
  flex: 1;
  width: 100%;
`

// Layout component that includes Navbar and Footer for client-facing pages
export default function Layout({ children }) {
  const location = useLocation()

  // If the path is for admin or restaurant dashboard, don't render the layout
  if (location.pathname.startsWith("/admin") || location.pathname.startsWith("/restaurant")) {
    return children
  }

  return (
    <PageContainer>
      <Navbar />
      <MainContent>{children}</MainContent>
      <Footer />
    </PageContainer>
  )
}

