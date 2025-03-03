// "use client"

// import { useState } from "react"
// import styled from "styled-components"
// import AdminSidebar from "./AdminSidebar"
// import AdminNavbar from "./AdminNavbar"

// const LayoutWrapper = styled.div`
//   min-height: 100vh;
//   background-color: ${(props) => props.theme.colors.background};
// `

// const MainContent = styled.main`
//   margin-left: 280px;
//   min-height: 100vh;

//   @media (max-width: 1024px) {
//     margin-left: 0;
//   }
// `

// const PageContent = styled.div`
//   padding: 2rem;

//   @media (max-width: 768px) {
//     padding: 1rem;
//   }
// `

// export default function AdminLayout({ children }) {
//   const [sidebarOpen, setSidebarOpen] = useState(true)

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen)
//   }

//   return (
//     <LayoutWrapper>
//       <AdminSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
//       <MainContent>
//         <AdminNavbar toggleSidebar={toggleSidebar} />
//         <PageContent>{children}</PageContent>
//       </MainContent>
//     </LayoutWrapper>
//   )
// }



"use client"

import { useState } from "react"
import styled from "styled-components"
import AdminSidebar from "./AdminSidebar"
import AdminNavbar from "./AdminNavbar"
import { Outlet } from "react-router-dom"

const LayoutWrapper = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
`

const MainContent = styled.main`
  margin-left: 280px;
  min-height: 100vh;

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

export default function AdminLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <LayoutWrapper>
      <AdminSidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <MainContent>
        <AdminNavbar toggleSidebar={toggleSidebar} />
        <PageContent>
          <Outlet />
        </PageContent>
      </MainContent>
    </LayoutWrapper>
  )
}

