import { useState } from "react"
import styled from "styled-components"
import { Filter, X } from "lucide-react"

const DesktopFilters = styled.div`
  display: none;
  
  @media (min-width: 768px) {
    display: block;
  }
`

const MobileFilters = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`

const FilterCard = styled.div`
  position: sticky;
  top: 5rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.5rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.card};
`

const FilterTitle = styled.h3`
  font-weight: 600;
  margin-bottom: 1rem;
`

const FilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

const ClearButton = styled.button`
  background: none;
  border: none;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.mutedForeground};
  cursor: pointer;
  
  &:hover {
    color: ${(props) => props.theme.colors.foreground};
  }
`

const ActiveFiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

const ActiveFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border-radius: 9999px;
  background-color: ${(props) => props.theme.colors.primaryLight};
  color: ${(props) => props.theme.colors.primary};
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 500;
`

const RemoveFilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`

const AccordionContainer = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.border};
`

const AccordionItem = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`

const AccordionHeader = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  background: none;
  border: none;
  text-align: left;
  font-weight: 500;
  cursor: pointer;
  
  &::after {
    content: '';
    width: 0.75rem;
    height: 0.75rem;
    border-right: 2px solid ${(props) => props.theme.colors.foreground};
    border-bottom: 2px solid ${(props) => props.theme.colors.foreground};
    transform: ${(props) => (props.isOpen ? "rotate(-135deg)" : "rotate(45deg)")};
    transition: transform 0.2s ease-in-out;
  }
`

const AccordionContent = styled.div`
  padding-bottom: 1rem;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  cursor: pointer;
`

const Checkbox = styled.input`
  cursor: pointer;
`

const MobileFilterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.375rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.background};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.muted};
  }
`

const MobileFilterCount = styled.span`
  display: ${(props) => (props.count > 0 ? "inline" : "none")};
`

const MobileFilterOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 40;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`

const MobileFilterPanel = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80vh;
  background-color: ${(props) => props.theme.colors.background};
  z-index: 50;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  padding: 1.5rem;
  transform: ${(props) => (props.isOpen ? "translateY(0)" : "translateY(100%)")};
  transition: transform 0.3s ease-in-out;
  overflow-y: auto;
`

const MobileFilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`

const MobileFilterTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
`

const CloseButton = styled.button`
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

