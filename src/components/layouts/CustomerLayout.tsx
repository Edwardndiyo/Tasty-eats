import type * as React from "react"
import styled from "styled-components"
import { ShoppingCart, User, LogOut } from "react-feather"
import { Link } from "react-router-dom"
import { Button } from "../common/Button"
import { useApp } from "../../context/AppContext"

const Header = styled.header`
  background: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  position: sticky;
  top: 0;
  z-index: 100;
`

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`

const CartCount = styled.span`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  position: absolute;
  top: -8px;
  right: -8px;
`

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.lg};
`

interface CustomerLayoutProps {
  children: React.ReactNode
}

export const CustomerLayout: React.FC<CustomerLayoutProps> = ({ children }) => {
  const { cart, isAuthenticated, logout } = useApp()

  return (
    <>
      <Header>
        <HeaderContent>
          <Logo to="/">Tedsons Kitchen</Logo>
          <Nav>
            {isAuthenticated ? (
              <>
                <Link to="/orders" style={{ textDecoration: "none", color: "inherit" }}>
                  My Orders
                </Link>
                <Link to="/cart" style={{ position: "relative" }}>
                  <ShoppingCart />
                  {cart.length > 0 && <CartCount>{cart.length}</CartCount>}
                </Link>
                <Button variant="outline" size="small" onClick={logout}>
                  <LogOut size={18} />
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button variant="outline" size="small" as={Link} to="/login">
                  <User size={18} />
                  Login
                </Button>
                <Button size="small" as={Link} to="/register">
                  Register
                </Button>
              </>
            )}
          </Nav>
        </HeaderContent>
      </Header>
      <Main>{children}</Main>
    </>
  )
}

