"use client"

import { useState } from "react"
import styled from "styled-components"
import { Search, Filter, ChevronDown, ChevronUp, Phone, MapPin } from 'lucide-react'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
`

const Controls = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`

const SearchContainer = styled.div`
  position: relative;
  flex: 1;
  min-width: 200px;
`

const SearchInput = styled.input`
  width: 100%;
  height: 2.5rem;
  padding: 0 1rem 0 2.5rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 0.375rem;
  background-color: white;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 1px ${props => props.theme.colors.primary};
  }
`

const SearchIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.colors.mutedForeground};
`

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 2.5rem;
  padding: 0 1rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 0.375rem;
  background-color: white;
  color: ${props => props.theme.colors.foreground};
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.muted};
  }
`

const OrdersGrid = styled.div`
  display: grid;
  gap: 1rem;
`

const OrderCard = styled.div`
  background-color: white;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 0.5rem;
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  }
`

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  background-color: ${props => props.isExpanded ? props.theme.colors.muted : 'white'};
`

const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

const OrderNumber = styled.div`
  font-weight: 600;
`

const CustomerName = styled.div`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.mutedForeground};
`

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  height: 1.5rem;
  padding: 0 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  
  ${props => {
    switch (props.status) {
      case "pending":
        return `
          background-color: #fef9c3;
          color: #854d0e;
        `
      case "enroute":
        return `
          background-color: #dbeafe;
          color: #1e40af;
        `
      case "delivered":
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

const OrderDetails = styled.div`
  padding: 1rem;
  border-top: 1px solid ${props => props.theme.colors.border};
  background-color: ${props => props.theme.colors.muted};
  animation: slideDown 0.2s ease-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const DetailSection = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`

const DetailTitle = styled.div`
  font-weight: 500;
  margin-bottom: 0.5rem;
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: ${props => props.theme.colors.mutedForeground};
`

const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
`

const Price = styled.div`
  font-weight: 500;
`

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 0.75rem;
  margin-top: 0.75rem;
  border-top: 1px solid ${props => props.theme.colors.border};
  font-weight: 600;
`

const StatusActions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`

const StatusButton = styled.button`
  height: 2.25rem;
  padding: 0 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${props => {
    if (props.active) {
      return `
        background-color: ${props.theme.colors.primary};
        color: ${props.theme.colors.primaryForeground};
        border: none;

        &:hover {
          background-color: ${props.theme.colors.primaryDark};
        }
      `
    }
    return `
      background-color: white;
      border: 1px solid ${props.theme.colors.border};
      color: ${props.theme.colors.foreground};

      &:hover {
        background-color: ${props.theme.colors.muted};
      }
    `
  }}
`

export default function OrdersManagement() {
  const [expandedOrder, setExpandedOrder] = useState(null)
  const [orders, setOrders] = useState([
    {
      id: 1,
      number: "ORD-001",
      customer: {
        name: "John Doe",
        phone: "+1 234 567 890",
        address: "123 Main St, New York, NY 10001",
      },
      items: [
        { name: "Classic Burger", quantity: 2, price: 12.99 },
        { name: "French Fries", quantity: 1, price: 4.99 },
        { name: "Cola", quantity: 2, price: 2.99 },
      ],
      status: "pending",
      time: "2024-03-02T14:30:00",
    },
    {
      id: 2,
      number: "ORD-002",
      customer: {
        name: "Jane Smith",
        phone: "+1 234 567 891",
        address: "456 Park Ave, New York, NY 10002",
      },
      items: [
        { name: "Margherita Pizza", quantity: 1, price: 14.99 },
        { name: "Garden Salad", quantity: 1, price: 8.99 },
      ],
      status: "enroute",
      time: "2024-03-02T14:15:00",
    },
    {
      id: 3,
      number: "ORD-003",
      customer: {
        name: "Mike Johnson",
        phone: "+1 234 567 892",
        address: "789 Broadway, New York, NY 10003",
      },
      items: [
        { name: "Chicken Wings", quantity: 2, price: 11.99 },
        { name: "Garlic Bread", quantity: 1, price: 4.99 },
        { name: "Sprite", quantity: 1, price: 2.99 },
      ],
      status: "pending",
      time: "2024-03-02T14:00:00",
    },
  ])

  const toggleExpand = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId)
  }

  const updateStatus = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ))
  }

  const calculateTotal = (items) => {
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
      month: 'short',
      day: 'numeric',
    })
  }

  return (
    <Container>
      <Header>
        <Title>Orders Management</Title>
        <Controls>
          <SearchContainer>
            <SearchIcon>
              <Search size={20} />
            </SearchIcon>
            <SearchInput type="text" placeholder="Search orders..." />
          </SearchContainer>
          <FilterButton>
            <Filter size={20} />
            Filter
          </FilterButton>
        </Controls>
      </Header>

      <OrdersGrid>
        {orders.map(order => (
          <OrderCard key={order.id}>
            <OrderHeader onClick={() => toggleExpand(order.id)} isExpanded={expandedOrder === order.id}>
              <OrderInfo>
                <OrderNumber>{order.number}</OrderNumber>
                <CustomerName>{order.customer.name}</CustomerName>
              </OrderInfo>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <StatusBadge status={order.status}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </StatusBadge>
                {expandedOrder === order.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
            </OrderHeader>

            {expandedOrder === order.id && (
              <OrderDetails>
                <DetailSection>
                  <DetailTitle>Customer Information</DetailTitle>
                  <ContactInfo>
                    <ContactItem>
                      <Phone size={16} />
                      {order.customer.phone}
                    </ContactItem>
                    <ContactItem>
                      <MapPin size={16} />
                      {order.customer.address}
                    </ContactItem>
                  </ContactInfo>
                </DetailSection>

                <DetailSection>
                  <DetailTitle>Order Details</DetailTitle>
                  <ItemsList>
                    {order.items.map((item, index) => (
                      <Item key={index}>
                        <span>{item.quantity}x {item.name}</span>
                        <Price>${(item.price * item.quantity).toFixed(2)}</Price>
                      </Item>
                    ))}
                    <Total>
                      <span>Total</span>
                      <span>${calculateTotal(order.items).toFixed(2)}</span>
                    </Total>
                  </ItemsList>
                </DetailSection>

                <DetailSection>
                  <DetailTitle>Order Status</DetailTitle>
                  <StatusActions>
                    <StatusButton
                      active={order.status === "pending"}
                      onClick={() => updateStatus(order.id, "pending")}
                    >
                      Pending
                    </StatusButton>
                    <StatusButton
                      active={order.status === "enroute"}
                      onClick={() => updateStatus(order.id, "enroute")}
                    >
                      Enroute
                    </StatusButton>
                    <StatusButton
                      active={order.status === "delivered"}
                      onClick={() => updateStatus(order.id, "delivered")}
                    >
                      Delivered
                    </StatusButton>
                  </StatusActions>
                </DetailSection>

                <DetailSection>
                  <DetailTitle>Order Time</DetailTitle>
                  <div style={{ fontSize: '0.875rem', color: props => props.theme.colors.mutedForeground }}>
                    {formatDate(order.time)}
                  </div>
                </DetailSection>
              </OrderDetails>
            )}
          </OrderCard>
        ))}
      </OrdersGrid>
    </Container>
  )
}
