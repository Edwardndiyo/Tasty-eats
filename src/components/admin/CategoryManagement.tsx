"use client"

import * as React from "react"
import styled from "styled-components"
import { Plus, Edit2, Trash2 } from "react-feather"
import { Button } from "../common/Button"

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`

const Card = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const CategoryForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.text.secondary}33;
  border-radius: 6px;
  font-size: ${({ theme }) => theme.typography.body.fontSize};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

interface Category {
  id: string
  name: string
  description: string
  type: "category" | "foodType"
}

export const CategoryManagement: React.FC = () => {
  const [items, setItems] = React.useState<Category[]>([])
  const [isAdding, setIsAdding] = React.useState(false)
  const [editingId, setEditingId] = React.useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name") as string
    const description = formData.get("description") as string
    const type = formData.get("type") as "category" | "foodType"

    if (editingId) {
      setItems(items.map((item) => (item.id === editingId ? { ...item, name, description, type } : item)))
      setEditingId(null)
    } else {
      setItems([
        ...items,
        {
          id: Date.now().toString(),
          name,
          description,
          type,
        },
      ])
    }
    setIsAdding(false)
  }

  const handleDelete = (id: string) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const handleEdit = (item: Category) => {
    setEditingId(item.id)
    setIsAdding(true)
  }

  return (
    <Container>
      <Header>
        <h2>Category & Food Type Management</h2>
        <Button onClick={() => setIsAdding(true)}>
          <Plus size={18} />
          Add New
        </Button>
      </Header>

      {isAdding && (
        <Card style={{ marginBottom: "24px" }}>
          <CategoryForm onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <Input
                id="name"
                name="name"
                required
                defaultValue={editingId ? items.find((i) => i.id === editingId)?.name : ""}
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <Input
                id="description"
                name="description"
                defaultValue={editingId ? items.find((i) => i.id === editingId)?.description : ""}
              />
            </div>
            <div>
              <label htmlFor="type">Type</label>
              <select
                id="type"
                name="type"
                defaultValue={editingId ? items.find((i) => i.id === editingId)?.type : "category"}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "6px",
                  border: "1px solid #ddd",
                }}
              >
                <option value="category">Category</option>
                <option value="foodType">Food Type</option>
              </select>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <Button type="submit">{editingId ? "Update" : "Add"}</Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setIsAdding(false)
                  setEditingId(null)
                }}
              >
                Cancel
              </Button>
            </div>
          </CategoryForm>
        </Card>
      )}

      <Grid>
        {items.map((item) => (
          <Card key={item.id}>
            <div
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}
            >
              <h3>{item.name}</h3>
              <div style={{ display: "flex", gap: "8px" }}>
                <Button variant="outline" size="small" onClick={() => handleEdit(item)}>
                  <Edit2 size={16} />
                </Button>
                <Button variant="outline" size="small" onClick={() => handleDelete(item.id)}>
                  <Trash2 size={16} />
                </Button>
              </div>
            </div>
            <p style={{ color: "#666", fontSize: "14px" }}>{item.description}</p>
            <span
              style={{
                display: "inline-block",
                padding: "4px 8px",
                borderRadius: "4px",
                backgroundColor: item.type === "category" ? "#e3f2fd" : "#fce4ec",
                color: item.type === "category" ? "#1976d2" : "#c2185b",
                fontSize: "12px",
                marginTop: "8px",
              }}
            >
              {item.type === "category" ? "Category" : "Food Type"}
            </span>
          </Card>
        ))}
      </Grid>
    </Container>
  )
}

