// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App







import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import GlobalStyles from "./styles/GlobalStyles"
import { AppProvider } from "./context/AppContext"

// Layouts
import { CustomerLayout } from "./components/layouts/CustomerLayout"
import { RestaurantLayout } from "./components/layouts/RestaurantLayout"
import { AdminLayout } from "./components/admin/AdminLayout"

// Customer Components
import { RegisterForm } from "./components/auth/RegisterForm"
import { LoginForm } from "./components/auth/LoginForm"
import { ForgotPassword } from "./components/auth/ForgotPassword"
import { SearchFilters } from "./components/search/SearchFilters"
import { FoodCard } from "./components/common/FoodCard"
import { Cart } from "./components/cart/Cart"
import { OrderHistory } from "./components/orders/OrderHistory"
import { ChangePassword } from "./components/auth/ChangePassword"

// Restaurant Components
import { RestaurantRegistration } from "./components/restaurant/RestaurantRegistration"
import { MenuManagement } from "./components/restaurant/MenuManagement"
import { OrdersManagement } from "./components/restaurant/OrdersManagement"
import { MediaManagement } from "./components/restaurant/MediaManagement"
import { RestaurantLogin } from "./components/restaurant/RestaurantLogin"

// Admin Components
import { AdminDashboard } from "./components/admin/Dashboard"
import { CategoryManagement } from "./components/admin/CategoryManagement"
import { ReportGeneration } from "./components/admin/ReportGeneration"
import { UserManagement } from "./components/admin/UserManagement"

// Home page component
const HomePage = () => {
  const sampleFoods = [
    {
      id: "1",
      name: "Margherita Pizza",
      description: "Fresh tomatoes, mozzarella, and basil",
      price: 12.99,
      image: "/placeholder.svg",
      rating: 4.5,
      type: "veg" as const,
    },
    // Add more sample foods
  ]

  return (
    <div>
      <SearchFilters />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "24px",
          marginTop: "24px",
        }}
      >
        {sampleFoods.map((food) => (
          <FoodCard key={food.id} {...food} />
        ))}
      </div>
    </div>
  )
}


const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppProvider>
          <Routes>
            {/* Customer Routes */}
            <Route
              path="/"
              element={
                <CustomerLayout>
                  <HomePage />
                </CustomerLayout>
              }
            />
            <Route
              path="/register"
              element={
                <CustomerLayout>
                  <RegisterForm />
                </CustomerLayout>
              }
            />
            <Route
              path="/login"
              element={
                <CustomerLayout>
                  <LoginForm />
                </CustomerLayout>
              }
            />
            <Route
              path="/forgot-password"
              element={
                <CustomerLayout>
                  <ForgotPassword />
                </CustomerLayout>
              }
            />
            <Route
              path="/cart"
              element={
                <CustomerLayout>
                  <Cart />
                </CustomerLayout>
              }
            />
            <Route
              path="/orders"
              element={
                <CustomerLayout>
                  <OrderHistory />
                </CustomerLayout>
              }
            />
            <Route
              path="/change-password"
              element={
                <CustomerLayout>
                  <ChangePassword />
                </CustomerLayout>
              }
            />

            {/* Restaurant Routes */}
            <Route path="/restaurant/register" element={<RestaurantRegistration />} />
            <Route path="/restaurant/login" element={<RestaurantLogin />} />
            <Route
              path="/restaurant/menu"
              element={
                <RestaurantLayout activePage="menu">
                  <MenuManagement />
                </RestaurantLayout>
              }
            />
            <Route
              path="/restaurant/orders"
              element={
                <RestaurantLayout activePage="orders">
                  <OrdersManagement />
                </RestaurantLayout>
              }
            />
            <Route
              path="/restaurant/media"
              element={
                <RestaurantLayout activePage="media">
                  <MediaManagement />
                </RestaurantLayout>
              }
            />
            <Route
              path="/restaurant/settings"
              element={
                <RestaurantLayout activePage="settings">
                  <ChangePassword />
                </RestaurantLayout>
              }
            />

            {/* Admin Routes */}
            <Route
              path="/admin"
              element={
                <AdminLayout activePage="dashboard">
                  <AdminDashboard />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/categories"
              element={
                <AdminLayout activePage="categories">
                  <CategoryManagement />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/reports"
              element={
                <AdminLayout activePage="reports">
                  <ReportGeneration />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/users"
              element={
                <AdminLayout activePage="users">
                  <UserManagement />
                </AdminLayout>
              }
            />

            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AppProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App; // ✅ Change from `export const App` to `export default App`


