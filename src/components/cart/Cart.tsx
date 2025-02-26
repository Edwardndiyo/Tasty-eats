// "use client"

// import * as React from "react"
// import styled from "styled-components"
// import { Minus, Plus, Trash2 } from "react-feather"
// import { Button } from "../common/Button"

// const CartContainer = styled.div`
//   padding: ${({ theme }) => theme.spacing.lg};
//   background: ${({ theme }) => theme.colors.background};
//   border-radius: 12px;
//   box-shadow: ${({ theme }) => theme.shadows.sm};
// `

// const CartItem = styled.div`
//   display: flex;
//   align-items: center;
//   padding: ${({ theme }) => theme.spacing.md} 0;
//   border-bottom: 1px solid ${({ theme }) => theme.colors.text.secondary}22;

//   &:last-child {
//     border-bottom: none;
//   }
// `

// const ItemImage = styled.img`
//   width: 80px;
//   height: 80px;
//   border-radius: 8px;
//   object-fit: cover;
// `

// const ItemInfo = styled.div`
//   flex: 1;
//   margin-left: ${({ theme }) => theme.spacing.md};
// `

// const ItemName = styled.h4`
//   margin: 0;
//   color: ${({ theme }) => theme.colors.text.primary};
// `

// const ItemPrice = styled.div`
//   color: ${({ theme }) => theme.colors.primary};
//   font-weight: 600;
//   margin-top: ${({ theme }) => theme.spacing.xs};
// `

// const QuantityControl = styled.div`
//   display: flex;
//   align-items: center;
//   gap: ${({ theme }) => theme.spacing.sm};
// `

// const QuantityButton = styled.button`
//   background: transparent;
//   border: 1px solid ${({ theme }) => theme.colors.text.secondary}33;
//   border-radius: 4px;
//   padding: 4px;
//   cursor: pointer;
//   color: ${({ theme }) => theme.colors.text.primary};
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   &:hover {
//     background: ${({ theme }) => theme.colors.text.secondary}11;
//   }
// `

// const Summary = styled.div`
//   margin-top: ${({ theme }) => theme.spacing.xl};
//   padding-top: ${({ theme }) => theme.spacing.lg};
//   border-top: 2px solid ${({ theme }) => theme.colors.text.secondary}22;
// `

// const SummaryRow = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: ${({ theme }) => theme.spacing.sm};
//   color: ${({ theme }) => theme.colors.text.secondary};

//   &:last-child {
//     margin-top: ${({ theme }) => theme.spacing.md};
//     margin-bottom: 0;
//     color: ${({ theme }) => theme.colors.text.primary};
//     font-weight: 600;
//     font-size: 1.2em;
//   }
// `

// interface CartItem {
//   id: string
//   name: string
//   price: number
//   quantity: number
//   image: string
// }

// export const Cart = () => {
//   const [items, setItems] = React.useState<CartItem[]>([
//     {
//       id: "1",
//       name: "Margherita Pizza",
//       price: 12.99,
//       quantity: 1,
//       image: "/placeholder.svg",
//     },
//     // Add more items as needed
//   ])

//   const updateQuantity = (id: string, change: number) => {
//     setItems(
//       items
//         .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item))
//         .filter((item) => item.quantity > 0),
//     )
//   }

//   const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
//   const tax = subtotal * 0.1 // 10% tax
//   const total = subtotal + tax

//   return (
//     <CartContainer>
//       <h2>Your Cart</h2>

//       {items.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <>
//           {items.map((item) => (
//             <CartItem key={item.id}>
//               <ItemImage src={item.image} alt={item.name} />
//               <ItemInfo>
//                 <ItemName>{item.name}</ItemName>
//                 <ItemPrice>${(item.price * item.quantity).toFixed(2)}</ItemPrice>
//               </ItemInfo>
//               <QuantityControl>
//                 <QuantityButton onClick={() => updateQuantity(item.id, -1)}>
//                   <Minus size={16} />
//                 </QuantityButton>
//                 <span>{item.quantity}</span>
//                 <QuantityButton onClick={() => updateQuantity(item.id, 1)}>
//                   <Plus size={16} />
//                 </QuantityButton>
//                 <QuantityButton onClick={() => updateQuantity(item.id, -item.quantity)}>
//                   <Trash2 size={16} />
//                 </QuantityButton>
//               </QuantityControl>
//             </CartItem>
//           ))}

//           <Summary>
//             <SummaryRow>
//               <span>Subtotal</span>
//               <span>${subtotal.toFixed(2)}</span>
//             </SummaryRow>
//             <SummaryRow>
//               <span>Tax (10%)</span>
//               <span>${tax.toFixed(2)}</span>
//             </SummaryRow>
//             <SummaryRow>
//               <span>Total</span>
//               <span>${total.toFixed(2)}</span>
//             </SummaryRow>
//           </Summary>

//           <Button fullWidth style={{ marginTop: "24px" }}>
//             Proceed to Checkout
//           </Button>
//         </>
//       )}
//     </CartContainer>
//   )
// }








"use client"

import * as React from "react"
import styled from "styled-components"
import { Minus, Plus, Trash2 } from "react-feather"
import { Button } from "../common/Button"

const CartContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`

const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text.secondary}22;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.md};
  }
`

const ItemImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    height: 160px;
  }
