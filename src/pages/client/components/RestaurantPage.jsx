import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import styled from "styled-components"
import { Star, ShoppingBag, Plus, Minus, Check } from "lucide-react"
import Navbar from "./Navbar"

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  
  @media (min-width: 768px) {
    padding: 2rem 1.5rem;
  }
`

const HeroSection = styled.div`
  position: relative;
  height: 300px;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    height: 400px;
  }
`

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const HeroOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
`

const RestaurantName = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`

const RestaurantInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

const Categories = styled.div`
  display: flex;
  gap: 0.5rem;
`

const Category = styled.span`
  padding: 0.25rem 0.75rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 9999px;
  font-size: 0.875rem;
`

const MenuSection = styled.section`
  margin-bottom: 4rem;
`

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`

const MenuItem = styled.div`
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.5rem;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.15);
  }
`

const MenuItemImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const MenuItemContent = styled.div`
  padding: 1rem;
`

const MenuItemName = styled.h3`
  font-weight: 600;
  margin-bottom: 0.5rem;
`

const MenuItemDescription = styled.p`
  color: ${(props) => props.theme.colors.mutedForeground};
  font-size: 0.875rem;
  margin-bottom: 1rem;
`

const MenuItemFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MenuItemPrice = styled.span`
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
`

const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  background-color: ${(props) => (props.added ? props.theme.colors.primary : "transparent")};
  color: ${(props) => (props.added ? props.theme.colors.primaryForeground : props.theme.colors.primary)};
  border: 1px solid ${(props) => props.theme.colors.primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover {
    background-color: ${(props) => (props.added ? props.theme.colors.primaryDark : props.theme.colors.primaryLight)};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const QuantityButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryForeground};
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const QuantityText = styled.span`
  min-width: 1.5rem;
  text-align: center;
  font-weight: 500;
`

const SuggestedSection = styled.section`
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid ${(props) => props.theme.colors.border};
`

const SuggestedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`

const SuggestedCard = styled.div`
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.15);
  }
`

const SuggestedImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

const SuggestedContent = styled.div`
  padding: 1rem;
`

const SuggestedName = styled.h3`
  font-weight: 600;
  margin-bottom: 0.5rem;
`

const SuggestedDescription = styled.p`
  color: ${(props) => props.theme.colors.mutedForeground};
  font-size: 0.875rem;
  margin-bottom: 1rem;
`

const SuggestedFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const SuggestedRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${(props) => props.theme.colors.primary};
`

const AddedBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem;
  border-radius: 9999px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryForeground};
  display: flex;
  align-items: center;
  justify-content: center;
