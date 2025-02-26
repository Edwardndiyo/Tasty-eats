// import * as React from "react"
// import styled from "styled-components"
// import { Plus, Edit2, Trash2 } from "react-feather"
// import { Button } from "../common/Button"

// const Container = styled.div`
//   padding: ${({ theme }) => theme.spacing.lg};
// `

// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: ${({ theme }) => theme.spacing.xl};
// `

// const Title = styled.h2`
//   margin: 0;
//   color: ${({ theme }) => theme.colors.text.primary};
// `

// const MenuGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//   gap: ${({ theme }) => theme.spacing.lg};
// `

// const MenuItem = styled.div`
//   background: ${({ theme }) => theme.colors.background};
//   border-radius: 12px;
//   padding: ${({ theme }) => theme.spacing.md};
//   box-shadow: ${({ theme }) => theme.shadows.sm};
// `

// const MenuItemImage = styled.img`
//   width: 100%;
//   height: 200px;
//   object-fit: cover;
//   border-radius: 8px;
//   margin-bottom: ${({ theme }) => theme.spacing.md};
// `

// const MenuItemActions = styled.div`
//   display: flex;
//   gap: ${({ theme }) => theme.spacing.sm};
//   margin-top: ${({ theme }) => theme.spacing.md};
// `

// interface MenuItem {
//   id: string
//   name: string
//   price: number
//   description: string
//   category: string
//   foodType: "veg" | "non-veg"
//   image: string
//   available: boolean
// }

// export const MenuManagement: React.FC = () => {
//   const [menuItems, setMenuItems] = React.useState<MenuItem[]>([])

//   const handleAddItem = () => {
//     // Implement add item logic
//   }

//   const handleEditItem = (id: string) => {
//     // Implement edit item logic
//   }

//   const handleDeleteItem = (id: string) => {
//     // Implement delete item logic
//   }

//   return (
//     <Container>
//       <Header>
//         <Title>Menu Management</Title>
//         <Button onClick={handleAddItem}>
//           <Plus size={18} />
//           Add New Item
//         </Button>
//       </Header>

//       <MenuGrid>
//         {menuItems.map((item) => (
//           <MenuItem key={item.id}>
//             <MenuItemImage src={item.image || "/placeholder.svg"} alt={item.name} />
//             <h3>{item.name}</h3>
//             <p>${item.price.toFixed(2)}</p>
//             <p>{item.description}</p>
//             <MenuItemActions>
//               <Button variant="outline" size="small" onClick={() => handleEditItem(item.id)}>
//                 <Edit2 size={16} />
//                 Edit
//               </Button>
//               <Button variant="outline" size="small" onClick={() => handleDeleteItem(item.id)}>
//                 <Trash2 size={16} />
//                 Delete
//               </Button>
//             </MenuItemActions>
//           </MenuItem>
//         ))}
//       </MenuGrid>
//     </Container>
//   )
// }





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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.md};
    
    > button {
      width: 100%;
    }
  }
`

const Title = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.primary};
`

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

const MenuItem = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.md};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`

const MenuItemImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const MenuItemActions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    
    > button {
      width: 100%;
    }
  }
`

interface MenuItem {
  id: string
  name: string
  price: number
  description: string
  category: string
  foodType: "veg" | "non-veg"
  image: string
  available: boolean
}

export const MenuManagement: React.FC = () => {
  const [menuItems, setMenuItems] = React.useState<MenuItem[]>([])

  const handleAddItem = () => {
    // Implement add item logic
  }

  const handleEditItem = (id: string) => {
    // Implement edit item logic
  }

  const handleDeleteItem = (id: string) => {
    // Implement delete item logic
  }

  return (
    <Container>
      <Header>
        <Title>Menu Management</Title>
        <Button onClick={handleAddItem}>
          <Plus size={18} />
          Add New Item
        </Button>
      </Header>

      <MenuGrid>
        {menuItems.map((item) => (
          <MenuItem key={item.id}>
            <MenuItemImage src={item.image || "/placeholder.svg"} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
            <p>{item.description}</p>
            <MenuItemActions>
              <Button variant="outline" size="small" onClick={() => handleEditItem(item.id)}>
                <Edit2 size={16} />
                Edit
              </Button>
              <Button variant="outline" size="small" onClick={() => handleDeleteItem(item.id)}>
                <Trash2 size={16} />
                Delete
              </Button>
            </MenuItemActions>
          </MenuItem>
        ))}
      </MenuGrid>
    </Container>
  )
}

