"use client"

import { useState } from "react"
import styled from "styled-components"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import { DownloadCloud, Calendar } from "lucide-react"

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #333;
`

const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
`

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &.primary {
    background-color: #4361ee;
    color: white;
    border: none;
    
    &:hover {
      background-color: #3a56d4;
    }
  }

  &.secondary {
    background-color: white;
    color: #333;
    border: 1px solid #ddd;
    
    &:hover {
      background-color: #f8f9fa;
    }
  }
`

const ReportFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
  background-color: #f8f9fa;
  padding: 16px;
  border-radius: 8px;
`

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #555;
`

const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
  min-width: 160px;
`

const DateInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: white;
`

const ReportGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  margin-bottom: 24px;
`

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 20px;
`

const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;
`

const ChartContainer = styled.div`
  height: 300px;
  margin-bottom: 24px;
`

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 24px;
`

const StatCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
`

const StatValue = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #4361ee;
  margin-bottom: 8px;
`

const StatLabel = styled.div`
  font-size: 14px;
  color: #555;
`

// Mock data
const salesData = [
  { month: "Jan", sales: 5000 },
  { month: "Feb", sales: 6200 },
  { month: "Mar", sales: 7800 },
  { month: "Apr", sales: 7200 },
  { month: "May", sales: 8500 },
  { month: "Jun", sales: 9000 },
]

const orderData = [
  { month: "Jan", orders: 120 },
  { month: "Feb", orders: 140 },
  { month: "Mar", orders: 180 },
  { month: "Apr", orders: 170 },
  { month: "May", orders: 190 },
  { month: "Jun", orders: 210 },
]

const Reports = () => {
  const [reportType, setReportType] = useState("sales")
  const [timeFrame, setTimeFrame] = useState("monthly")

  return (
    <div>
      <PageHeader>
        <Title>Reports & Analytics</Title>
        <ActionButtons>
          <Button className="secondary">
            <Calendar size={16} />
            Select Date Range
          </Button>
          <Button className="primary">
            <DownloadCloud size={16} />
            Export Report
          </Button>
        </ActionButtons>
      </PageHeader>

      <ReportFilters>
        <FilterGroup>
          <Label>Report Type</Label>
          <Select value={reportType} onChange={(e) => setReportType(e.target.value)}>
            <option value="sales">Sales Report</option>
            <option value="orders">Order Report</option>
            <option value="customers">Customer Report</option>
            <option value="restaurants">Restaurant Report</option>
          </Select>
        </FilterGroup>

        <FilterGroup>
          <Label>Time Frame</Label>
          <Select value={timeFrame} onChange={(e) => setTimeFrame(e.target.value)}>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </Select>
        </FilterGroup>

        <FilterGroup>
          <Label>Start Date</Label>
          <DateInput type="date" defaultValue="2023-01-01" />
        </FilterGroup>

        <FilterGroup>
          <Label>End Date</Label>
          <DateInput type="date" defaultValue="2023-06-30" />
        </FilterGroup>
      </ReportFilters>

      <StatGrid>
        <StatCard>
          <StatValue>$43,500</StatValue>
          <StatLabel>Total Revenue</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>1,010</StatValue>
          <StatLabel>Total Orders</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>56</StatValue>
          <StatLabel>Active Restaurants</StatLabel>
        </StatCard>
        <StatCard>
          <StatValue>$43.07</StatValue>
          <StatLabel>Average Order Value</StatLabel>
        </StatCard>
      </StatGrid>

      <ReportGrid>
        <Card>
          <CardTitle>Revenue Overview</CardTitle>
          <ChartContainer>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => `$${value}`} />
                <Bar dataKey="sales" fill="#4361ee" />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </Card>

        <Card>
          <CardTitle>Order Trends</CardTitle>
          <ChartContainer>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={orderData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="orders" stroke="#4361ee" />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </Card>
      </ReportGrid>

      <Card>
        <CardTitle>Detailed Analysis</CardTitle>
        <p>
          This section would contain more detailed analysis, tables, and breakdowns of the selected report type. The
          data visualization would change based on the selected report type and time frame.
        </p>
      </Card>
    </div>
  )
}

export default Reports

