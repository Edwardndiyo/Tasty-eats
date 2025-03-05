// "use client"
// import styled from "styled-components"
// import { Link, useLocation } from "react-router-dom"
// import {
//   LayoutDashboard,
//   Users,
//   UtensilsCrossed,
//   ShoppingBag,
//   Tag,
//   FileText,
//   Settings,
//   BarChart3,
//   Bell,
//   FileEdit,
//   MenuIcon,
//   X,
// } from "lucide-react"

// const SidebarWrapper = styled.aside`
//   position: fixed;
//   left: 0;
//   top: 0;
//   bottom: 0;
//   width: 280px;
//   background-color: white;
//   border-right: 1px solid ${(props) => props.theme.colors.border};
//   display: flex;
//   flex-direction: column;
//   transition: transform 0.3s ease-in-out;
//   z-index: 100;

//   @media (max-width: 1024px) {
//     transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
//   }
// `

// const MobileOverlay = styled.div`
//   position: fixed;
//   inset: 0;
//   background-color: rgba(0, 0, 0, 0.5);
//   z-index: 99;
//   display: none;

//   @media (max-width: 1024px) {
//     display: ${(props) => (props.isOpen ? "block" : "none")};
//   }
// `

// const Logo = styled(Link)`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;
//   padding: 1.5rem;
//   text-decoration: none;
//   color: ${(props) => props.theme.colors.foreground};
// `

// const LogoText = styled.span`
//   font-size: 1.25rem;
//   font-weight: 700;
// `

// const CloseButton = styled.button`
//   position: absolute;
//   top: 1rem;
//   right: 1rem;
//   display: none;
//   align-items: center;
//   justify-content: center;
//   width: 2rem;
//   height: 2rem;
//   border-radius: 0.375rem;
//   border: none;
//   background: none;
//   cursor: pointer;
//   color: ${(props) => props.theme.colors.mutedForeground};
  
//   &:hover {
//     background-color: ${(props) => props.theme.colors.muted};
//     color: ${(props) => props.theme.colors.foreground};
//   }
  
//   @media (max-width: 1024px) {
//     display: flex;
//   }
// `

// const Navigation = styled.nav`
//   flex: 1;
//   padding: 1rem;
//   overflow-y: auto;
// `

// const NavSection = styled.div`
//   margin-bottom: 2rem;

//   &:last-child {
//     margin-bottom: 0;
//   }
// `

// const SectionTitle = styled.h3`
//   padding: 0 0.75rem;
//   font-size: 0.75rem;
//   font-weight: 500;
//   text-transform: uppercase;
//   color: ${(props) => props.theme.colors.mutedForeground};
//   margin-bottom: 0.5rem;
// `

// const NavLink = styled(Link)`
//   display: flex;
//   align-items: center;
//   gap: 0.75rem;
//   padding: 0.75rem;
//   border-radius: 0.375rem;
//   color: ${(props) => (props.active ? props.theme.colors.primary : props.theme.colors.foreground)};
//   background-color: ${(props) => (props.active ? props.theme.colors.primaryLight : "transparent")};
//   text-decoration: none;
//   transition: all 0.2s ease-in-out;
//   margin-bottom: 0.25rem;

//   &:hover {
//     background-color: ${(props) => (!props.active ? props.theme.colors.muted : props.theme.colors.primaryLight)};
//   }
// `

// const NavText = styled.span`
//   font-size: 0.875rem;
//   font-weight: ${(props) => (props.active ? "600" : "500")};
// `

// const MobileMenuButton = styled.button`
//   position: fixed;
//   left: 1rem;
//   top: 1rem;
//   width: 2.5rem;
//   height: 2.5rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border: 1px solid ${(props) => props.theme.colors.border};
//   border-radius: 0.375rem;
//   background-color: white;
//   cursor: pointer;
//   z-index: 98;
//   display: none;

//   @media (max-width: 1024px) {
//     display: flex;
//   }
// `

// export default function AdminSidebar({ isOpen, toggleSidebar }) {
//   const location = useLocation()

//   const isActive = (path) => location.pathname === path

//   return (
//     <>
//       <MobileMenuButton onClick={toggleSidebar}>
//         <MenuIcon size={20} />
//       </MobileMenuButton>

//       <MobileOverlay isOpen={isOpen} onClick={toggleSidebar} />

//       <SidebarWrapper isOpen={isOpen}>
//         <CloseButton onClick={toggleSidebar}>
//           <X size={20} />
//         </CloseButton>

