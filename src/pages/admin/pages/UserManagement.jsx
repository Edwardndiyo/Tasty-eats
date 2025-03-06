"use client"

import { useState } from "react"
import styled from "styled-components"
import { Search, Filter, Plus, Edit, Trash2 } from "lucide-react"

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
  
  &.edit {
    color: #4361ee;
  }
  
  &.delete {
    color: #e63946;
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
const mockUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Customer", status: "Active", created: "2023-01-15" },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Restaurant Owner",
    status: "Active",
    created: "2023-02-20",
  },
  {
    id: 3,
    name: "Robert Johnson",
    email: "robert@example.com",
    role: "Customer",
    status: "Inactive",
    created: "2023-03-10",
  },
  { id: 4, name: "Emily Davis", email: "emily@example.com", role: "Admin", status: "Active", created: "2023-01-05" },
  {
    id: 5,
    name: "Michael Wilson",
    email: "michael@example.com",
    role: "Restaurant Owner",
    status: "Active",
    created: "2023-04-12",
  },
]

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [users] = useState(mockUsers)

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div>
      <PageHeader>
        <Title>User Management</Title>
        <ActionButtons>
          <Button className="secondary">
            <Filter size={16} />
            Filter
          </Button>
          <Button className="primary">
            <Plus size={16} />
            Add User
          </Button>
        </ActionButtons>
      </PageHeader>

      <SearchContainer>
        <SearchInput>
          <Search size={16} color="#555" />
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchInput>
      </SearchContainer>

      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <span
                  style={{
                    padding: "4px 8px",
                    borderRadius: "4px",
                    backgroundColor: user.status === "Active" ? "#e3f2fd" : "#ffebee",
                    color: user.status === "Active" ? "#1976d2" : "#c62828",
                  }}
                >
                  {user.status}
                </span>
              </td>
              <td>{user.created}</td>
              <td>
                <div style={{ display: "flex", gap: "8px" }}>
                  <ActionIcon className="edit">
                    <Edit size={16} />
                  </ActionIcon>
                  <ActionIcon className="delete">
                    <Trash2 size={16} />
                  </ActionIcon>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination>
        <PageInfo>Showing 1-5 of 5 users</PageInfo>
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

export default UserManagement











