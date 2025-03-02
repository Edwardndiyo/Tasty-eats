"use client"

import { useState } from "react"
import styled from "styled-components"
import { X } from "lucide-react"

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`

const ModalContent = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 32rem;
  max-height: 90vh;
  overflow-y: auto;
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`

const ModalTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
`

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.375rem;
  border: none;
  background: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.mutedForeground};

  &:hover {
    background-color: ${(props) => props.theme.colors.muted};
    color: ${(props) => props.theme.colors.foreground};
  }
`

const Form = styled.form`
  padding: 1.5rem;
`

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
`

const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  padding: 0 0.75rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.375rem;
  background-color: white;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors.primary};
  }
`

const TextArea = styled.textarea`
  width: 100%;
  min-height: 6rem;
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.375rem;
  background-color: white;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors.primary};
  }
`

const Select = styled.select`
  width: 100%;
  height: 2.5rem;
  padding: 0 0.75rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.375rem;
  background-color: white;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors.primary};
  }
`

const ImagePreview = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  height: 12rem;
  border-radius: 0.375rem;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.muted};
`

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`

const Button = styled.button`
  height: 2.5rem;
  padding: 0 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${(props) =>
    props.variant === "primary"
      ? `
    background-color: ${props.theme.colors.primary};
    color: ${props.theme.colors.primaryForeground};
    border: none;

    &:hover {
      background-color: ${props.theme.colors.primaryDark};
    }
  `
      : `
    background-color: white;
    color: ${props.theme.colors.foreground};
    border: 1px solid ${props.theme.colors.border};

    &:hover {
      background-color: ${props.theme.colors.muted};
    }
  `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export default function DishForm({ isOpen, onClose, initialData = null }) {
  const [formData, setFormData] = useState(
    initialData || {
      name: "",
      price: "",
      description: "",
      image: "",
      type: "non-veg",
    },
  )
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Implement your save logic here
      await new Promise((resolve) => setTimeout(resolve, 1000))
      onClose()
    } catch (error) {
      console.error("Error saving dish:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  if (!isOpen) return null

  return (
    <Modal onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{initialData ? "Edit Dish" : "Add New Dish"}</ModalTitle>
          <CloseButton onClick={onClose}>
            <X size={20} />
          </CloseButton>
        </ModalHeader>

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Dish Name</Label>
            <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="price">Price</Label>
            <Input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              min="0"
              step="0.01"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="description">Description</Label>
            <TextArea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="image">Image URL</Label>
            <Input type="url" id="image" name="image" value={formData.image} onChange={handleChange} required />
            {formData.image && (
              <ImagePreview>
                <PreviewImage src={formData.image || "/placeholder.svg"} alt="Preview" />
              </ImagePreview>
            )}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="type">Food Type</Label>
            <Select id="type" name="type" value={formData.type} onChange={handleChange} required>
              <option value="veg">Vegetarian</option>
              <option value="non-veg">Non-Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="halal">Halal</option>
            </Select>
          </FormGroup>

          <ButtonGroup>
            <Button type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? "Saving..." : "Save Dish"}
            </Button>
          </ButtonGroup>
        </Form>
      </ModalContent>
    </Modal>
  )
}

