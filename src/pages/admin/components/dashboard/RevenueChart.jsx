"use client"

import { useState } from "react"
import styled from "styled-components"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

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

const TimeRangeSelector = styled.div`
  display: flex;
  gap: 0.5rem;
`

const TimeButton = styled.button`
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid ${(props) => (props.active ? "transparent" : props.theme.colors.border)};
  background-color: ${(props) => (props.active ? props.theme.colors.primary : "transparent")};
  color: ${(props) => (props.active ? props.theme.colors.primaryForeground : props.theme.colors.foreground)};
  cursor: pointer;
  
  &:hover {
    background-color: ${(props) => (props.active ? props.theme.colors.primaryDark : props.theme.colors.muted)};
  }
`

const ChartContainer = styled.div`
  padding: 1.5rem;
  height: 300px;
`

const CustomTooltip = styled.div`
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.375rem;
  padding: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`

const TooltipLabel = styled.div`
  font-weight: 500;
  margin-bottom: 0.25rem;
`

const TooltipValue = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.mutedForeground};
`

export default function RevenueChart() {
  const [timeRange, setTimeRange] = useState("week")

  // Sample data
  const weekData = [
    { name: "Mon", revenue: 4000 },
    { name: "Tue", revenue: 3000 },
    { name: "Wed", revenue: 5000 },
    { name: "Thu", revenue: 2780 },
    { name: "Fri", revenue: 6890 },
    { name: "Sat", revenue: 8390 },
    { name: "Sun", revenue: 7490 },
  ]

  const monthData = [
    { name: "Week 1", revenue: 18000 },
    { name: "Week 2", revenue: 22000 },
    { name: "Week 3", revenue: 19500 },
    { name: "Week 4", revenue: 25000 },
  ]

  const yearData = [
    { name: "Jan", revenue: 65000 },
    { name: "Feb", revenue: 59000 },
    { name: "Mar", revenue: 80000 },
    { name: "Apr", revenue: 81000 },
    { name: "May", revenue: 56000 },
    { name: "Jun", revenue: 55000 },
    { name: "Jul", revenue: 40000 },
    { name: "Aug", revenue: 60000 },
    { name: "Sep", revenue: 70000 },
    { name: "Oct", revenue: 90000 },
    { name: "Nov", revenue: 85000 },
    { name: "Dec", revenue: 100000 },
  ]

  const data = timeRange === "week" ? weekData : timeRange === "month" ? monthData : yearData

  const renderCustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <CustomTooltip>
          <TooltipLabel>{label}</TooltipLabel>
          <TooltipValue>${payload[0].value.toLocaleString()}</TooltipValue>
        </CustomTooltip>
      )
    }
    return null
  }

  return (
    <Container>
      <Header>
        <Title>Revenue Overview</Title>
        <TimeRangeSelector>
          <TimeButton active={timeRange === "week"} onClick={() => setTimeRange("week")}>
            Week
          </TimeButton>
          <TimeButton active={timeRange === "month"} onClick={() => setTimeRange("month")}>
            Month
          </TimeButton>
          <TimeButton active={timeRange === "year"} onClick={() => setTimeRange("year")}>
            Year
          </TimeButton>
        </TimeRangeSelector>
      </Header>

      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(value) => `$${value.toLocaleString()}`} width={80} />
            <Tooltip content={renderCustomTooltip} />
            <Bar dataKey="revenue" fill="#f97316" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </Container>
  )
}

