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
const mockCategories = [
  { id: 1, name: "Italian", description: "Italian cuisine", restaurants: 12, status: "Active" },
  { id: 2, name: "Indian", description: "Indian cuisine", restaurants: 8, status: "Active" },
  { id: 3, name: "Fast Food", description: "Quick service restaurants", restaurants: 15, status: "Active" },
  { id: 4, name: "Japanese", description: "Japanese cuisine", restaurants: 6, status: "Active" },
  { id: 5, name: "Mexican", description: "Mexican cuisine", restaurants: 9, status: "Active" },
]

const CategoryManagement = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [categories] = useState(mockCategories)

  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div>
      <PageHeader>
        <Title>Category Management</Title>
        <ActionButtons>
          <Button className="secondary">
            <Filter size={16} />
            Filter
          </Button>
          <Button className="primary">
            <Plus size={16} />
            Add Category
          </Button>
        </ActionButtons>
      </PageHeader>

      <SearchContainer>
        <SearchInput>
          <Search size={16} color="#555" />
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchInput>
      </SearchContainer>

      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Restaurants</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCategories.map((category) => (
            <tr key={category.id}>
              <td>{category.name}</td>
              <td>{category.description}</td>
              <td>{category.restaurants}</td>
              <td>
                <span
                  style={{
                    padding: "4px 8px",
                    borderRadius: "4px",
                    backgroundColor: category.status === "Active" ? "#e3f2fd" : "#ffebee",
                    color: category.status === "Active" ? "#1976d2" : "#c62828",
                  }}
                >
                  {category.status}
                </span>
              </td>
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
        <PageInfo>Showing 1-5 of 5 categories</PageInfo>
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

export default CategoryManagement