//         <Logo to="/admin">
//           <LayoutDashboard />
//           <LogoText>Admin Panel</LogoText>
//         </Logo>

//         <Navigation>
//           <NavSection>
//             <SectionTitle>Overview</SectionTitle>
//             <NavLink to="/admin" active={isActive("/admin")}>
//               <LayoutDashboard size={20} />
//               <NavText active={isActive("/admin")}>Dashboard</NavText>
//             </NavLink>
//             {/* <NavLink to="/admin/analytics" active={isActive("/admin/analytics")}>
//               <BarChart3 size={20} />
//               <NavText active={isActive("/admin/analytics")}>Analytics</NavText>
//             </NavLink> */}
//           </NavSection>

//           <NavSection>
//             <SectionTitle>Management</SectionTitle>
//             <NavLink to="/admin/users" active={isActive("/admin/users")}>
//               <Users size={20} />
//               <NavText active={isActive("/admin/users")}>Users</NavText>
//             </NavLink>
//             <NavLink to="/admin/restaurants" active={isActive("/admin/restaurants")}>
//               <UtensilsCrossed size={20} />
//               <NavText active={isActive("/admin/restaurants")}>Restaurants</NavText>
//             </NavLink>
//             <NavLink to="/admin/orders" active={isActive("/admin/orders")}>
//               <ShoppingBag size={20} />
//               <NavText active={isActive("/admin/orders")}>Orders</NavText>
//             </NavLink>
//           </NavSection>

//           <NavSection>
//             <SectionTitle>Content</SectionTitle>
//             <NavLink to="/admin/categories" active={isActive("/admin/categories")}>
//               <Tag size={20} />
//               <NavText active={isActive("/admin/categories")}>Categories</NavText>
//             </NavLink>
//             <NavLink to="/admin/food-types" active={isActive("/admin/food-types")}>
//               <UtensilsCrossed size={20} />
//               <NavText active={isActive("/admin/food-types")}>Food Types</NavText>
//             </NavLink>
//             {/* <NavLink to="/admin/content" active={isActive("/admin/content")}>
//               <FileEdit size={20} />
//               <NavText active={isActive("/admin/content")}>Content</NavText>
//             </NavLink> */}
//           </NavSection>

//           <NavSection>
//             <SectionTitle>Reports</SectionTitle>
//             <NavLink to="/admin/reports" active={isActive("/admin/reports")}>
//               <FileText size={20} />
//               <NavText active={isActive("/admin/reports")}>Reports</NavText>
//             </NavLink>
//           </NavSection>

//           <NavSection>
//             <SectionTitle>System</SectionTitle>
//             <NavLink to="/admin/notifications" active={isActive("/admin/notifications")}>
//               <Bell size={20} />
//               <NavText active={isActive("/admin/notifications")}>Notifications</NavText>
//             </NavLink>
//             <NavLink to="/admin/settings" active={isActive("/admin/settings")}>
//               <Settings size={20} />
//               <NavText active={isActive("/admin/settings")}>Settings</NavText>
//             </NavLink>
//           </NavSection>
//         </Navigation>
//       </SidebarWrapper>
//     </>
//   )
// }









"use client"
import styled from "styled-components"
import { Link, useLocation } from "react-router-dom"
import {
  LayoutDashboard,
  Users,
  UtensilsCrossed,
  ShoppingBag,
  Tag,
  FileText,
  Settings,
  BarChart3,
  Bell,
  FileEdit,
  MenuIcon,
  X,
} from "lucide-react"

const SidebarWrapper = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 280px;
  background-color: white;
  border-right: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
  z-index: 100;
  box-shadow: ${(props) => (props.isOpen ? "0 0 15px rgba(0, 0, 0, 0.05)" : "none")};

  @media (max-width: 1024px) {
    transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
  }
`

const MobileOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  display: none;

  @media (max-width: 1024px) {
    display: ${(props) => (props.isOpen ? "block" : "none")};
  }
`

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem;
  text-decoration: none;
  color: ${(props) => props.theme.colors.foreground};
`

const LogoText = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
`

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: none;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.375rem;
  border: none;
  background: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.mutedForeground};

  &:hover {
    background-color: ${(props) => props.theme.colors.muted};
    color: ${(props) => props.theme.colors.foreground};
  }

  @media (max-width: 1024px) {
    display: flex;
  }