export default function FiltersSection({ activeFilters, onFilterChange }) {
  const [isOpen, setIsOpen] = useState(false)
  const [openAccordions, setOpenAccordions] = useState({
    mealType: true,
    cuisine: true,
    price: true,
    location: false,
  })

  const cuisines = ["American", "Italian", "Indian", "Japanese", "Mexican", "Chinese", "Thai", "Mediterranean"]
  const mealTypes = ["Vegetarian", "Non-Vegetarian", "Vegan", "Gluten-Free", "Dairy-Free"]
  const priceRanges = ["Under $10", "$10-$20", "$20-$30", "Over $30"]
  const locations = ["Downtown", "Uptown", "Midtown", "East Side", "West Side", "North End", "South End"]

  const handleCheckboxChange = (filterType, value) => {
    const currentValues = activeFilters[filterType]
    const newValues = currentValues.includes(value)
      ? currentValues.filter((v) => v !== value)
      : [...currentValues, value]

    onFilterChange(filterType, newValues)
  }

  const clearFilters = () => {
    onFilterChange("mealType", [])
    onFilterChange("cuisine", [])
    onFilterChange("priceRange", [])
    onFilterChange("location", [])
  }

  const hasActiveFilters = () => {
    return (
      activeFilters.mealType.length > 0 ||
      activeFilters.cuisine.length > 0 ||
      activeFilters.priceRange.length > 0 ||
      activeFilters.location.length > 0
    )
  }

  const toggleAccordion = (section) => {
    setOpenAccordions({
      ...openAccordions,
      [section]: !openAccordions[section],
    })
  }

  const activeFilterCount =
    activeFilters.mealType.length +
    activeFilters.cuisine.length +
    activeFilters.priceRange.length +
    activeFilters.location.length

  const FilterContent = () => (
    <>
      {hasActiveFilters() && (
        <FilterHeader>
          <h3>Active Filters</h3>
          <ClearButton onClick={clearFilters}>Clear All</ClearButton>
        </FilterHeader>
      )}

      {hasActiveFilters() && (
        <ActiveFiltersContainer>
          {activeFilters.mealType.map((type) => (
            <ActiveFilter key={type}>
              {type}
              <RemoveFilterButton
                onClick={() => handleCheckboxChange("mealType", type)}
                aria-label={`Remove ${type} filter`}
              >
                <X size={12} />
              </RemoveFilterButton>
            </ActiveFilter>
          ))}
          {activeFilters.cuisine.map((cuisine) => (
            <ActiveFilter key={cuisine}>
              {cuisine}
              <RemoveFilterButton
                onClick={() => handleCheckboxChange("cuisine", cuisine)}
                aria-label={`Remove ${cuisine} filter`}
              >
                <X size={12} />
              </RemoveFilterButton>
            </ActiveFilter>
          ))}
          {activeFilters.priceRange.map((range) => (
            <ActiveFilter key={range}>
              {range}
              <RemoveFilterButton
                onClick={() => handleCheckboxChange("priceRange", range)}
                aria-label={`Remove ${range} filter`}
              >
                <X size={12} />
              </RemoveFilterButton>
            </ActiveFilter>
          ))}
          {activeFilters.location.map((location) => (
            <ActiveFilter key={location}>
              {location}
              <RemoveFilterButton
                onClick={() => handleCheckboxChange("location", location)}
                aria-label={`Remove ${location} filter`}
              >
                <X size={12} />
              </RemoveFilterButton>
            </ActiveFilter>
          ))}
        </ActiveFiltersContainer>
      )}

      <AccordionContainer>
        <AccordionItem>
          <AccordionHeader isOpen={openAccordions.mealType} onClick={() => toggleAccordion("mealType")}>
            Meal Type
          </AccordionHeader>
          <AccordionContent isOpen={openAccordions.mealType}>
            <CheckboxContainer>
              {mealTypes.map((type) => (
                <CheckboxLabel key={type}>
                  <Checkbox
                    type="checkbox"
                    id={`meal-type-${type}`}
                    checked={activeFilters.mealType.includes(type)}
                    onChange={() => handleCheckboxChange("mealType", type)}
                  />
                  {type}
                </CheckboxLabel>
              ))}
            </CheckboxContainer>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader isOpen={openAccordions.cuisine} onClick={() => toggleAccordion("cuisine")}>
            Cuisine
          </AccordionHeader>
          <AccordionContent isOpen={openAccordions.cuisine}>
            <CheckboxContainer>
              {cuisines.map((cuisine) => (
                <CheckboxLabel key={cuisine}>
                  <Checkbox
                    type="checkbox"
                    id={`cuisine-${cuisine}`}
                    checked={activeFilters.cuisine.includes(cuisine)}
                    onChange={() => handleCheckboxChange("cuisine", cuisine)}
                  />
                  {cuisine}
                </CheckboxLabel>
              ))}
            </CheckboxContainer>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader isOpen={openAccordions.price} onClick={() => toggleAccordion("price")}>
            Price Range
          </AccordionHeader>
          <AccordionContent isOpen={openAccordions.price}>
            <CheckboxContainer>
              {priceRanges.map((range) => (
                <CheckboxLabel key={range}>
                  <Checkbox
                    type="checkbox"
                    id={`price-${range}`}
                    checked={activeFilters.priceRange.includes(range)}
                    onChange={() => handleCheckboxChange("priceRange", range)}
                  />
                  {range}
                </CheckboxLabel>
              ))}
            </CheckboxContainer>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader isOpen={openAccordions.location} onClick={() => toggleAccordion("location")}>
            Location
          </AccordionHeader>
          <AccordionContent isOpen={openAccordions.location}>
            <CheckboxContainer>
              {locations.map((location) => (
                <CheckboxLabel key={location}>
                  <Checkbox
                    type="checkbox"
                    id={`location-${location}`}
                    checked={activeFilters.location.includes(location)}
                    onChange={() => handleCheckboxChange("location", location)}
                  />
                  {location}
                </CheckboxLabel>
              ))}
            </CheckboxContainer>
          </AccordionContent>
        </AccordionItem>
      </AccordionContainer>
    </>
  )

  return (
    <>
      {/* Desktop filters */}
      <DesktopFilters>
        <FilterCard>
          <FilterTitle>Filters</FilterTitle>
          <FilterContent />
        </FilterCard>
      </DesktopFilters>

      {/* Mobile filters */}
      <MobileFilters>
        <MobileFilterButton onClick={() => setIsOpen(true)}>
          <Filter size={16} />
          Filters
          <MobileFilterCount count={activeFilterCount}>({activeFilterCount})</MobileFilterCount>
        </MobileFilterButton>

        <MobileFilterOverlay isOpen={isOpen} onClick={() => setIsOpen(false)} />

        <MobileFilterPanel isOpen={isOpen}>
          <MobileFilterHeader>
            <MobileFilterTitle>Filters</MobileFilterTitle>
            <CloseButton onClick={() => setIsOpen(false)}>
              <X size={20} />
            </CloseButton>
          </MobileFilterHeader>

          <FilterContent />
        </MobileFilterPanel>
      </MobileFilters>
    </>
  )
}