`

function RestaurantPage({ onAddToCart }) {
  const { id } = useParams()
  const [cartItems, setCartItems] = useState({})
  const [loading, setLoading] = useState(false)

  // In a real app, fetch restaurant data based on id
  const restaurant = {
    id: 1,
    name: "Flame Grill House",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&h=800&fit=crop",
    categories: ["Steakhouse", "Burgers", "American"],
    rating: 4.8,
    menu: [
      {
        id: 1,
        name: "Classic Beef Burger",
        description: "Juicy beef patty with fresh vegetables on a toasted bun",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=600&fit=crop",
      },
      {
        id: 2,
        name: "Ribeye Steak",
        description: "Prime cut ribeye steak grilled to perfection",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&h=600&fit=crop",
      },
      {
        id: 3,
        name: "BBQ Ribs",
        description: "Tender pork ribs with house-made BBQ sauce",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop",
      },
    ],
  }

  const suggestedRestaurants = [
    {
      id: 2,
      name: "Spice Garden",
      description: "Authentic Indian cuisine with a modern twist",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop",
      rating: 4.7,
      featuredItem: {
        id: 4,
        name: "Butter Chicken",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&h=600&fit=crop",
      },
    },
    {
      id: 3,
      name: "Bella Italia",
      description: "Traditional Italian dishes made with imported ingredients",
      image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=800&h=600&fit=crop",
      rating: 4.6,
      featuredItem: {
        id: 5,
        name: "Margherita Pizza",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=800&h=600&fit=crop",
      },
    },
    {
      id: 4,
      name: "Sushi Master",
      description: "Fresh and creative Japanese cuisine by master chefs",
      image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=800&h=600&fit=crop",
      rating: 4.9,
      featuredItem: {
        id: 6,
        name: "Rainbow Roll",
        price: 18.99,
        image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&h=600&fit=crop",
      },
    },
  ]

  const handleAddToCart = async (item) => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500))

      setCartItems((prev) => {
        const newItems = {
          ...prev,
          [item.id]: (prev[item.id] || 0) + 1,
        }
        onAddToCart({ ...item, quantity: newItems[item.id] })
        return newItems
      })
    } finally {
      setLoading(false)
    }
  }

  const handleUpdateQuantity = async (item, delta) => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500))

      setCartItems((prev) => {
        const newQuantity = (prev[item.id] || 0) + delta
        if (newQuantity <= 0) {
          const { [item.id]: _, ...rest } = prev
          onAddToCart({ ...item, quantity: 0 })
          return rest
        }
        onAddToCart({ ...item, quantity: newQuantity })
        return { ...prev, [item.id]: newQuantity }
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container>
      <Navbar/>
      <HeroSection>
        <HeroImage src={restaurant.image} alt={restaurant.name} />
        <HeroOverlay>
          <RestaurantName>{restaurant.name}</RestaurantName>
          <RestaurantInfo>
            <Rating>
              <Star fill="#f59e0b" stroke="#f59e0b" size={20} />
              <span>{restaurant.rating}</span>
            </Rating>
            <Categories>
              {restaurant.categories.map((category) => (
                <Category key={category}>{category}</Category>
              ))}
            </Categories>
          </RestaurantInfo>
        </HeroOverlay>
      </HeroSection>

      <MenuSection>
        <SectionTitle>Menu</SectionTitle>
        <MenuGrid>
          {restaurant.menu.map((item) => {
            const quantity = cartItems[item.id] || 0
            return (
              <MenuItem key={item.id}>
                <MenuItemImage src={item.image} alt={item.name} />
                <MenuItemContent>
                  <MenuItemName>{item.name}</MenuItemName>
                  <MenuItemDescription>{item.description}</MenuItemDescription>
                  <MenuItemFooter>
                    <MenuItemPrice>${item.price.toFixed(2)}</MenuItemPrice>
                    {quantity === 0 ? (
                      <AddToCartButton onClick={() => handleAddToCart(item)} disabled={loading}>
                        <ShoppingBag size={16} />
                        Add to Cart
                      </AddToCartButton>
                    ) : (
                      <QuantityControl>
                        <QuantityButton onClick={() => handleUpdateQuantity(item, -1)} disabled={loading}>
                          <Minus size={16} />
                        </QuantityButton>
                        <QuantityText>{quantity}</QuantityText>
                        <QuantityButton onClick={() => handleUpdateQuantity(item, 1)} disabled={loading}>
                          <Plus size={16} />
                        </QuantityButton>
                      </QuantityControl>
                    )}
                  </MenuItemFooter>
                </MenuItemContent>
                {quantity > 0 && (
                  <AddedBadge>
                    <Check size={16} />
                  </AddedBadge>
                )}
              </MenuItem>
            )
          })}
        </MenuGrid>
      </MenuSection>

      <SuggestedSection>
        <SectionTitle>You Might Also Like</SectionTitle>
        <SuggestedGrid>
          {suggestedRestaurants.map((restaurant) => {
            const quantity = cartItems[restaurant.featuredItem.id] || 0
            return (
              <SuggestedCard key={restaurant.id}>
                <Link to={`/restaurant/${restaurant.id}`}>
                  <SuggestedImage src={restaurant.image} alt={restaurant.name} />
                </Link>
                <SuggestedContent>
                  <Link to={`/restaurant/${restaurant.id}`}>
                    <SuggestedName>{restaurant.name}</SuggestedName>
                    <SuggestedDescription>{restaurant.description}</SuggestedDescription>
                  </Link>
                  <SuggestedFooter>
                    <SuggestedRating>
                      <Star fill="#f59e0b" stroke="#f59e0b" size={16} />
                      <span>{restaurant.rating}</span>
                    </SuggestedRating>
                    {quantity === 0 ? (
                      <AddToCartButton onClick={() => handleAddToCart(restaurant.featuredItem)} disabled={loading}>
                        <ShoppingBag size={16} />${restaurant.featuredItem.price.toFixed(2)}
                      </AddToCartButton>
                    ) : (
                      <QuantityControl>
                        <QuantityButton
                          onClick={() => handleUpdateQuantity(restaurant.featuredItem, -1)}
                          disabled={loading}
                        >
                          <Minus size={16} />
                        </QuantityButton>
                        <QuantityText>{quantity}</QuantityText>
                        <QuantityButton
                          onClick={() => handleUpdateQuantity(restaurant.featuredItem, 1)}
                          disabled={loading}
                        >
                          <Plus size={16} />
                        </QuantityButton>
                      </QuantityControl>
                    )}
                  </SuggestedFooter>
                </SuggestedContent>
                {quantity > 0 && (
                  <AddedBadge>
                    <Check size={16} />
                  </AddedBadge>
                )}
              </SuggestedCard>
            )
          })}
        </SuggestedGrid>
      </SuggestedSection>
    </Container>
  )
}

export default RestaurantPage

