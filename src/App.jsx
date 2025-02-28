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







import { useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import Navbar from "./components/navbar"
import RestaurantShowcase from "./components/restaurant-showcase"
import MealGrid from "./components/meal-grid"
import FiltersSection from "./components/filters-section"
import CallToAction from "./components/call-to-action"
import Footer from "./components/footer"
import { GlobalStyles, theme } from "./styles/global-styles"

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background};
`

const MainContent = styled.main`
  flex: 1;
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

function App() {
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
    setCartItems((prev) => [...prev, meal])
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

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PageContainer>
        <Navbar
          cartItems={cartItems}
          onSearch={handleSearch}
          onFilterChange={(value) => handleFilterChange("restaurantCategory", value)}
        />

        <MainContent>
          <Container>
            <RestaurantShowcase />

            <GridLayout>
              <FiltersSection activeFilters={activeFilters} onFilterChange={handleFilterChange} />
              <MealGrid filters={activeFilters} searchQuery={searchQuery} onAddToCart={addToCart} />
            </GridLayout>

            <CallToAction />
          </Container>
        </MainContent>

        <Footer />
      </PageContainer>
    </ThemeProvider>
  )
}

export default App

