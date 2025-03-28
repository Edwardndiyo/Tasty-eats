import { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
// import { Overlay } from "./Overlay" // Import Overlay component
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import apiClient from "../../../utils/apiClient";


const Section = styled.section`
  padding: 3rem 0;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 1.2;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`

const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.375rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.foreground};
  cursor: pointer;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.muted};
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const RestaurantCard = styled.div`
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

const CardContent = styled.div`
  padding: 1.5rem;
`

const RestaurantHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const LogoContainer = styled.div`
  position: relative;
  height: 5rem;
  width: 5rem;
  overflow: hidden;
  border-radius: 9999px;
  background-color: ${(props) => props.theme.colors.muted};
`

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const RestaurantName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
`

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #f59e0b;
`

const RatingValue = styled.span`
  margin-left: 0.25rem;
  color: ${(props) => props.theme.colors.mutedForeground};
`

const Description = styled.p`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.mutedForeground};
`

const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`

const Category = styled.span`
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

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  
  ${RestaurantCard}:hover & {
    opacity: 1;
  }
`



const ViewMenuButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryForeground};
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }
`

export default function RestaurantShowcase({restaurant}) {
  // const [currentIndex, setCurrentIndex] = useState(0)
  const [restaurants, setRestaurants] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  
  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await apiClient.get("api/restaurants"); 
        console.log("Response:", response);
  
        const data = response.data; // Axios automatically parses JSON
        console.log("Data:", data);
  
        setRestaurants(data);
        console.log("Updated Restaurants State:", data);
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchRestaurants();
  }, []);
  


  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % restaurants.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + restaurants.length) % restaurants.length)
  }

  const visibleRestaurants = () => {
    // For mobile: show 1, tablet: 2, desktop: 3
    return [
      restaurants[currentIndex],
      restaurants[(currentIndex + 1) % restaurants.length],
      restaurants[(currentIndex + 2) % restaurants.length],
    ]
  }

  if (loading) return <p>Loading restaurants...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Section>
      <Container>
        <Header>
          <Title>Featured Restaurants</Title>
          <ButtonGroup>
            <NavButton onClick={prevSlide} aria-label="Previous restaurant">
              <span><ChevronLeft size={16} /></span>
            </NavButton>
            <NavButton onClick={nextSlide} aria-label="Next restaurant">
              <span><ChevronRight size={16} /></span>
            </NavButton>
          </ButtonGroup>
        </Header>

     
        <Grid>
  {visibleRestaurants()?.map((restaurant) => (
    <RestaurantCard key={restaurant.id}>
      <CardContent>
        <RestaurantHeader>
          <LogoContainer>
            <Logo src={restaurant.logo || ""} alt={restaurant.name || "Restaurant"} />
          </LogoContainer>
          <RestaurantInfo>
            <RestaurantName>{restaurant.name}</RestaurantName>
            <RatingContainer>
              {Array.from({ length: 5 }, (_, i) => (
                <span key={i}>★</span>
              ))}
              <RatingValue>{restaurant.rating || "N/A"}</RatingValue>
            </RatingContainer>
          </RestaurantInfo>
        </RestaurantHeader>

        <Description>{restaurant.description || "No description available"}</Description>

        <CategoryContainer>
          {restaurant.categories?.length > 0 ? (
            restaurant.categories.map((category, index) => (
              <Category key={`${restaurant.id}-category-${index}`}>{category}</Category>
            ))
          ) : (
            <Category>No categories</Category>
          )}
        </CategoryContainer>

        <Overlay>
          <ViewMenuButton to={`/restaurant/${restaurant.id}`}>
            View Menu
            <ExternalLink size={16} />
          </ViewMenuButton>
        </Overlay>
      </CardContent>
    </RestaurantCard>
  ))}
</Grid>

      </Container>
    </Section>
  )
}


