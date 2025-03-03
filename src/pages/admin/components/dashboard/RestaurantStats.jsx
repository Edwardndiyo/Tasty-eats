import styled from "styled-components"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"

const Container = styled.div`
  background-color: white;
  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  overflow: hidden;
`

const Header = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
`

const ChartContainer = styled.div`
  padding: 1.5rem;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  width: 100%;
  margin-top: 1rem;
`

const StatItem = styled.div`
  text-align: center;
`

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => props.color};
`

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.mutedForeground};
`

export default function RestaurantStats() {
  // Sample data
  const data = [
    { name: "Fast Food", value: 35, color: "#f97316" },
    { name: "Fine Dining", value: 20, color: "#3b82f6" },
    { name: "Casual Dining", value: 25, color: "#10b981" },
    { name: "Cafe", value: 15, color: "#8b5cf6" },
    { name: "Food Truck", value: 5, color: "#f43f5e" },
  ]

  const COLORS = ["#f97316", "#3b82f6", "#10b981", "#8b5cf6", "#f43f5e"]

  const totalRestaurants = data.reduce((sum, item) => sum + item.value, 0)

  return (
    <Container>
      <Header>
        <Title>Restaurant Categories</Title>
      </Header>

      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>

        <StatsGrid>
          {data.map((item, index) => (
            <StatItem key={item.name}>
              <StatValue color={COLORS[index % COLORS.length]}>
                {Math.round((item.value / totalRestaurants) * 100)}%
              </StatValue>
              <StatLabel>{item.name}</StatLabel>
            </StatItem>
          ))}
        </StatsGrid>
      </ChartContainer>
    </Container>
  )
}

