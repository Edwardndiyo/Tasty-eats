"use client"

import { useState } from "react"
import styled from "styled-components"
import { Search, ShoppingCart, Menu, X } from "lucide-react"

const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.backgroundTransparent};
  backdrop-filter: blur(10px);
`

const HeaderContainer = styled.div`
  display: flex;
  height: 4rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    padding: 0 1.5rem;
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const MenuButton = styled.button`
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
  
  @media (min-width: 768px) {
    display: none;
  }
`

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  font-size: 1.25rem;
  text-decoration: none;
  color: ${(props) => props.theme.colors.foreground};
`

const SearchContainer = styled.div`
  display: none;
  align-items: center;
  gap: 1rem;
  flex: 1;
  margin: 0 1.5rem;
  
  @media (min-width: 768px) {
    display: flex;
  }
`

const SearchInputWrapper = styled.div`
  position: relative;
  flex: 1;
  max-width: 32rem;
`

const SearchIcon = styled(Search)`
  position: absolute;
  left: 0.625rem;
  top: 0.625rem;
  height: 1rem;
  width: 1rem;
  color: ${(props) => props.theme.colors.mutedForeground};
`

const SearchInput = styled.input`
  width: 100%;
  height: 2.5rem;
  padding-left: 2rem;
  border-radius: 9999px;
  border: none;
  background-color: ${(props) => props.theme.colors.muted};
  color: ${(props) => props.theme.colors.foreground};
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary};
  }
`

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  padding: 0 1rem;
  border-radius: 9999px;
  border: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.foreground};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.muted};
  }
`

const DropdownContainer = styled.div`
  position: relative;
`

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  width: 14rem;
  border-radius: 0.375rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.background};
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  z-index: 50;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`

const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.muted};
  }
`

const CheckboxInput = styled.input`
  margin-right: 0.5rem;
`

const CartButton = styled.button`
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

const CartBadge = styled.span`
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 9999px;
  background-color: ${(props) => props.theme.colors.destructive};
  color: ${(props) => props.theme.colors.destructiveForeground};
  font-size: 0.75rem;
  font-weight: 500;
`

const MobileSearchButton = styled.button`
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
  
  @media (min-width: 768px) {
    display: none;
  }
`

const MobileSearchContainer = styled.div`
  padding: 0 1rem 0.75rem 1rem;
  
  @media (min-width: 768px) {
    display: none;
  }
`

const MobileMenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 40;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.background};
  z-index: 50;
  transform: ${(props) => (props.isOpen ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease-in-out;
  padding: 1rem;
  overflow-y: auto;
`

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

const MobileMenuCloseButton = styled.button`
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

const MobileMenuSection = styled.div`
  margin-bottom: 1.5rem;
`

const MobileMenuTitle = styled.div`
  font-weight: 500;
  margin-bottom: 0.5rem;
  padding: 0 0.5rem;
`

const MobileMenuItem = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.375rem;
  background-color: transparent;
  border: none;
  text-align: left;
  cursor: pointer;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.muted};
  }
`

export default function Navbar({ cartItems, onSearch, onFilterChange }) {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [isRestaurantDropdownOpen, setIsRestaurantDropdownOpen] = useState(false)
  const [isMealTypeDropdownOpen, setIsMealTypeDropdownOpen] = useState(false)

  const restaurantCategories = ["Fast Food", "Fine Dining", "Casual Dining", "Cafe", "Bistro", "Buffet"]

  const mealTypes = ["Vegetarian", "Non-Vegetarian", "Vegan", "Gluten-Free", "Desserts"]

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) => {
      const newCategories = prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]

      onFilterChange(newCategories)
      return newCategories
    })
  }

  const handleSearch = () => {
    onSearch(searchValue)
  }

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <LogoContainer>
          <MenuButton onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={20} />
          </MenuButton>
          <Logo href="#">TastyEats</Logo>
        </LogoContainer>

        <SearchContainer>
          <SearchInputWrapper>
            <SearchIcon />
            <SearchInput
              type="search"
              placeholder="Search for restaurants or meals..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
          </SearchInputWrapper>

          <DropdownContainer>
            <DropdownButton onClick={() => setIsRestaurantDropdownOpen(!isRestaurantDropdownOpen)}>
              Restaurant Categories
            </DropdownButton>
            <DropdownContent isOpen={isRestaurantDropdownOpen}>
              {restaurantCategories.map((category) => (
                <DropdownItem key={category}>
                  <CheckboxInput
                    type="checkbox"
                    id={`category-${category}`}
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  <label htmlFor={`category-${category}`}>{category}</label>
                </DropdownItem>
              ))}
            </DropdownContent>
          </DropdownContainer>

          <DropdownContainer>
            <DropdownButton onClick={() => setIsMealTypeDropdownOpen(!isMealTypeDropdownOpen)}>
              Meal Types
            </DropdownButton>
            <DropdownContent isOpen={isMealTypeDropdownOpen}>
              {mealTypes.map((type) => (
                <DropdownItem key={type}>
                  <CheckboxInput type="checkbox" id={`type-${type}`} />
                  <label htmlFor={`type-${type}`}>{type}</label>
                </DropdownItem>
              ))}
            </DropdownContent>
          </DropdownContainer>
        </SearchContainer>

        <div>
          <CartButton>
            <ShoppingCart size={20} />
            {cartItems.length > 0 && <CartBadge>{cartItems.length}</CartBadge>}
          </CartButton>

          <MobileSearchButton onClick={handleSearch}>
            <Search size={20} />
          </MobileSearchButton>
        </div>
      </HeaderContainer>

      <MobileSearchContainer>
        <SearchInputWrapper>
          <SearchIcon />
          <SearchInput
            type="search"
            placeholder="Search for restaurants or meals..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
        </SearchInputWrapper>
      </MobileSearchContainer>

      <MobileMenuOverlay isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(false)} />

      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileMenuHeader>
          <Logo href="#">TastyEats</Logo>
          <MobileMenuCloseButton onClick={() => setIsMobileMenuOpen(false)}>
            <X size={20} />
          </MobileMenuCloseButton>
        </MobileMenuHeader>

        <MobileMenuSection>
          <MobileMenuTitle>Restaurant Categories</MobileMenuTitle>
          {restaurantCategories.map((category) => (
            <MobileMenuItem key={category} onClick={() => handleCategoryChange(category)}>
              {category}
            </MobileMenuItem>
          ))}
        </MobileMenuSection>

        <MobileMenuSection>
          <MobileMenuTitle>Meal Types</MobileMenuTitle>
          {mealTypes.map((type) => (
            <MobileMenuItem key={type}>{type}</MobileMenuItem>
          ))}
        </MobileMenuSection>
      </MobileMenu>
    </HeaderWrapper>
  )
}

