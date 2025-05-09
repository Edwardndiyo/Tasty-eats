import { useState, useEffect } from "react"
import styled from "styled-components"
import { PlusCircle, Star } from "lucide-react"
import apiClient from "../../../utils/apiClient";



const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
`

const SortButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`

const SortButton = styled.button`
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: ${(props) => (props.active ? "none" : `1px solid ${props.theme.colors.border}`)};
  background-color: ${(props) => (props.active ? props.theme.colors.primary : props.theme.colors.background)};
  color: ${(props) => (props.active ? props.theme.colors.primaryForeground : props.theme.colors.foreground)};
  cursor: pointer;
  
  &:hover {
    background-color: ${(props) => (props.active ? props.theme.colors.primaryDark : props.theme.colors.muted)};
  }
`

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  text-align: center;
`

const EmptyText = styled.p`
  color: ${(props) => props.theme.colors.mutedForeground};
`

const ResetButton = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: underline;
  cursor: pointer;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  
  &:hover {
    color: ${(props) => props.theme.colors.primaryDark};
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const MealCard = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0.75rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.card};
  color: ${(props) => props.theme.colors.cardForeground};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`

const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
`

const MealImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  
  ${MealCard}:hover & {
    transform: scale(1.05);
  }
`

const RatingBadge = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border-radius: 9999px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
`

const StarIcon = styled(Star)`
  width: 0.75rem;
  height: 0.75rem;
  fill: #f59e0b;
  color: #f59e0b;
`

const CardContent = styled.div`
  padding: 1rem;
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const MealInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const MealName = styled.h3`
  font-weight: 600;
`

const RestaurantName = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.mutedForeground};
`

const Price = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
`

const Description = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.mutedForeground};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const TagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.75rem;
`

const Tag = styled.span`
  display: inline-flex;
  height: 1.5rem;
  align-items: center;
  border-radius: 9999px;
  background-color: ${(props) => props.theme.colors.primaryLight};
  color: ${(props) => props.theme.colors.primary};
  padding: 0 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
`

const AddToCartButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryForeground};
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  
  ${MealCard}:hover & {
    opacity: 1;
  }
  
  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }
`

export default function MealGrid({ filters, searchQuery, onAddToCart }) {
  const [meals, setMeals] = useState([])
  const [sortBy, setSortBy] = useState("popularity")
  const [filteredMeals, setFilteredMeals] = useState([])

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await apiClient.get("/api/meals"); 
        console.log("Raw Axios Response:", response); // Debugging
    
        // Ensure data is an array before setting state
        if (!Array.isArray(response.data)) {
          throw new Error("Unexpected response format: Expected an array");
        }
    
        setMeals(response.data);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
    };
    
    fetchMeals();
  }, []);
  

  // Apply filters and search
  useEffect(() => {
    let result = [...meals]

    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (meal) =>
          meal.name.toLowerCase().includes(query) ||
          meal.restaurant.toLowerCase().includes(query) ||
          meal.description.toLowerCase().includes(query),
      )
    }

    // Apply filters
    if (filters.mealType.length > 0) {
      result = result.filter((meal) => filters.mealType.includes(meal.type))
    }

    if (filters.cuisine.length > 0) {
      result = result.filter((meal) => filters.cuisine.includes(meal.cuisine))
    }

    if (filters.restaurantCategory.length > 0) {
      // In a real app, we would have restaurant categories linked to restaurants
      // This is simplified for the example
    }

    if (filters.priceRange.length > 0) {
      // Apply price range filter
      // Example ranges: "Under $10", "$10-$20", "$20-$30", "Over $30"
      result = result.filter((meal) => {
        if (filters.priceRange.includes("Under $10") && meal.price < 10) return true
        if (filters.priceRange.includes("$10-$20") && meal.price >= 10 && meal.price <= 20) return true
        if (filters.priceRange.includes("$20-$30") && meal.price > 20 && meal.price <= 30) return true
        if (filters.priceRange.includes("Over $30") && meal.price > 30) return true
        return false
      })
    }

    // Apply sorting
    result.sort((a, b) => {
      if (sortBy === "popularity") return b.popularity - a.popularity
      if (sortBy === "price-low") return a.price - b.price
      if (sortBy === "price-high") return b.price - a.price
      return 0
    })

    setFilteredMeals(result)
  }, [meals, filters, searchQuery, sortBy])

  return (
    <Container>
      <Header>
        <Title>Popular Meals</Title>

        <SortButtons>
          <SortButton active={sortBy === "popularity"} onClick={() => setSortBy("popularity")}>
            Most Popular
          </SortButton>
          <SortButton active={sortBy === "price-low"} onClick={() => setSortBy("price-low")}>
            Price: Low to High
          </SortButton>
          <SortButton active={sortBy === "price-high"} onClick={() => setSortBy("price-high")}>
            Price: High to Low
          </SortButton>
        </SortButtons>
      </Header>

      {filteredMeals.length === 0 ? (
        <EmptyState>
          <EmptyText>No meals found matching your criteria.</EmptyText>
          <ResetButton onClick={() => setSortBy("popularity")}>Reset Filters</ResetButton>
        </EmptyState>
      ) : (
        <Grid>
          {filteredMeals.map((meal) => (
            <MealCard key={meal.id}>
              <ImageContainer>
                <MealImage src={meal.image || "/placeholder.svg"} alt={meal.name} />
                <RatingBadge>
                  <span><StarIcon /></span>
                  <span>{meal.popularity}</span>
                </RatingBadge>
              </ImageContainer>

              <CardContent>
                <CardHeader>
                  <MealInfo>
                    <MealName>{meal.name}</MealName>
                    <RestaurantName>{meal.restaurant}</RestaurantName>
                  </MealInfo>
                  <Price>${meal.price.toFixed(2)}</Price>
                </CardHeader>

                <Description>{meal.description}</Description>

                <TagContainer>
                  <Tag>{meal.cuisine}</Tag>
                  <Tag>{meal.type}</Tag>
                </TagContainer>

                <AddToCartButton onClick={() => onAddToCart(meal)}>
                  <span><PlusCircle size={16} /></span>
                  Add to Cart
                </AddToCartButton>
              </CardContent>
            </MealCard>
          ))}
        </Grid>
      )}
    </Container>
  )
}




  