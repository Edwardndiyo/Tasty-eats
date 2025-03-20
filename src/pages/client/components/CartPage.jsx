import { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Minus, Plus, X, ShoppingBag, Star, Check } from "lucide-react"

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  
  @media (min-width: 768px) {
    padding: 2rem 1.5rem;
  }
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
`

const CartGrid = styled.div`
  display: grid;
  gap: 2rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const CartItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.5rem;
  align-items: center;
  background-color: white;
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px -4px rgba(0, 0, 0, 0.1);
  }
  
  @media (min-width: 640px) {
    grid-template-columns: auto 1fr auto auto;
  }
`

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 0.375rem;
`

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const ItemName = styled.h3`
  font-weight: 600;
`

const ItemPrice = styled.span`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
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
  border: 1px solid ${(props) => props.theme.colors.border};
  background: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primaryDark};
  
  &:hover {
    background-color: ${(props) => props.theme.colors.primaryLight};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const Quantity = styled.span`
  min-width: 2rem;
  text-align: center;
  font-weight: 500;
`

const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.375rem;
  border: none;
  background: none;
  color: ${(props) => props.theme.colors.mutedForeground};
  cursor: pointer;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.destructiveLight};
    color: ${(props) => props.theme.colors.destructive};
  }
`

const OrderSummary = styled.div`
  position: sticky;
  top: 2rem;
  padding: 1.5rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.5rem;
  height: fit-content;
  background-color: white;
  box-shadow: 0 4px 12px -2px rgba(0, 0, 0, 0.08);
`

const SummaryTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  
  &:last-of-type {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid ${(props) => props.theme.colors.border};
    font-weight: 600;
    font-size: 1.125rem;
  }
`

const CheckoutButton = styled(Link)`
  display: inline-flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 3rem;
  margin-top: 1.5rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryForeground};
  border-radius: 0.375rem;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }
`

const EmptyCart = styled.div`
  text-align: center;
  padding: 4rem 1rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.border};
`

const EmptyCartIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  svg {
    width: 4rem;
    height: 4rem;
    color: ${(props) => props.theme.colors.mutedForeground};
  }
`

const EmptyMessage = styled.p`
  color: ${(props) => props.theme.colors.mutedForeground};
  margin-bottom: 1.5rem;
`

const ContinueShoppingLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  padding: 0 1.5rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryForeground};
  border-radius: 0.375rem;
  font-weight: 500;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }
`

const RelatedProducts = styled.div`
  margin-top: 4rem;
`

const RelatedTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`

const RelatedCard = styled.div`
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: white;
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.15);
  }
`

const RelatedImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`

const RelatedInfo = styled.div`
  padding: 1rem;
`

const RelatedHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 0.5rem;
`

const RelatedName = styled.h3`
  font-weight: 600;
  margin-bottom: 0.25rem;
`

const RelatedRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${(props) => props.theme.colors.primary};
`

const RelatedPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
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

function CartPage({ cartItems, onUpdateQuantity, onRemoveItem, onAddToCart }) {
  const [loading, setLoading] = useState(false)
  const [addedItems, setAddedItems] = useState({})

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const deliveryFee = 5.99
  const total = subtotal + deliveryFee

  const handleAddToCart = async (item) => {
    setLoading(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500))
      setAddedItems((prev) => ({ ...prev, [item.id]: true }))
      onAddToCart(item) // Use the passed onAddToCart function
    } finally {
      setLoading(false)
    }
  }

  // Check if an item is in the cart
  const isItemInCart = (itemId) => {
    return cartItems.some((item) => item.id === itemId)
  }

  // Get quantity of an item in cart
  const getItemQuantity = (itemId) => {
    const item = cartItems.find((item) => item.id === itemId)
    return item ? item.quantity : 0
  }

  useEffect(() => {
    // Update addedItems state based on cart items
    const newAddedItems = {}
    cartItems.forEach((item) => {
      newAddedItems[item.id] = true
    })
    setAddedItems(newAddedItems)
  }, [cartItems])

  // Updated related products array with real images and ratings
  const relatedProducts = [
    {
      id: 101,
      name: "Spicy Chicken Wings",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&h=600&fit=crop",
      rating: 4.7,
    },
    {
      id: 102,
      name: "Vegetable Spring Rolls",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1548507200-47d6bf76ea61?w=800&h=600&fit=crop",
      rating: 4.5,
    },
    {
      id: 103,
      name: "Caesar Salad",
      price: 10.99,
      image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=800&h=600&fit=crop",
      rating: 4.8,
    },
  ]

  if (cartItems.length === 0) {
    return (
      <Container>
        <EmptyCart>
          <EmptyCartIcon>
            <ShoppingBag />
          </EmptyCartIcon>
          <EmptyMessage>Your cart is empty</EmptyMessage>
          <ContinueShoppingLink to="/">Continue Shopping</ContinueShoppingLink>
        </EmptyCart>

        <RelatedProducts>
          <RelatedTitle>Popular Items</RelatedTitle>
          <RelatedGrid>
            {relatedProducts.map((product) => (
              <RelatedCard key={product.id}>
                <RelatedImage src={product.image} alt={product.name} />
                <RelatedInfo>
                  <RelatedHeader>
                    <div>
                      <RelatedName>{product.name}</RelatedName>
                      <RelatedRating>
                        <Star fill="#f59e0b" stroke="#f59e0b" size={16} />
                        <span>{product.rating}</span>
                      </RelatedRating>
                    </div>
                  </RelatedHeader>
                  <RelatedPrice>
                    <span>${product.price.toFixed(2)}</span>
                    <AddToCartButton
                      onClick={() => handleAddToCart(product)}
                      disabled={loading || addedItems[product.id]}
                      added={addedItems[product.id]}
                    >
                      {addedItems[product.id] ? (
                        <>
                          <span><Check size={16} /></span>
                          Added
                        </>
                      ) : (
                        <>
                          <span><ShoppingBag size={16} /></span>
                          Add to Cart
                        </>
                      )}
                    </AddToCartButton>
                  </RelatedPrice>
                </RelatedInfo>
              </RelatedCard>
            ))}
          </RelatedGrid>
        </RelatedProducts>
      </Container>
    )
  }

  return (
    <Container>
      <Title>Shopping Cart</Title>

      <CartGrid>
        <CartItems>
          {cartItems.map((item) => (
            <CartItem key={item.id}>
              <ItemImage src={item.image} alt={item.name} />
              <ItemInfo>
                <ItemName>{item.name}</ItemName>
                <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
              </ItemInfo>
              <QuantityControl>
                <QuantityButton onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} disabled={loading}>
                  <span><Minus size={16} /></span>
                </QuantityButton>
                <Quantity>{item.quantity}</Quantity>
                <QuantityButton onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} disabled={loading}>
                  <span><Plus size={16} /> </span>
                </QuantityButton>
              </QuantityControl>
              <RemoveButton onClick={() => onRemoveItem(item.id)} aria-label="Remove item">
                <span><X size={16} /></span>
              </RemoveButton>
            </CartItem>
          ))}
        </CartItems>

        <OrderSummary>
          <SummaryTitle>Order Summary</SummaryTitle>
          <SummaryRow>
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </SummaryRow>
          <SummaryRow>
            <span>Delivery Fee</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </SummaryRow>
          <SummaryRow>
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </SummaryRow>
          <CheckoutButton to="/checkout">Proceed to Checkout</CheckoutButton>
        </OrderSummary>
      </CartGrid>

      <RelatedProducts>
        <RelatedTitle>You Might Also Like</RelatedTitle>
        <RelatedGrid>
          {relatedProducts.map((product) => (
            <RelatedCard key={product.id}>
              <RelatedImage src={product.image} alt={product.name} />
              <RelatedInfo>
                <RelatedHeader>
                  <div>
                    <RelatedName>{product.name}</RelatedName>
                    <RelatedRating>
                      <span><Star fill="#f59e0b" stroke="#f59e0b" size={16} /></span>
                      <span>{product.rating}</span>
                    </RelatedRating>
                  </div>
                </RelatedHeader>
                <RelatedPrice>
                  <span>${product.price.toFixed(2)}</span>
                  {isItemInCart(product.id) ? (
                    <QuantityControl>
                      <QuantityButton
                        onClick={() => onUpdateQuantity(product.id, getItemQuantity(product.id) - 1)}
                        disabled={loading}
                      >
                        <span><Minus size={16} /></span>
                      </QuantityButton>
                      <Quantity>{getItemQuantity(product.id)}</Quantity>
                      <QuantityButton
                        onClick={() => onUpdateQuantity(product.id, getItemQuantity(product.id) + 1)}
                        disabled={loading}
                      >
                        <span><Plus size={16} /></span>
                      </QuantityButton>
                    </QuantityControl>
                  ) : (
                    <AddToCartButton
                      onClick={() => handleAddToCart(product)}
                      disabled={loading}
                      added={addedItems[product.id]}
                    >
                      <span><ShoppingBag size={16} /></span>
                      Add to Cart
                    </AddToCartButton>
                  )}
                </RelatedPrice>
              </RelatedInfo>
            </RelatedCard>
          ))}
        </RelatedGrid>
      </RelatedProducts>
    </Container>
  )
}

export default CartPage