`

const ItemInfo = styled.div`
  flex: 1;
  margin-left: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: 0;
    width: 100%;
  }
`

const ItemName = styled.h4`
  margin: 0;
  color: ${({ theme }) => theme.colors.text.primary};
`

const ItemPrice = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  margin-top: ${({ theme }) => theme.spacing.xs};
`

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    justify-content: space-between;
  }
`

const QuantityButton = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.text.secondary}33;
  border-radius: 4px;
  padding: 4px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.primary};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.colors.text.secondary}11;
  }
`

const Summary = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 2px solid ${({ theme }) => theme.colors.text.secondary}22;
`

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.secondary};

  &:last-child {
    margin-top: ${({ theme }) => theme.spacing.md};
    margin-bottom: 0;
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: 600;
    font-size: 1.2em;
  }
`

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export const Cart = () => {
  const [items, setItems] = React.useState<CartItem[]>([
    {
      id: "1",
      name: "Margherita Pizza",
      price: 12.99,
      quantity: 1,
      image: "/placeholder.svg",
    },
    // Add more items as needed
  ])

  const updateQuantity = (id: string, change: number) => {
    setItems(
      items
        .map((item) => (item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item))
        .filter((item) => item.quantity > 0),
    )
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.1 // 10% tax
  const total = subtotal + tax

  return (
    <CartContainer>
      <h2>Your Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {items.map((item) => (
            <CartItem key={item.id}>
              <ItemImage src={item.image} alt={item.name} />
              <ItemInfo>
                <ItemName>{item.name}</ItemName>
                <ItemPrice>${(item.price * item.quantity).toFixed(2)}</ItemPrice>
              </ItemInfo>
              <QuantityControl>
                <QuantityButton onClick={() => updateQuantity(item.id, -1)}>
                  <Minus size={16} />
                </QuantityButton>
                <span>{item.quantity}</span>
                <QuantityButton onClick={() => updateQuantity(item.id, 1)}>
                  <Plus size={16} />
                </QuantityButton>
                <QuantityButton onClick={() => updateQuantity(item.id, -item.quantity)}>
                  <Trash2 size={16} />
                </QuantityButton>
              </QuantityControl>
            </CartItem>
          ))}

          <Summary>
            <SummaryRow>
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </SummaryRow>
            <SummaryRow>
              <span>Tax (10%)</span>
              <span>${tax.toFixed(2)}</span>
            </SummaryRow>
            <SummaryRow>
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </SummaryRow>
          </Summary>

          <Button fullWidth style={{ marginTop: "24px" }}>
            Proceed to Checkout
          </Button>
        </>
      )}
    </CartContainer>
  )
}

