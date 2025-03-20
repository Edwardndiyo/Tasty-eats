import { useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import { BrowserRouter as Router, Routes, Route, useLocation, Outlet } from "react-router-dom"
import Navbar from "./pages/client/components/Navbar"
import RestaurantShowcase from "./pages/client/components/RestaurantShowcase"
import MealGrid from "./pages/client/components/MealGrid"
import FiltersSection from "./pages/client/components/FiltersSection"
import CallToAction from "./pages/client/components/CallToAction"
import Footer from "./pages/client/components/Footer"
import CartPage from "./pages/client/components/CartPage"
import CheckoutPage from "./pages/client/components/CheckoutPage"
import OrderSuccessPage from "./pages/client/components/OrderSuccessPage"
import RestaurantPage from "./pages/client/components/RestaurantPage"
import LoginPage from "./pages/client/components/auth/LoginPage"
import SignupPage from "./pages/client/components/auth/SignupPage"
import ProfilePage from "./pages/client/components/profile/ProfilePage"
import { GlobalStyles, theme } from "./pages/client/styles/global-styles"
import { AuthProvider } from "./contexts/AuthContext";

// Restaurant dashboard components
import DashboardLayout from "./pages/restaurant/components/layout/DashboardLayout"
import DishList from "./pages/restaurant/components/menu/DishList"
import MenuUpload from "./pages/restaurant/components/menu/MenuUpload"
import Dashboard from "./pages/restaurant/pages/Dashboard"
import OrdersManagement from "./pages/restaurant/components/orders/OrdersManagement"
import Settings from "./pages/restaurant/pages/Settings"

// Admin panel components
import AdminLayout from "./pages/admin/components/layout/AdminLayout"
import AdminDashboard from "./pages/admin/pages/Dashboard"
import UserManagement from "./pages/admin/pages/UserManagement"
import RestaurantManagement from "./pages/admin/pages/RestaurantManagement"
import OrderManagement from "./pages/admin/pages/OrderManagement"
import CategoryManagement from "./pages/admin/pages/CategoryManagement"
import FoodTypeManagement from "./pages/admin/pages/FoodTypeManagement"
import Reports from "./pages/admin/pages/Reports"
import SiteSettings from "./pages/admin/pages/SiteSettings"
import Notifications from "./pages/admin/pages/Notifications"

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  overflow-x: hidden;
`

const MainContent = styled.main`
  flex: 1;
  width: 100%;
`

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 1.5rem;
  }
`

const GridLayout = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-top: 2.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 250px 1fr;
  }
`

// Wrapper for Restaurant Dashboard routes
const RestaurantDashboardWrapper = () => {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  )
}

function AppContent() {
  const location = useLocation()
  const isRestaurantRoute = location.pathname.startsWith("/restaurant")
  const isAdminRoute = location.pathname.startsWith("/admin")
  const showNavbarFooter = !isRestaurantRoute && !isAdminRoute

  const [cartItems, setCartItems] = useState([])
  const [activeFilters, setActiveFilters] = useState({
    mealType: [],
    cuisine: [],
    priceRange: [],
    location: [],
    restaurantCategory: [],
  })
  const [searchQuery, setSearchQuery] = useState("")

  const addToCart = (meal) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === meal.id)
      if (existingItem) {
        return prev.map((item) => (item.id === meal.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { ...meal, quantity: 1 }]
    })
  }

  const removeFromCart = (mealId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== mealId))
  }

  const updateQuantity = (mealId, quantity) => {
    if (quantity < 1) {
      removeFromCart(mealId)
      return
    }

    setCartItems((prev) => prev.map((item) => (item.id === mealId ? { ...item, quantity } : item)))
  }

  const handleFilterChange = (filterType, value) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }))
  }

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  const clearCart = () => {
    setCartItems([])
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PageContainer>
        {showNavbarFooter && (
          <Navbar
            cartItems={cartItems}
            onSearch={handleSearch}
            onFilterChange={(value) => handleFilterChange("restaurantCategory", value)}
          />
        )}

        <MainContent>
          <Routes>
            {/* Client Routes */}
            <Route
              path="/"
              element={
                <Container>
                  <RestaurantShowcase />
                  <GridLayout>
                    <FiltersSection activeFilters={activeFilters} onFilterChange={handleFilterChange} />
                    <MealGrid filters={activeFilters} searchQuery={searchQuery} onAddToCart={addToCart} />
                  </GridLayout>
                  <CallToAction />
                </Container>
              }
            />
            <Route path="/restaurant/:id" element={<RestaurantPage onAddToCart={addToCart} />} />
            <Route
              path="/cart"
              element={
                <CartPage
                  cartItems={cartItems}
                  onUpdateQuantity={updateQuantity}
                  onRemoveItem={removeFromCart}
                  onAddToCart={addToCart}
                />
              }
            />
            <Route path="/checkout" element={<CheckoutPage cartItems={cartItems} onOrderComplete={clearCart} />} />
            <Route path="/order-success" element={<OrderSuccessPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/profile" element={<ProfilePage />} />

            {/* Restaurant Dashboard Routes */}
            <Route path="/restaurant" element={<RestaurantDashboardWrapper />}>
              <Route index element={<Dashboard />} />
              <Route path="menu" element={<DishList />} />
              <Route path="menu/upload" element={<MenuUpload />} />
              <Route path="orders" element={<OrdersManagement />} />
              <Route path="settings" element={<Settings />} />
            </Route>

            {/* Admin Panel Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="users" element={<UserManagement />} />
              {/* create notification component here */}
              <Route path="notifications" element={<Notifications />} /> 
              <Route path="restaurants" element={<RestaurantManagement />} />
              <Route path="orders" element={<OrderManagement />} />
              <Route path="categories" element={<CategoryManagement />} />
              <Route path="food-types" element={<FoodTypeManagement />} />
              <Route path="reports" element={<Reports />} />
              <Route path="settings" element={<SiteSettings />} />
            </Route>
          </Routes>
        </MainContent>

        {showNavbarFooter && <Footer />}
      </PageContainer>
    </ThemeProvider>
  )
}

function App() {
  return (
    <AuthProvider>
    <Router>
      <AppContent />
    </Router>
    </AuthProvider>
  )
}

export default App




