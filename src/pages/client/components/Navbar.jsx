"use client"

import { useState, useEffect } from "react"
import styled from "styled-components"
import { Search, ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom"
import { User, LogOut } from "lucide-react"

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 1.25rem;
  text-decoration: none;
  color: ${(props) => props.theme.colors.foreground};
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`

const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
`

const MenuItem = styled.li`
  font-weight: 500;
`

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }
`

const MobileMenuContent = styled.div`
  background-color: white;
  padding: 2rem;
  margin: auto;
  width: 80%;
  max-width: 30rem;
  border-radius: 0.5rem;
  position: relative;
`

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  cursor: pointer;
`

const CartButton = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.375rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.muted};
  }
`

const CartLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.375rem;
  background: none;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.muted};
  }
`

const CartBadge = styled.span`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  font-weight: bold;
`

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.backgroundTransparent};
  backdrop-filter: blur(10px);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${(props) => props.theme.colors.border};
  }
`

const HeaderContainer = styled.div`
  display: flex;
  height: 4rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  
  @media (min-width: 768px) {
    padding: 0 1.5rem;
  }
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const MobileSearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const LoginButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  padding: 0 1.25rem;
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryForeground};
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }
`

const UserButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.375rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.muted};
  }
`

const UserAvatar = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.muted};
`

const UserImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const UserDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  width: 12rem;
  border-radius: 0.375rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  z-index: 50;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`

const UserDropdownItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  color: ${(props) => props.theme.colors.foreground};
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.muted};
  }
`

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  background: none;
  color: ${(props) => props.theme.colors.destructive};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.destructiveLight};
  }
`

function Navbar({ cartItems, onSearch, onFilterChange }) {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [isRestaurantDropdownOpen, setIsRestaurantDropdownOpen] = useState(false)
  const [isMealTypeDropdownOpen, setIsMealTypeDropdownOpen] = useState(false)
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false)
  // const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Retrieve user authentication status from localStorage or global state
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setIsAuthenticated(true);
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false)
    setIsUserDropdownOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoContainer>
          <MenuButton onClick={toggleMobileMenu}>
            <Menu size={20} />
          </MenuButton>
          <Logo as={Link} to="/">
            TastyEats
          </Logo>
        </LogoContainer>

        <SearchContainer>{/* Search functionality would go here */}</SearchContainer>

        <AuthContainer>
          <CartLink to="/cart">
            <ShoppingCart size={20} />
            {cartItems?.length > 0 && <CartBadge>{cartItems.length}</CartBadge>}
          </CartLink>

          {isAuthenticated ? (
            <div style={{ position: "relative" }}>
              <UserButton onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}>
                <UserAvatar>
                  <UserImage  />
                </UserAvatar>
              </UserButton>
              <UserDropdown isOpen={isUserDropdownOpen}>
                <UserDropdownItem to="/profile">
                  <User size={16} />
                  Profile
                </UserDropdownItem>
                <LogoutButton onClick={handleLogout}>
                  <LogOut size={16} />
                  Log out
                </LogoutButton>
              </UserDropdown>
            </div>
          ) : (
            <LoginButton to="/login">Log in</LoginButton>
          )}
          {/* {isAuthenticated ? (
            <div style={{ position: "relative" }}>
              <UserButton onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}>
                <UserAvatar>
                  <UserImage src={user.avatar} alt={user.name} />
                </UserAvatar>
              </UserButton>
              <UserDropdown isOpen={isUserDropdownOpen}>
                <UserDropdownItem to="/profile">
                  <User size={16} />
                  Profile
                </UserDropdownItem>
                <LogoutButton onClick={handleLogout}>
                  <LogOut size={16} />
                  Log out
                </LogoutButton>
              </UserDropdown>
            </div>
          ) : (
            <LoginButton to="/login">Log in</LoginButton>
          )} */}

          <MobileSearchButton onClick={onSearch}>
            <Search size={20} />
          </MobileSearchButton>
        </AuthContainer>
      </HeaderContainer>
      <MobileMenu style={{ display: isMobileMenuOpen ? "block" : "none" }}>
        <MobileMenuContent>
          <CloseButton onClick={toggleMobileMenu}>&times;</CloseButton>
          <Logo to="/">TastyEats</Logo>
          <Menu>
            <MenuItem>
              <Link to="/">Home</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/menu">Menu</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/about">About</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/contact">Contact</Link>
            </MenuItem>
          </Menu>
        </MobileMenuContent>
      </MobileMenu>
    </HeaderWrapper>
  )
}

export default Navbar

