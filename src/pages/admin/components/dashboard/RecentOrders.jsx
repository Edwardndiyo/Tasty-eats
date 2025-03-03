import styled from "styled-components"
import { MoreHorizontal, ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"

const Container = styled.div`
  background-color: white;
  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  overflow: hidden;
`

const Header = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
`

const ViewAllLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const Th = styled.th`
  padding: 0.75rem 1.5rem;
  text-align: left;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.mutedForeground};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  &:first-child {
    padding-left: 1.5rem;
  }

  &:last-child {
    padding-right: 1.5rem;
    text-align: right;
  }
`

const Tr = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.muted};
  }
`

const Td = styled.td`
  padding: 1rem 1.5rem;
  font-size: 0.875rem;

  &:first-child {
    padding-left: 1.5rem;
  }

  &:last-child {
    padding-right: 1.5rem;
    text-align: right;
  }
`

const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const OrderNumber = styled.div`
  font-weight: 500;
`

const OrderRestaurant = styled.div`
  font-size: 0.75rem;
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
  text-transform: capitalize;
  
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
      case "delivered":
        return `
          background-color: #dcfce7;
          color: #166534;
        `
      case "cancelled":
        return `
          background-color: #fee2e2;
          color: #991b1b;
        `
      default:
        return `
          background-color: ${props.theme.colors.muted};
          color: ${props.theme.colors.mutedForeground};
        `
    }
  }}
`

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  background: none;
  border-radius: 0.375rem;
  color: ${(props) => props.theme.colors.mutedForeground};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.muted};
    color: ${(props) => props.theme.colors.foreground};
  }
`

export default function RecentOrders() {
  // Sample data
  const orders = [
    {
      id: 1,
      number: "ORD-001",
      restaurant: "Flame Grill House",
      customer: "John Doe",
      total: "$42.99",
      status: "delivered",
      date: "2 hours ago",
    },
    {
      id: 2,
      number: "ORD-002",
      restaurant: "Spice Garden",
      customer: "Jane Smith",
      total: "$29.50",
      status: "processing",
      date: "3 hours ago",
    },
    {
      id: 3,
      number: "ORD-003",
      restaurant: "Bella Italia",
      customer: "Mike Johnson",
      total: "$35.75",
      status: "pending",
      date: "5 hours ago",
    },
    {
      id: 4,
      number: "ORD-004",
      restaurant: "Sushi Master",
      customer: "Sarah Williams",
      total: "$52.25",
      status: "delivered",
      date: "1 day ago",
    },
    {
      id: 5,
      number: "ORD-005",
      restaurant: "Flame Grill House",
      customer: "David Brown",
      total: "$18.50",
      status: "cancelled",
      date: "1 day ago",
    },
  ]

  return (
    <Container>
      <Header>
        <Title>Recent Orders</Title>
        <ViewAllLink to="/admin/orders">
          View All
          <ExternalLink size={16} />
        </ViewAllLink>
      </Header>

      <Table>
        <thead>
          <tr>
            <Th>Order</Th>
            <Th>Customer</Th>
            <Th>Total</Th>
            <Th>Status</Th>
            <Th>Date</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <Tr key={order.id}>
              <Td>
                <OrderInfo>
                  <OrderNumber>{order.number}</OrderNumber>
                  <OrderRestaurant>{order.restaurant}</OrderRestaurant>
                </OrderInfo>
              </Td>
              <Td>{order.customer}</Td>
              <Td>{order.total}</Td>
              <Td>
                <StatusBadge status={order.status}>{order.status}</StatusBadge>
              </Td>
              <Td>{order.date}</Td>
              <Td>
                <ActionButton>
                  <MoreHorizontal size={16} />
                </ActionButton>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

