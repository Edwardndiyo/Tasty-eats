
// "use client"

// import * as React from "react"
// import styled from "styled-components"
// import { Users, ShoppingBag, DollarSign, TrendingUp } from "react-feather"

// const Container = styled.div`
//   padding: ${({ theme }) => theme.spacing.lg};
// `

// const StatsGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
//   gap: ${({ theme }) => theme.spacing.lg};
//   margin-bottom: ${({ theme }) => theme.spacing.xl};
// `

// const StatCard = styled.div`
//   background: ${({ theme }) => theme.colors.background};
//   border-radius: 12px;
//   padding: ${({ theme }) => theme.spacing.lg};
//   box-shadow: ${({ theme }) => theme.shadows.sm};
// `

// const StatIcon = styled.div`
//   width: 48px;
//   height: 48px;
//   border-radius: 24px;
//   background: ${({ theme }) => theme.colors.primary}11;
//   color: ${({ theme }) => theme.colors.primary};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: ${({ theme }) => theme.spacing.md};
// `

// const StatValue = styled.div`
//   font-size: ${({ theme }) => theme.typography.h2.fontSize};
//   font-weight: 600;
//   margin-bottom: ${({ theme }) => theme.spacing.xs};
// `

// const StatLabel = styled.div`
//   color: ${({ theme }) => theme.colors.text.secondary};
//   font-size: ${({ theme }) => theme.typography.small.fontSize};
// `

// const ChartContainer = styled.div`
//   background: ${({ theme }) => theme.colors.background};
//   border-radius: 12px;
//   padding: ${({ theme }) => theme.spacing.lg};
//   box-shadow: ${({ theme }) => theme.shadows.sm};
//   margin-bottom: ${({ theme }) => theme.spacing.xl};
// `

// const Chart = styled.canvas`
//   width: 100%;
//   height: 300px;
// `

// export const AdminDashboard: React.FC = () => {
//   const chartRef = React.useRef<HTMLCanvasElement>(null)

//   React.useEffect(() => {
//     if (chartRef.current) {
//       const ctx = chartRef.current.getContext("2d")
//       if (ctx) {
//         // Simple line chart implementation
//         const data = {
//           labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//           values: [1200, 1900, 1500, 2100, 2400, 2800],
//         }

//         // Set canvas size
//         chartRef.current.width = chartRef.current.offsetWidth
//         chartRef.current.height = chartRef.current.offsetHeight

//         // Calculate scales
//         const maxValue = Math.max(...data.values)
//         const padding = 40
//         const chartHeight = chartRef.current.height - padding * 2
//         const chartWidth = chartRef.current.width - padding * 2

//         // Draw grid
//         ctx.strokeStyle = "#eee"
//         ctx.beginPath()
//         for (let i = 0; i <= 5; i++) {
//           const y = padding + (chartHeight * i) / 5
//           ctx.moveTo(padding, y)
//           ctx.lineTo(chartRef.current.width - padding, y)
//         }
//         ctx.stroke()

//         // Draw line
//         ctx.strokeStyle = "#FF4B2B"
//         ctx.lineWidth = 2
//         ctx.beginPath()
//         data.values.forEach((value, index) => {
//           const x = padding + (chartWidth * index) / (data.values.length - 1)
//           const y = padding + chartHeight - (chartHeight * value) / maxValue
//           if (index === 0) {
//             ctx.moveTo(x, y)
//           } else {
//             ctx.lineTo(x, y)
//           }
//         })
//         ctx.stroke()

//         // Draw points
//         ctx.fillStyle = "#FF4B2B"
//         data.values.forEach((value, index) => {
//           const x = padding + (chartWidth * index) / (data.values.length - 1)
//           const y = padding + chartHeight - (chartHeight * value) / maxValue
//           ctx.beginPath()
//           ctx.arc(x, y, 4, 0, Math.PI * 2)
//           ctx.fill()
//         })

//         // Draw labels
//         ctx.fillStyle = "#666"
//         ctx.font = "12px Arial"
//         ctx.textAlign = "center"
//         data.labels.forEach((label, index) => {
//           const x = padding + (chartWidth * index) / (data.values.length - 1)
//           ctx.fillText(label, x, chartRef.current!.height - padding / 2)
//         })
//       }
//     }
//   }, [])

//   return (
//     <Container>
//       <h2>Dashboard Overview</h2>

//       <StatsGrid>
//         <StatCard>
//           <StatIcon>
//             <Users size={24} />
//           </StatIcon>
//           <StatValue>1,234</StatValue>
//           <StatLabel>Total Users</StatLabel>
//         </StatCard>

//         <StatCard>
//           <StatIcon>
//             <ShoppingBag size={24} />
//           </StatIcon>
//           <StatValue>856</StatValue>
//           <StatLabel>Total Orders</StatLabel>
//         </StatCard>