`

const Navigation = styled.nav`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  
  /* Hide default scrollbar but maintain functionality */
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    border: transparent;
  }
  
  &:hover::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
  }
`

const NavSection = styled.div`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`

const SectionTitle = styled.h3`
  padding: 0 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.mutedForeground};
  margin-bottom: 0.5rem;
`

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.375rem;
  color: ${(props) => (props.active ? props.theme.colors.primary : props.theme.colors.foreground)};
  background-color: ${(props) => (props.active ? props.theme.colors.primaryLight : "transparent")};
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  margin-bottom: 0.25rem;

  &:hover {
    background-color: ${(props) => (!props.active ? props.theme.colors.muted : props.theme.colors.primaryLight)};
  }
`

const NavText = styled.span`
  font-size: 0.875rem;
  font-weight: ${(props) => (props.active ? "600" : "500")};
`

const MobileMenuButton = styled.button`
  position: fixed;
  left: 1rem;
  top: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.375rem;
  background-color: white;
  cursor: pointer;
  z-index: 98;
  display: none;

  @media (max-width: 1024px) {
    display: flex;
  }
`

export default function AdminSidebar({ isOpen, toggleSidebar }) {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <>
      <MobileMenuButton onClick={toggleSidebar}>
        <MenuIcon size={20} />
      </MobileMenuButton>

      <MobileOverlay isOpen={isOpen} onClick={toggleSidebar} />

      <SidebarWrapper isOpen={isOpen}>
        <CloseButton onClick={toggleSidebar}>
          <X size={20} />
        </CloseButton>

        <Logo to="/admin">
          <LayoutDashboard />
          <LogoText>Admin Panel</LogoText>
        </Logo>

        <Navigation>
          <NavSection>
            <SectionTitle>Overview</SectionTitle>
            <NavLink to="/admin" active={isActive("/admin")}>
              <LayoutDashboard size={20} />
              <NavText active={isActive("/admin")}>Dashboard</NavText>
            </NavLink>
            {/* <NavLink to="/admin/analytics" active={isActive("/admin/analytics")}>
              <BarChart3 size={20} />
              <NavText active={isActive("/admin/analytics")}>Analytics</NavText>
            </NavLink> */}
          </NavSection>

          <NavSection>
            <SectionTitle>Management</SectionTitle>
            <NavLink to="/admin/users" active={isActive("/admin/users")}>
              <Users size={20} />
              <NavText active={isActive("/admin/users")}>Users</NavText>
            </NavLink>
            <NavLink to="/admin/restaurants" active={isActive("/admin/restaurants")}>
              <UtensilsCrossed size={20} />
              <NavText active={isActive("/admin/restaurants")}>Restaurants</NavText>
            </NavLink>
            <NavLink to="/admin/orders" active={isActive("/admin/orders")}>
              <ShoppingBag size={20} />
              <NavText active={isActive("/admin/orders")}>Orders</NavText>
            </NavLink>
          </NavSection>

          <NavSection>
            <SectionTitle>Content</SectionTitle>
            <NavLink to="/admin/categories" active={isActive("/admin/categories")}>
              <Tag size={20} />
              <NavText active={isActive("/admin/categories")}>Categories</NavText>
            </NavLink>
            <NavLink to="/admin/food-types" active={isActive("/admin/food-types")}>
              <UtensilsCrossed size={20} />
              <NavText active={isActive("/admin/food-types")}>Food Types</NavText>
            </NavLink>
            {/* <NavLink to="/admin/content" active={isActive("/admin/content")}>
              <FileEdit size={20} />
              <NavText active={isActive("/admin/content")}>Content</NavText>
            </NavLink> */}
          </NavSection>

          <NavSection>
            <SectionTitle>System</SectionTitle>
            <NavLink to="/admin/notifications" active={isActive("/admin/notifications")}>
              <Bell size={20} />
              <NavText active={isActive("/admin/notifications")}>Notifications</NavText>
            </NavLink>
            <NavLink to="/admin/reports" active={isActive("/admin/reports")}>
              <FileText size={20} />
              <NavText active={isActive("/admin/reports")}>Reports</NavText>
            </NavLink>
            <NavLink to="/admin/settings" active={isActive("/admin/settings")}>
              <Settings size={20} />
              <NavText active={isActive("/admin/settings")}>Settings</NavText>
            </NavLink>
          </NavSection>
        </Navigation>
      </SidebarWrapper>
    </>
  )
}

