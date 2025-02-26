// "use client"

// import type React from "react"

// import styled from "styled-components"
// import { Search } from "react-feather"
// import { useState } from "react"
// import { Button } from "../common/Button"

// const Container = styled.div`
//   background: ${({ theme }) => theme.colors.background};
//   padding: ${({ theme }) => theme.spacing.lg};
//   border-radius: 12px;
//   box-shadow: ${({ theme }) => theme.shadows.sm};
//   margin-bottom: ${({ theme }) => theme.spacing.xl};
// `

// const SearchBar = styled.div`
//   display: flex;
//   gap: ${({ theme }) => theme.spacing.md};
//   margin-bottom: ${({ theme }) => theme.spacing.lg};
// `

// const SearchInput = styled.input`
//   flex: 1;
//   padding: ${({ theme }) => theme.spacing.md};
//   padding-left: 40px;
//   border: 1px solid ${({ theme }) => theme.colors.text.secondary}33;
//   border-radius: 8px;
//   font-size: ${({ theme }) => theme.typography.body.fontSize};
  
//   &:focus {
//     outline: none;
//     border-color: ${({ theme }) => theme.colors.primary};
//   }
// `

// const SearchWrapper = styled.div`
//   position: relative;
//   flex: 1;
// `

// const SearchIcon = styled.span`
//   position: absolute;
//   left: ${({ theme }) => theme.spacing.sm};
//   top: 50%;
//   transform: translateY(-50%);
//   color: ${({ theme }) => theme.colors.text.secondary};
// `

// const FiltersContainer = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: ${({ theme }) => theme.spacing.md};

//   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
//     flex-direction: column;
//   }
// `

// const FilterGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: ${({ theme }) => theme.spacing.sm};
// `

// const FilterLabel = styled.label`
//   font-size: ${({ theme }) => theme.typography.small.fontSize};
//   color: ${({ theme }) => theme.colors.text.secondary};
// `

// const Select = styled.select`
//   padding: ${({ theme }) => theme.spacing.sm};
//   border: 1px solid ${({ theme }) => theme.colors.text.secondary}33;
//   border-radius: 6px;
//   font-size: ${({ theme }) => theme.typography.body.fontSize};
//   min-width: 150px;

//   &:focus {
//     outline: none;
//     border-color: ${({ theme }) => theme.colors.primary};
//   }
// `

// export const SearchFilters = () => {
//   const [filters, setFilters] = useState({
//     foodType: "",
//     priceRange: "",
//     cuisine: "",
//     sortBy: "",
//   })

//   const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const { name, value } = e.target
//     setFilters((prev) => ({
//       ...prev,
//       [name]: value,
//     }))
//   }

//   return (
//     <Container>
//       <SearchBar>
//         <SearchWrapper>
//           <SearchIcon>
//             <Search size={18} />
//           </SearchIcon>
//           <SearchInput type="text" placeholder="Search for restaurants or dishes..." />
//         </SearchWrapper>
//         <Button variant="primary">
//           <Search size={18} />
//           Search
//         </Button>
//       </SearchBar>

//       <FiltersContainer>
//         <FilterGroup>
//           <FilterLabel>Food Type</FilterLabel>
//           <Select name="foodType" value={filters.foodType} onChange={handleFilterChange}>
//             <option value="">All</option>
//             <option value="veg">Vegetarian</option>
//             <option value="non-veg">Non-Vegetarian</option>
//           </Select>
//         </FilterGroup>

//         <FilterGroup>
//           <FilterLabel>Price Range</FilterLabel>
//           <Select name="priceRange" value={filters.priceRange} onChange={handleFilterChange}>
//             <option value="">All</option>
//             <option value="low">Under $10</option>
//             <option value="medium">$10 - $20</option>
//             <option value="high">Above $20</option>
//           </Select>
//         </FilterGroup>

//         <FilterGroup>
//           <FilterLabel>Cuisine</FilterLabel>
//           <Select name="cuisine" value={filters.cuisine} onChange={handleFilterChange}>
//             <option value="">All</option>
//             <option value="italian">Italian</option>
//             <option value="chinese">Chinese</option>
//             <option value="indian">Indian</option>
//             <option value="mexican">Mexican</option>
//           </Select>
//         </FilterGroup>

//         <FilterGroup>
//           <FilterLabel>Sort By</FilterLabel>
//           <Select name="sortBy" value={filters.sortBy} onChange={handleFilterChange}>
//             <option value="relevance">Relevance</option>
//             <option value="rating">Rating</option>
//             <option value="price-low">Price: Low to High</option>
//             <option value="price-high">Price: High to Low</option>
//           </Select>
//         </FilterGroup>
//       </FiltersContainer>
//     </Container>
//   )
// }







import * as React from "react"


import styled from "styled-components"
import { Search } from "react-feather"
import { useState } from "react"
import { Button } from "../common/Button"

const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`

const SearchBar = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`

const SearchInput = styled.input`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md};
  padding-left: 40px;
  border: 1px solid ${({ theme }) => theme.colors.text.secondary}33;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

const SearchWrapper = styled.div`
  position: relative;
  flex: 1;
`

const SearchIcon = styled.span`
  position: absolute;
  left: ${({ theme }) => theme.spacing.sm};
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.text.secondary};
`

const FiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`

const FilterLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.small.fontSize};
  color: ${({ theme }) => theme.colors.text.secondary};
`

const Select = styled.select`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.text.secondary}33;
  border-radius: 6px;
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  min-width: 150px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    min-width: unset;
  }
`

export const SearchFilters = () => {
  const [filters, setFilters] = useState({
    foodType: "",
    priceRange: "",
    cuisine: "",
    sortBy: "",
  })

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <Container>
      <SearchBar>
        <SearchWrapper>
          <SearchIcon>
            <Search size={18} />
          </SearchIcon>
          <SearchInput type="text" placeholder="Search for restaurants or dishes..." />
        </SearchWrapper>
        <Button variant="primary">
          <Search size={18} />
          Search
        </Button>
      </SearchBar>

      <FiltersContainer>
        <FilterGroup>
          <FilterLabel>Food Type</FilterLabel>
          <Select name="foodType" value={filters.foodType} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="veg">Vegetarian</option>
            <option value="non-veg">Non-Vegetarian</option>
          </Select>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>Price Range</FilterLabel>
          <Select name="priceRange" value={filters.priceRange} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="low">Under $10</option>
            <option value="medium">$10 - $20</option>
            <option value="high">Above $20</option>
          </Select>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>Cuisine</FilterLabel>
          <Select name="cuisine" value={filters.cuisine} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="italian">Italian</option>
            <option value="chinese">Chinese</option>
            <option value="indian">Indian</option>
            <option value="mexican">Mexican</option>
          </Select>
        </FilterGroup>

        <FilterGroup>
          <FilterLabel>Sort By</FilterLabel>
          <Select name="sortBy" value={filters.sortBy} onChange={handleFilterChange}>
            <option value="relevance">Relevance</option>
            <option value="rating">Rating</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </Select>
        </FilterGroup>
      </FiltersContainer>
    </Container>
  )
}

