"use client"

import * as React from "react"
import styled from "styled-components"
import { Menu as MenuIcon, Package, ShoppingBag, Image, Settings, LogOut } from "react-feather"
import { Link } from "react-router-dom"
import { Button } from "../common/Button"

const Container = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  min-height: 100vh;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const Sidebar = styled.aside<{ isOpen: boolean }>`
  background: ${({ theme }) => theme.colors.background};
  border-right: 1px solid ${({ theme }) => theme.colors.text.secondary}11;
  padding: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 250px;
    z-index: 100;
    transform: translateX(${({ isOpen }) => (isOpen ? "0" : "-100%")});
    transition: transform ${({ theme }) => theme.transitions.default};
  }
`

const Content = styled.main`
  background: ${({ theme }) => theme.colors.surface};
  min-height: 100vh;
`

const MobileHeader = styled.header`
  display: none;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.text.secondary}11;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.primary};
`

const NavItem = styled(Link)<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ active, theme }) => (active ? theme.colors.primary : theme.colors.text.secondary)};
  text-decoration: none;
  border-radius: 6px;
  margin-bottom: ${({ theme }) => theme.spacing.xs};

  &:hover {
    background: ${({ theme }) => theme.colors.primary}11;
    color: ${({ theme }) => theme.colors.primary};
  }
`

interface RestaurantLayoutProps {
  children: React.ReactNode
  activePage: string
}

export const RestaurantLayout: React.FC<RestaurantLayoutProps> = ({ children, activePage }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

  return (
    <Container>
      <MobileHeader>
        <Button variant="ghost" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <MenuIcon />
        </Button>
        <div>Tedsons Kitchen</div>
      </MobileHeader>

      <Sidebar isOpen={isSidebarOpen}>
        <Logo>Restaurant Dashboard</Logo>

        <nav>
          <NavItem to="/restaurant/menu" active={activePage === "menu"}>
            <Package size={20} />
            Menu Management
          </NavItem>
          <NavItem to="/restaurant/orders" active={activePage === "orders"}>
            <ShoppingBag size={20} />
            Orders
          </NavItem>
          <NavItem to="/restaurant/media" active={activePage === "media"}>
            <Image size={20} />
            Media
          </NavItem>
          <NavItem to="/restaurant/settings" active={activePage === "settings"}>
            <Settings size={20} />
            Settings
          </NavItem>
        </nav>

        <div style={{ marginTop: "auto", paddingTop: "24px" }}>
          <Button variant="outline" fullWidth>
            <LogOut size={20} />
            Logout
          </Button>
        </div>
      </Sidebar>

      <Content>{children}</Content>
    </Container>
  )
}

