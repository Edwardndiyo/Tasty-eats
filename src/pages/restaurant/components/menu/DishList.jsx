"use client"

import { useState } from "react"
import styled from "styled-components"
import { MoreVertical, Plus } from "lucide-react"
import DishForm from "./DishForm"

const Container = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  overflow: hidden;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
`

const AddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 2.5rem;
  padding: 0 1rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryForeground};
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
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
  background-color: ${(props) => props.theme.colors.muted};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  &:first-child {
    padding-left: 1.5rem;
  }

  &:last-child {
    padding-right: 1.5rem;
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
  }
`

const DishImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 0.375rem;
  object-fit: cover;
`

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  height: 1.5rem;
  padding: 0 0.5rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: capitalize;
  
  ${(props) => {
    switch (props.type) {
      case "veg":
        return `
          background-color: #dcfce7;
          color: #166534;
        `
      case "non-veg":
        return `
          background-color: #fee2e2;
          color: #991b1b;
        `
      case "vegan":
        return `
          background-color: #dbeafe;
          color: #1e40af;
        `
      case "halal":
        return `
          background-color: #f3e8ff;
          color: #6b21a8;
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

const ActionMenu = styled.div`
  position: absolute;
  right: 0;
  margin-top: 0.5rem;
  width: 12rem;
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.375rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  z-index: 50;
`

const ActionMenuItem = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  text-align: left;
  border: none;
  background: none;
  font-size: 0.875rem;
  color: ${(props) => (props.danger ? props.theme.colors.destructive : props.theme.colors.foreground)};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.muted};
  }
`

export default function DishList() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [selectedDish, setSelectedDish] = useState(null)
  const [activeMenu, setActiveMenu] = useState(null)

  // Sample data
  const dishes = [
    {
      id: 1,
      name: "Classic Beef Burger",
      price: 12.99,
      type: "non-veg",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=80&h=80&fit=crop",
    },
    {
      id: 2,
      name: "Margherita Pizza",
      price: 14.99,
      type: "veg",
      image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=80&h=80&fit=crop",
    },
    {
      id: 3,
      name: "Buddha Bowl",
      price: 11.99,
      type: "vegan",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=80&h=80&fit=crop",
    },
  ]

  const handleEdit = (dish) => {
    setSelectedDish(dish)
    setIsFormOpen(true)
    setActiveMenu(null)
  }

  const handleDelete = (dish) => {
    // Implement delete logic
    setActiveMenu(null)
  }

  const toggleMenu = (e, id) => {
    e.stopPropagation()
    setActiveMenu(activeMenu === id ? null : id)
  }

  return (
    <>
      <Container>
        <Header>
          <Title>Menu Items</Title>
          <AddButton onClick={() => setIsFormOpen(true)}>
            <Plus size={20} />
            Add Dish
          </AddButton>
        </Header>

        <Table>
          <thead>
            <tr>
              <Th>Dish</Th>
              <Th>Type</Th>
              <Th>Price</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {dishes.map((dish) => (
              <Tr key={dish.id}>
                <Td>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <DishImage src={dish.image} alt={dish.name} />
                    <span>{dish.name}</span>
                  </div>
                </Td>
                <Td>
                  <Badge type={dish.type}>{dish.type}</Badge>
                </Td>
                <Td>${dish.price.toFixed(2)}</Td>
                <Td style={{ position: "relative" }}>
                  <ActionButton onClick={(e) => toggleMenu(e, dish.id)}>
                   <span> <MoreVertical size={20} /></span>
                  </ActionButton>
                  {activeMenu === dish.id && (
                    <ActionMenu>
                      <ActionMenuItem onClick={() => handleEdit(dish)}>Edit</ActionMenuItem>
                      <ActionMenuItem danger onClick={() => handleDelete(dish)}>
                        Delete
                      </ActionMenuItem>
                    </ActionMenu>
                  )}
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <DishForm
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false)
          setSelectedDish(null)
        }}
        initialData={selectedDish}
      />
    </>
  )
}

