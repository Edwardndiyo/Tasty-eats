import * as React from "react"
import styled from "styled-components"
import { Clock, Check, Truck, Package } from "react-feather"
import { Button } from "../common/Button"

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`

const OrdersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`

const OrderCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  padding-bottom: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.text.secondary}22;
`

const OrderStatus = styled.span<{ status: string }>`
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: 16px;
  font-size: ${({ theme }) => theme.typography.small.fontSize};
  background: ${({ status, theme }) => {
    switch (status) {
      case "pending":
        return theme.colors.status.warning + "33"
      case "preparing":
        return theme.colors.status.info + "33"
      case "ready":
        return theme.colors.status.success + "33"
      default:
        return theme.colors.text.secondary + "33"
    }
  }};
  color: ${({ status, theme }) => {
    switch (status) {
      case "pending":
        return theme.colors.status.warning
      case "preparing":
        return theme.colors.status.info
      case "ready":
        return theme.colors.status.success
      default:
        return theme.colors.text.secondary
    }
  }};
`

interface OrderItem {
  id: string
  name: string
  quantity: number
  price: number
}

interface Order {
  id: string
  customerName: string
  status: "pending" | "preparing" | "ready" | "delivered"
  items: OrderItem[]
  total: number
  createdAt: string
}

export const OrdersManagement: React.FC = () => {
  const [orders, setOrders] = React.useState<Order[]>([])

  const handleUpdateStatus = (orderId: string, newStatus: Order["status"]) => {
    // Implement status update logic
  }

  const getStatusIcon = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return <Clock size={18} />
      case "preparing":
        return <Package size={18} />
      case "ready":
        return <Check size={18} />
      case "delivered":
        return <Truck size={18} />
    }
  }

  return (
    <Container>
      <h2>Orders Management</h2>
      <OrdersGrid>
        {orders.map((order) => (
          <OrderCard key={order.id}>
            <OrderHeader>
              <div>
                <h3>Order #{order.id}</h3>
                <p>{order.customerName}</p>
              </div>
              <OrderStatus status={order.status}>
                {getStatusIcon(order.status)}
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </OrderStatus>
            </OrderHeader>

            <div>
              {order.items.map((item) => (
                <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                  <span>
                    {item.quantity}x {item.name}
                  </span>
                  <span>${item.price.toFixed(2)}</span>
                </div>
              ))}
              <div style={{ borderTop: "1px dashed #eee", marginTop: "16px", paddingTop: "16px" }}>
                <strong>Total: ${order.total.toFixed(2)}</strong>
              </div>
            </div>

            <div style={{ marginTop: "16px" }}>
              {order.status !== "delivered" && (
                <Button
                  fullWidth
                  onClick={() => {
                    const nextStatus: Record<Order["status"], Order["status"]> = {
                      pending: "preparing",
                      preparing: "ready",
                      ready: "delivered",
                      delivered: "delivered",
                    }
                    handleUpdateStatus(order.id, nextStatus[order.status])
                  }}
                >
                  Mark as{" "}
                  {order.status === "pending" ? "Preparing" : order.status === "preparing" ? "Ready" : "Delivered"}
                </Button>
              )}
            </div>
          </OrderCard>
        ))}
      </OrdersGrid>
    </Container>
  )
}

