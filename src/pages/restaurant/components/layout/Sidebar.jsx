import { useState } from "react"

import styled from "styled-components"
import { Link, useLocation } from "react-router-dom"
import { LayoutDashboard, UtensilsCrossed, ClipboardList, Settings, MenuIcon } from "lucide-react"

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
  transition: transform 0.3s ease-in-out;
  z-index: 100;

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

const Navigation = styled.nav`
  flex: 1;
  padding: 1rem;
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

export default function Sidebar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => setIsOpen(!isOpen)
  const closeSidebar = () => setIsOpen(false)

  const isActive = (path) => location.pathname === path

  return (
    <>
      <MobileMenuButton onClick={toggleSidebar}>
        <MenuIcon size={20} />
      </MobileMenuButton>

      <MobileOverlay isOpen={isOpen} onClick={closeSidebar} />

      <SidebarWrapper isOpen={isOpen}>
        <Logo to="/restaurant">
          <UtensilsCrossed />
          <LogoText>Restaurant Portal</LogoText>
        </Logo>

        <Navigation>
          <NavSection>
            <SectionTitle>Overview</SectionTitle>
            <NavLink to="/restaurant" active={isActive("/restaurant")}>
              <LayoutDashboard size={20} />
              <NavText active={isActive("/restaurant")}>Dashboard</NavText>
            </NavLink>
          </NavSection>

          <NavSection>
            <SectionTitle>Management</SectionTitle>
            <NavLink to="/restaurant/menu" active={isActive("/restaurant/menu")}>
              <UtensilsCrossed size={20} />
              <NavText active={isActive("/restaurant/menu")}>Menu</NavText>
            </NavLink>
            <NavLink to="/restaurant/orders" active={isActive("/restaurant/orders")}>
              <ClipboardList size={20} />
              <NavText active={isActive("/restaurant/orders")}>Orders</NavText>
            </NavLink>
          </NavSection>

          <NavSection>
            <SectionTitle>Settings</SectionTitle>
            <NavLink to="/restaurant/settings" active={isActive("/restaurant/settings")}>
              <Settings size={20} />
              <NavText active={isActive("/restaurant/settings")}>Settings</NavText>
            </NavLink>
          </NavSection>
        </Navigation>
      </SidebarWrapper>
    </>
  )
}

