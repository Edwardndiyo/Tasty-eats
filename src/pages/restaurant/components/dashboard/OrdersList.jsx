import styled from "styled-components"
import { Clock } from "lucide-react"

const Container = styled.div`
  background-color: white;
  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  overflow: hidden;
`

const Header = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
`

const List = styled.div`
  max-height: 400px;
  overflow-y: auto;
`

const OrderItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.muted};
  }

  &:last-child {
    border-bottom: none;
  }
`

const OrderInfo = styled.div`
  flex: 1;
`

const OrderNumber = styled.div`
  font-weight: 500;
  margin-bottom: 0.25rem;
`

const OrderDetails = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.mutedForeground};
`

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  height: 1.5rem;
  padding: 0 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  
  ${(props) => {
    switch (props.status) {
      case "pending":
        return `
          background-color: #fef9c3;
          color: #854d0e;
        `
      case "processing":
        return `
          background-color: #dbeafe;
          color: #1e40af;
        `
      case "completed":
        return `
          background-color: #dcfce7;
          color: #166534;
        `
      default:
        return `
          background-color: ${props.theme.colors.muted};
          color: ${props.theme.colors.mutedForeground};
        `
    }
  }}
`

const TimeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.mutedForeground};
`

export default function OrdersList() {
  const orders = [
    {
      id: 1,
      number: "ORD-001",
      customer: "John Doe",
      items: "2x Classic Burger, 1x Fries",
      status: "pending",
      time: "5 mins ago",
    },
    {
      id: 2,
      number: "ORD-002",
      customer: "Jane Smith",
      items: "1x Margherita Pizza",
      status: "processing",
      time: "15 mins ago",
    },
    {
      id: 3,
      number: "ORD-003",
      customer: "Mike Johnson",
      items: "3x Chicken Wings",
      status: "completed",
      time: "1 hour ago",
    },
  ]

  return (
    <Container>
      <Header>
        <Title>Completed Orders</Title>
      </Header>
      <List>
        {orders.map((order) => (
          <OrderItem key={order.id}>
            <OrderInfo>
              <OrderNumber>{order.number}</OrderNumber>
              <OrderDetails>
                {order.customer} • {order.items}
              </OrderDetails>
            </OrderInfo>
            <StatusBadge status={order.status}>
              {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
            </StatusBadge>
            <TimeInfo>
              <Clock size={16} />
              {order.time}
            </TimeInfo>
          </OrderItem>
        ))}
      </List>
    </Container>
  )
}

