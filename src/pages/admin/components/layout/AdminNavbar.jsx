"use client"

import { useState } from "react"
import styled from "styled-components"
import { Bell, Search, User, LogOut, Settings, Menu, ChevronDown } from "lucide-react"

const NavbarWrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`

const NavbarContainer = styled.div`
  display: flex;
  position: sticky;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  height: 4rem;
`

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.375rem;
  border: none;
  background: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.foreground};
  margin-right: 1rem;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.muted};
  }
  
  @media (min-width: 1025px) {
    display: none;
  }
`

const PageTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  
  @media (max-width: 768px) {
    display: none;
  }
`

const SearchContainer = styled.div`
  position: relative;
  max-width: 500px;
  width: 100%;
  margin: 0 2rem;

  @media (max-width: 1024px) {
    display: none;
  }
`

const SearchInput = styled.input`
  width: 100%;
  height: 2.5rem;
  padding: 0 1rem 0 2.5rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme.colors.background};

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors.primary};
  }
`

const SearchIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${(props) => props.theme.colors.mutedForeground};
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const NotificationBell = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.375rem;
  border: none;
  background: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.foreground};

  &:hover {
    background-color: ${(props) => props.theme.colors.muted};
  }
`

const NotificationBadge = styled.span`
  position: absolute;
  top: 0.25rem;
  right: 0.25rem;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 9999px;
  background-color: ${(props) => props.theme.colors.destructive};
`

const UserMenu = styled.div`
  position: relative;
`

const UserButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 0.375rem;

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

const UserInfo = styled.div`
  text-align: left;

  @media (max-width: 768px) {
    display: none;
  }
`

const UserName = styled.div`
  font-weight: 500;
  font-size: 0.875rem;
`

const UserRole = styled.div`
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.mutedForeground};
`

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  width: 12rem;
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.375rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: ${(props) => (props.isOpen ? "block" : "none")};
  z-index: 50;
`

const DropdownItem = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;
  text-align: left;
  border: none;
  background: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.foreground};
  font-size: 0.875rem;

  &:hover {
    background-color: ${(props) => props.theme.colors.muted};
  }
  
  &.danger {
    color: ${(props) => props.theme.colors.destructive};
  }
`

export default function AdminNavbar({ toggleSidebar }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <NavbarWrapper>
      <NavbarContainer>
        <LeftSection>
          <MenuButton onClick={toggleSidebar}>
            <Menu size={20} />
          </MenuButton>
          <PageTitle>Admin Dashboard</PageTitle>
        </LeftSection>

        <SearchContainer>
          <SearchIcon>
            <Search size={20} />
          </SearchIcon>
          <SearchInput type="text" placeholder="Search..." />
        </SearchContainer>

        <Actions>
          <NotificationBell>
            <Bell size={20} />
            <NotificationBadge />
          </NotificationBell>

          <UserMenu>
            <UserButton onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <UserAvatar>
                <UserImage
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                  alt="Admin"
                />
              </UserAvatar>
              <UserInfo>
                <UserName>Admin User</UserName>
                <UserRole>Administrator</UserRole>
              </UserInfo>
              <ChevronDown size={16} />
            </UserButton>

            <DropdownMenu isOpen={isDropdownOpen}>
              <DropdownItem>
                <User size={16} />
                Profile
              </DropdownItem>
              <DropdownItem>
                <Settings size={16} />
                Settings
              </DropdownItem>
              <DropdownItem className="danger">
                <LogOut size={16} />
                Sign Out
              </DropdownItem>
            </DropdownMenu>
          </UserMenu>
        </Actions>
      </NavbarContainer>
    </NavbarWrapper>
  )
}