//         <StatCard>
//           <StatIcon>
//             <DollarSign size={24} />
//           </StatIcon>
//           <StatValue>$12,345</StatValue>
//           <StatLabel>Total Revenue</StatLabel>
//         </StatCard>

//         <StatCard>
//           <StatIcon>
//             <TrendingUp size={24} />
//           </StatIcon>
//           <StatValue>23%</StatValue>
//           <StatLabel>Growth Rate</StatLabel>
//         </StatCard>
//       </StatsGrid>

//       <ChartContainer>
//         <h3>Revenue Trends</h3>
//         <Chart ref={chartRef} />
//       </ChartContainer>
//     </Container>
//   )
// }








"use client"

import * as React from "react"
import styled from "styled-components"
import { Users, ShoppingBag, DollarSign, TrendingUp } from "react-feather"

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`

const StatCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`

const StatIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.primary}11;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const StatValue = styled.div`
  font-size: ${({ theme }) => theme.typography.h2.fontSize};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

const StatLabel = styled.div`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.small.fontSize};
`

const ChartContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  overflow-x: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`

const Chart = styled.canvas`
  width: 100%;
  height: 300px;
`

export const AdminDashboard: React.FC = () => {
  const chartRef = React.useRef<HTMLCanvasElement>(null)

  const updateChartSize = React.useCallback(() => {
    if (chartRef.current) {
      const container = chartRef.current.parentElement
      if (container) {
        chartRef.current.width = container.clientWidth - 32 // Adjust for padding
        chartRef.current.height = Math.min(300, window.innerHeight * 0.4)
      }
    }
  }, [])

  React.useEffect(() => {
    updateChartSize()
    window.addEventListener("resize", updateChartSize)
    return () => window.removeEventListener("resize", updateChartSize)
  }, [updateChartSize])

  React.useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d")
      if (ctx) {
        // Simple line chart implementation
        const data = {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          values: [1200, 1900, 1500, 2100, 2400, 2800],
        }

        // Set canvas size
        chartRef.current.width = chartRef.current.offsetWidth
        chartRef.current.height = chartRef.current.offsetHeight

        // Calculate scales
        const maxValue = Math.max(...data.values)
        const padding = 40
        const chartHeight = chartRef.current.height - padding * 2
        const chartWidth = chartRef.current.width - padding * 2

        // Draw grid
        ctx.strokeStyle = "#eee"
        ctx.beginPath()
        for (let i = 0; i <= 5; i++) {
          const y = padding + (chartHeight * i) / 5
          ctx.moveTo(padding, y)
          ctx.lineTo(chartRef.current.width - padding, y)
        }
        ctx.stroke()

        // Draw line
        ctx.strokeStyle = "#FF4B2B"
        ctx.lineWidth = 2
        ctx.beginPath()
        data.values.forEach((value, index) => {
          const x = padding + (chartWidth * index) / (data.values.length - 1)
          const y = padding + chartHeight - (chartHeight * value) / maxValue
          if (index === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        })
        ctx.stroke()

        // Draw points
        ctx.fillStyle = "#FF4B2B"
        data.values.forEach((value, index) => {
          const x = padding + (chartWidth * index) / (data.values.length - 1)
          const y = padding + chartHeight - (chartHeight * value) / maxValue
          ctx.beginPath()
          ctx.arc(x, y, 4, 0, Math.PI * 2)
          ctx.fill()
        })

        // Draw labels
        ctx.fillStyle = "#666"
        ctx.font = "12px Arial"
        ctx.textAlign = "center"
        data.labels.forEach((label, index) => {
          const x = padding + (chartWidth * index) / (data.values.length - 1)
          ctx.fillText(label, x, chartRef.current!.height - padding / 2)
        })
      }
    }
  }, [])

  return (
    <Container>
      <h2>Dashboard Overview</h2>

      <StatsGrid>
        <StatCard>
          <StatIcon>
            <Users size={24} />
          </StatIcon>
          <StatValue>1,234</StatValue>
          <StatLabel>Total Users</StatLabel>
        </StatCard>

        <StatCard>
          <StatIcon>
            <ShoppingBag size={24} />
          </StatIcon>
          <StatValue>856</StatValue>
          <StatLabel>Total Orders</StatLabel>
        </StatCard>

        <StatCard>
          <StatIcon>
            <DollarSign size={24} />
          </StatIcon>
          <StatValue>$12,345</StatValue>
          <StatLabel>Total Revenue</StatLabel>
        </StatCard>

        <StatCard>
          <StatIcon>
            <TrendingUp size={24} />
          </StatIcon>
          <StatValue>23%</StatValue>
          <StatLabel>Growth Rate</StatLabel>
        </StatCard>
      </StatsGrid>

      <ChartContainer>
        <h3>Revenue Trends</h3>
        <Chart ref={chartRef} />
      </ChartContainer>
    </Container>
  )
}

