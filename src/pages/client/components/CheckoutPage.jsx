import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

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

const CheckoutGrid = styled.div`
  display: grid;
  gap: 2rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1.5fr 1fr;
  }
`

const FormSection = styled.div`
  margin-bottom: 2rem;
`

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  font-weight: 500;
`

const Input = styled.input`
  height: 2.5rem;
  padding: 0 0.75rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.375rem;
  
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors.primary};
  }
`

const TextArea = styled.textarea`
  height: 6rem;
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.375rem;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors.primary};
  }
`

const PaymentMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const PaymentMethod = styled.label`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.375rem;
  cursor: pointer;
  
  &:has(input:checked) {
    border-color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.primaryLight};
  }
`

const Radio = styled.input`
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
`

const OrderSummary = styled.div`
  position: sticky;
  top: 2rem;
  padding: 1.5rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.5rem;
  height: fit-content;
`

const SummaryItems = styled.div`
  margin-bottom: 1.5rem;
`

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`

const ItemQuantity = styled.span`
  color: ${(props) => props.theme.colors.mutedForeground};
`

const Divider = styled.hr`
  margin: 1rem 0;
  border: none;
  border-top: 1px solid ${(props) => props.theme.colors.border};
`

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 1.125rem;
`

const ConfirmButton = styled.button`
  width: 100%;
  height: 2.75rem;
  margin-top: 1.5rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryForeground};
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

function CheckoutPage({ cartItems, onOrderComplete }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "cod",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const deliveryFee = 5.99
  const total = subtotal + deliveryFee

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      onOrderComplete()
      navigate("/order-success")
    } catch (error) {
      console.error("Error processing order:", error)
      alert("There was an error processing your order. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Container>
      <Title>Checkout</Title>

      <CheckoutGrid>
        <div>
          <Form onSubmit={handleSubmit}>
            <FormSection>
              <SectionTitle>Delivery Details</SectionTitle>
              <FormGroup>
                <Label htmlFor="name">Full Name</Label>
                <Input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label htmlFor="address">Delivery Address</Label>
                <TextArea id="address" name="address" value={formData.address} onChange={handleInputChange} required />
              </FormGroup>
            </FormSection>

            <FormSection>
              <SectionTitle>Payment Method</SectionTitle>
              <PaymentMethods>
                <PaymentMethod>
                  <Radio
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === "cod"}
                    onChange={handleInputChange}
                  />
                  Cash on Delivery
                </PaymentMethod>

                <PaymentMethod>
                  <Radio
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === "card"}
                    onChange={handleInputChange}
                  />
                  Credit/Debit Card
                </PaymentMethod>
              </PaymentMethods>
            </FormSection>
          </Form>
        </div>

        <OrderSummary>
          <SectionTitle>Order Summary</SectionTitle>
          <SummaryItems>
            {cartItems.map((item) => (
              <SummaryItem key={item.id}>
                <div>
                  {item.name} <ItemQuantity>×{item.quantity}</ItemQuantity>
                </div>
                <div>${(item.price * item.quantity).toFixed(2)}</div>
              </SummaryItem>
            ))}
          </SummaryItems>

          <Divider />

          <SummaryItem>
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </SummaryItem>

          <SummaryItem>
            <span>Delivery Fee</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </SummaryItem>

          <Divider />

          <Total>
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </Total>

          <ConfirmButton type="submit" disabled={isSubmitting} onClick={handleSubmit}>
            {isSubmitting ? "Processing..." : "Confirm Order"}
          </ConfirmButton>
        </OrderSummary>
      </CheckoutGrid>
    </Container>
  )
}

export default CheckoutPage

