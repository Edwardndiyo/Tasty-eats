import type * as React from "react"
import styled from "styled-components"
import { BarChart2, Users, Grid, FileText, Settings, LogOut } from "react-feather"
import { Button } from "../common/Button"

const Container = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  min-height: 100vh;
`

const Sidebar = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-right: 1px solid ${({ theme }) => theme.colors.text.secondary}11;
  padding: ${({ theme }) => theme.spacing.lg};
`

const Content = styled.div`
  background: ${({ theme }) => theme.colors.surface};
`

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.primary};
`

const NavItem = styled.a<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ active, theme }) => (active ? theme.colors.primary : theme.colors.text.secondary)};
  text-decoration: none;
  border-radius: 6px;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary}11;
    color: ${({ theme }) => theme.colors.primary};
  }
`

interface AdminLayoutProps {
  children: React.ReactNode
  activePage: string
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children, activePage }) => {
  return (
    <Container>
      <Sidebar>
        <Logo>Tedsons Admin</Logo>

        <nav>
          <NavItem href="/admin/dashboard" active={activePage === "dashboard"}>
            <BarChart2 size={20} />
            Dashboard
          </NavItem>
          <NavItem href="/admin/users" active={activePage === "users"}>
            <Users size={20} />
            Users
          </NavItem>
          <NavItem href="/admin/categories" active={activePage === "categories"}>
            <Grid size={20} />
            Categories
          </NavItem>
          <NavItem href="/admin/reports" active={activePage === "reports"}>
            <FileText size={20} />
            Reports
          </NavItem>
          <NavItem href="/admin/settings" active={activePage === "settings"}>
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

