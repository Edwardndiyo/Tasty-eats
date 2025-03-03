"use client"

import { useState } from "react"
import styled from "styled-components"
import { Search, Filter, Eye, Download } from "lucide-react"

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #333;
`

const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  
  &.primary {
    background-color: #4361ee;
    color: white;
    border: none;
    
    &:hover {
      background-color: #3a56d4;
    }
  }
  
  &.secondary {
    background-color: white;
    color: #333;
    border: 1px solid #ddd;
    
    &:hover {
      background-color: #f8f9fa;
    }
  }
`

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  gap: 12px;
`

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 400px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 8px 12px;
  
  input {
    border: none;
    outline: none;
    width: 100%;
    margin-left: 8px;
  }
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid #eee;
  }
  
  th {
    font-weight: 600;
    color: #555;
    background-color: #f8f9fa;
  }
  
  tr:hover {
    background-color: #f8f9fa;
  }
`

const ActionIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: #555;
  padding: 4px;
  border-radius: 4px;
  
  &:hover {
    background-color: #eee;
  }
  
  &.view {
    color: #2e7d32;
  }
  
  &.download {
    color: #4361ee;
  }
`

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`

const PageInfo = styled.div`
  color: #555;
`

const PageButtons = styled.div`
  display: flex;
  gap: 8px;
`

const PageButton = styled.button`
  padding: 6px 12px;
  border: 1px solid #ddd;
  background-color: ${(props) => (props.active ? "#4361ee" : "white")};
  color: ${(props) => (props.active ? "white" : "#333")};
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: ${(props) => (props.active ? "#3a56d4" : "#f8f9fa")};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

// Mock data
const mockOrders = [
  {
    id: "ORD-1001",
    customer: "John Doe",
    restaurant: "Tasty Bites",
    amount: "$45.90",
    status: "Delivered",
    payment: "Credit Card",
    date: "2023-05-15 14:30",
  },
  {
    id: "ORD-1002",
    customer: "Emily Davis",
    restaurant: "Spice Garden",
    amount: "$32.50",
    status: "Processing",
    payment: "PayPal",
    date: "2023-05-15 15:45",
  },
  {
    id: "ORD-1003",
    customer: "Michael Wilson",
    restaurant: "Burger Palace",
    amount: "$28.75",
    status: "Delivered",
    payment: "Credit Card",
    date: "2023-05-14 12:20",
  },
  {
    id: "ORD-1004",
    customer: "Sarah Johnson",
    restaurant: "Sushi World",
    amount: "$52.30",
    status: "Cancelled",
    payment: "Debit Card",
    date: "2023-05-14 18:10",
  },
  {
    id: "ORD-1005",
    customer: "Robert Brown",
    restaurant: "Taco Fiesta",
    amount: "$19.95",
    status: "Delivered",
    payment: "Cash",
    date: "2023-05-13 19:25",
  },
]

const OrderManagement = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [orders] = useState(mockOrders)

  const filteredOrders = orders.filter(
    (order) =>
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.restaurant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.status.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div>
      <PageHeader>
        <Title>Order Management</Title>
        <ActionButtons>
          <Button className="secondary">
            <Filter size={16} />
            Filter
          </Button>
          <Button className="primary">
            <Download size={16} />
            Export
          </Button>
        </ActionButtons>
      </PageHeader>

      <SearchContainer>
        <SearchInput>
          <Search size={16} color="#555" />
          <input
            type="text"
            placeholder="Search orders..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchInput>
      </SearchContainer>

      <Table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Restaurant</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Payment</th>
            <th>Date & Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.restaurant}</td>
              <td>{order.amount}</td>
              <td>
                <span
                  style={{
                    padding: "4px 8px",
                    borderRadius: "4px",
                    backgroundColor:
                      order.status === "Delivered" ? "#e8f5e9" : order.status === "Processing" ? "#e3f2fd" : "#ffebee",
                    color:
                      order.status === "Delivered" ? "#2e7d32" : order.status === "Processing" ? "#1976d2" : "#c62828",
                  }}
                >
                  {order.status}
                </span>
              </td>
              <td>{order.payment}</td>
              <td>{order.date}</td>
              <td>
                <div style={{ display: "flex", gap: "8px" }}>
                  <ActionIcon className="view">
                    <Eye size={16} />
                  </ActionIcon>
                  <ActionIcon className="download">
                    <Download size={16} />
                  </ActionIcon>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination>
        <PageInfo>Showing 1-5 of 5 orders</PageInfo>
        <PageButtons>
          <PageButton disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
            Previous
          </PageButton>
          <PageButton active={currentPage === 1} onClick={() => setCurrentPage(1)}>
            1
          </PageButton>
          <PageButton disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage + 1)}>
            Next
          </PageButton>
        </PageButtons>
      </Pagination>
    </div>
  )
}

export default OrderManagement

