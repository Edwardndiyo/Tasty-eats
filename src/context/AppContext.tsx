"use client"

import * as React from "react"

interface User {
  id: string
  name: string
  email: string
  role: "customer" | "restaurant" | "admin"
}

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

interface AppState {
  user: User | null
  cart: CartItem[]
  isAuthenticated: boolean
}

interface AppContextType extends AppState {
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  addToCart: (item: Omit<CartItem, "quantity">) => void
  removeFromCart: (itemId: string) => void
  updateCartItemQuantity: (itemId: string, quantity: number) => void
}

const AppContext = React.createContext<AppContextType | undefined>(undefined)

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = React.useState<AppState>({
    user: null,
    cart: [],
    isAuthenticated: false,
  })

  const login = async (email: string, password: string) => {
    // Implement actual login logic here
    setState((prev) => ({
      ...prev,
      user: {
        id: "1",
        name: "John Doe",
        email: email,
        role: "customer",
      },
      isAuthenticated: true,
    }))
  }

  const logout = () => {
    setState((prev) => ({
      ...prev,
      user: null,
      isAuthenticated: false,
    }))
  }

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setState((prev) => {
      const existingItem = prev.cart.find((i) => i.id === item.id)
      if (existingItem) {
        return {
          ...prev,
          cart: prev.cart.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)),
        }
      }
      return {
        ...prev,
        cart: [...prev.cart, { ...item, quantity: 1 }],
      }
    })
  }

  const removeFromCart = (itemId: string) => {
    setState((prev) => ({
      ...prev,
      cart: prev.cart.filter((item) => item.id !== itemId),
    }))
  }

  const updateCartItemQuantity = (itemId: string, quantity: number) => {
    setState((prev) => ({
      ...prev,
      cart: prev.cart.map((item) => (item.id === itemId ? { ...item, quantity } : item)),
    }))
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        login,
        logout,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  const context = React.useContext(AppContext)
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider")
  }
  return context
}

