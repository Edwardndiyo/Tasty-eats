"use client"

import * as React from "react"
import styled from "styled-components"
import { Clock, Check, Truck, Package } from "react-feather"

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`

const OrderGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
`

const OrderCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const OrderStatus = styled.div<{ status: string }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: 16px;
  font-size: ${({ theme }) => theme.typography.small.fontSize};
  background: ${({ status, theme }) => {
    switch (status) {
      case "confirmed":
        return theme.colors.status.info + "33"
      case "preparing":
        return theme.colors.status.warning + "33"
      case "delivering":
        return theme.colors.primary + "33"
      case "delivered":
        return theme.colors.status.success + "33"
      default:
        return theme.colors.text.secondary + "33"
    }
  }};
  color: ${({ status, theme }) => {
    switch (status) {
      case "confirmed":
        return theme.colors.status.info
      case "preparing":
        return theme.colors.status.warning
      case "delivering":
        return theme.colors.primary
      case "delivered":
        return theme.colors.status.success
      default:
        return theme.colors.text.secondary
    }
  }};
`

const ProgressBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.lg} 0;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 2px;
    background: ${({ theme }) => theme.colors.text.secondary}22;
    z-index: 0;
  }
`

const ProgressStep = styled.div<{ active: boolean; completed: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: ${({ active, completed, theme }) =>
    completed ? theme.colors.status.success : active ? theme.colors.primary : theme.colors.background};
  border: 2px solid
    ${({ active, completed, theme }) =>
      completed ? theme.colors.status.success : active ? theme.colors.primary : theme.colors.text.secondary}22;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ active, completed, theme }) =>
    completed || active ? theme.colors.text.light : theme.colors.text.secondary};
  z-index: 1;
`

interface OrderItem {
  id: string
  name: string
  quantity: number
  price: number
}

interface Order {
  id: string
  restaurantName: string
  status: "confirmed" | "preparing" | "delivering" | "delivered"
  items: OrderItem[]
  total: number
  date: string
  eta?: string
}

export const OrderHistory = () => {
  const [orders, setOrders] = React.useState<Order[]>([
    {
      id: "ORD001",
      restaurantName: "Pizza Palace",
      status: "delivering",
      items: [
        { id: "1", name: "Margherita Pizza", quantity: 1, price: 12.99 },
        { id: "2", name: "Garlic Bread", quantity: 2, price: 4.99 },
      ],
      total: 22.97,
      date: "2024-02-25 14:30",
      eta: "15 minutes",
    },
    // Add more orders as needed
  ])

  const getStatusIcon = (status: Order["status"]) => {
    switch (status) {
      case "confirmed":
        return <Check size={18} />
      case "preparing":
        return <Package size={18} />
      case "delivering":
        return <Truck size={18} />
      case "delivered":
        return <Check size={18} />
    }
  }

  const getProgressSteps = (status: Order["status"]) => {
    const steps = ["confirmed", "preparing", "delivering", "delivered"]
    const currentIndex = steps.indexOf(status)

    return steps.map((step, index) => ({
      icon: getStatusIcon(step as Order["status"]),
      active: index === currentIndex,
      completed: index < currentIndex,
    }))
  }

  return (
    <Container>
      <h2>Order History</h2>

      <OrderGrid>
        {orders.map((order) => (
          <OrderCard key={order.id}>
            <OrderHeader>
              <div>
                <h3>{order.restaurantName}</h3>
                <div style={{ color: "#666", fontSize: "14px" }}>
                  Order #{order.id} • {order.date}
                </div>
              </div>
              <OrderStatus status={order.status}>
                {getStatusIcon(order.status)}
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </OrderStatus>
            </OrderHeader>

            <ProgressBar>
              {getProgressSteps(order.status).map((step, index) => (
                <ProgressStep key={index} active={step.active} completed={step.completed}>
                  {step.icon}
                </ProgressStep>
              ))}
            </ProgressBar>

            {order.eta && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#666",
                  fontSize: "14px",
                  marginBottom: "16px",
                }}
              >
                <Clock size={16} />
                Estimated delivery in {order.eta}
              </div>
            )}

            <div>
              {order.items.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "8px",
                  }}
                >
                  <span>
                    {item.quantity}x {item.name}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div
                style={{
                  borderTop: "1px dashed #eee",
                  marginTop: "16px",
                  paddingTop: "16px",
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "bold",
                }}
              >
                <span>Total</span>
                <span>${order.total.toFixed(2)}</span>
              </div>
            </div>
          </OrderCard>
        ))}
      </OrderGrid>
    </Container>
  )
}

