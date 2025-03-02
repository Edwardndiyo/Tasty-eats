import styled from "styled-components"
import { CheckCircle } from "lucide-react"
import { Link } from "react-router-dom"

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 4rem 1rem;
  text-align: center;
`

const Icon = styled(CheckCircle)`
  width: 4rem;
  height: 4rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 1.5rem;
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`

const Message = styled.p`
  color: ${(props) => props.theme.colors.mutedForeground};
  margin-bottom: 2rem;
`

const Button = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  padding: 0 1rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryForeground};
  border-radius: 0.375rem;
  font-weight: 500;
  text-decoration: none;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }
`

function OrderSuccessPage() {
  return (
    <Container>
      <Icon />
      <Title>Order Placed Successfully!</Title>
      <Message>Thank you for your order. We'll send you a confirmation email with your order details.</Message>
      <Button to="/">Continue Shopping</Button>
    </Container>
  )
}

export default OrderSuccessPage

