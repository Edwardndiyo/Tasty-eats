import { useState } from "react"
import styled from "styled-components"
import { Plus, Edit, Trash2, MoreHorizontal, X } from 'lucide-react'

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

const CategoryName = styled.div`
  font-weight: 500;
`

const CategoryDescription = styled.div`
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.mutedForeground};
  margin-top: 0.25rem;
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
  right: 1.5rem;
  margin-top: 0.5rem;
  width: 12rem;
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.375rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  z-index: 50;
`

const ActionMenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
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

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
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

export default function CategoryList() {
  const [activeMenu, setActiveMenu] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingCategory, setEditingCategory] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
  })
  
  // Sample data
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Fast Food",
      description: "Quick service restaurants offering burgers, fries, and other fast food items.",
      count: 15,
    },
    {
      id: 2,
      name: "Fine Dining",
      description: "Upscale restaurants with high-quality food and service.",
      count: 8,
    },
    {
      id: 3,
      name: "Casual Dining",
      description: "Relaxed restaurants with moderate prices and table service.",
      count: 12,
    },
    {
      id: 4,
      name: "Cafe",
      description: "Small restaurants serving coffee, snacks, and light meals.",
      count: 10,
    },
    {
      id: 5,
      name: "Food Truck",
      description: "Mobile food vendors offering a variety of cuisines.",
      count: 5,
    },
  ])
  
  const toggleMenu = (id) => {
    setActiveMenu(activeMenu === id ? null : id)
  }
  
  const openAddModal = () => {
    setEditingCategory(null)
    setFormData({ name: '', description: '' })
    setIsModalOpen(true)
  }
  
  const openEditModal = (category) => {
    setEditingCategory(category)
    setFormData({ name: category.name, description: category.description })
    setIsModalOpen(true)
    setActiveMenu(null)
  }
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (editingCategory) {
      // Update existing category
      setCategories(prev => 
        prev.map(cat => 
          cat.id === editingCategory.id 
            ? { ...cat, name: formData.name, description: formData.description }
            : cat
        )
      )
    } else {
      // Add new category
      const newCategory = {
        id: Date.now(),
        name: formData.name,
        description: formData.description,
        count: 0,
      }
      setCategories(prev => [...prev, newCategory])
    }
    
    setIsModalOpen(false)
  }
  
  const handleDelete = (id) => {
    setCategories(prev => prev.filter(cat => cat.id !== id))
    setActiveMenu(null)
  }
  
  return (
    <>
      <Container>
        <Header>
          <Title>Restaurant Categories</Title>
          <AddButton onClick={openAddModal}>
            <Plus size={20} />
            Add Category
          </AddButton>
        </Header>
        
        <Table>
          <thead>
            <tr>
              <Th>Category</Th>
              <Th>Restaurants</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <Tr key={category.id}>
                <Td>
                  <CategoryName>{category.name}</CategoryName>
                  <CategoryDescription>{category.description}</CategoryDescription>
                </Td>
                <Td>{category.count}</Td>
                <Td style={{ position: 'relative' }}>
                  <ActionButton onClick={() => toggleMenu(category.id)}>
                    <MoreHorizontal size={16} />
                  </ActionButton>
                  {activeMenu === category.id && (
                    <ActionMenu>
                      <ActionMenuItem onClick={() => openEditModal(category)}>
                        <Edit size={16} />
                        Edit Category
                      </ActionMenuItem>
                      <ActionMenuItem danger onClick={() => handleDelete(category.id)}>
                        <Trash2 size={16} />
                        Delete Category
                      </ActionMenuItem>
                    </ActionMenu>
                  )}
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Container>
      
      {isModalOpen && (
        <Modal onClick={() => setIsModalOpen(false)}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <ModalHeader>
              <ModalTitle>{editingCategory ? 'Edit Category' : 'Add Category'}</ModalTitle>
              <CloseButton onClick={() => setIsModalOpen(false)}>
                <X size={20} />
              </CloseButton>
            </ModalHeader>
            
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Category Name</Label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="description">Description</Label>
                <TextArea 
                  id="description" 
                  name="description" 
                  value={formData.description} 
                  onChange={handleInputChange} 
                  required 
                />
              </FormGroup>
              
              <ButtonGroup>
                <Button type="button" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary">
                  {editingCategory ? 'Update Category' : 'Add Category'}
                </Button>
              </ButtonGroup>
            </Form>
          </ModalContent>
        </Modal>
      )}
    </>
  )
}
