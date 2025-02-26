"use client"

import * as React from "react"
import styled from "styled-components"
import { Download } from "react-feather"
import { Button } from "../common/Button"

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`

const ReportCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: ${({ theme }) => theme.shadows.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const FilterSection = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;
`

const Select = styled.select`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.text.secondary}33;
  border-radius: 6px;
  min-width: 200px;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: ${({ theme }) => theme.spacing.lg};
`

const Th = styled.th`
  text-align: left;
  padding: ${({ theme }) => theme.spacing.sm};
  border-bottom: 2px solid ${({ theme }) => theme.colors.text.secondary}22;
`

const Td = styled.td`
  padding: ${({ theme }) => theme.spacing.sm};
  border-bottom: 1px solid ${({ theme }) => theme.colors.text.secondary}11;
`

export const ReportGeneration: React.FC = () => {
  const [reportType, setReportType] = React.useState("revenue")
  const [timeFrame, setTimeFrame] = React.useState("week")

  const handleExport = (format: "csv" | "pdf") => {
    // Implement export logic
    console.log(`Exporting as ${format}...`)
  }

  return (
    <Container>
      <h2>Report Generation</h2>

      <FilterSection>
        <div>
          <label htmlFor="reportType">Report Type</label>
          <Select id="reportType" value={reportType} onChange={(e) => setReportType(e.target.value)}>
            <option value="revenue">Revenue Report</option>
            <option value="orders">Orders Report</option>
            <option value="users">User Engagement Report</option>
            <option value="restaurants">Restaurant Performance</option>
          </Select>
        </div>

        <div>
          <label htmlFor="timeFrame">Time Frame</label>
          <Select id="timeFrame" value={timeFrame} onChange={(e) => setTimeFrame(e.target.value)}>
            <option value="day">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </Select>
        </div>

        <div style={{ marginLeft: "auto" }}>
          <Button variant="outline" onClick={() => handleExport("csv")}>
            <Download size={18} />
            Export CSV
          </Button>
          <Button variant="outline" style={{ marginLeft: "8px" }} onClick={() => handleExport("pdf")}>
            <Download size={18} />
            Export PDF
          </Button>
        </div>
      </FilterSection>

      <ReportCard>
        <h3>Summary</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
            marginTop: "16px",
          }}
        >
          <div>
            <div style={{ color: "#666" }}>Total Revenue</div>
            <div style={{ fontSize: "24px", fontWeight: "bold" }}>$12,345</div>
          </div>
          <div>
            <div style={{ color: "#666" }}>Orders</div>
            <div style={{ fontSize: "24px", fontWeight: "bold" }}>234</div>
          </div>
          <div>
            <div style={{ color: "#666" }}>Average Order Value</div>
            <div style={{ fontSize: "24px", fontWeight: "bold" }}>$52.75</div>
          </div>
        </div>
      </ReportCard>

      <ReportCard>
        <h3>Detailed Report</h3>
        <Table>
          <thead>
            <tr>
              <Th>Date</Th>
              <Th>Orders</Th>
              <Th>Revenue</Th>
              <Th>Avg. Order Value</Th>
            </tr>
          </thead>
          <tbody>
            {/* Sample data */}
            <tr>
              <Td>2024-02-25</Td>
              <Td>45</Td>
              <Td>$2,345.00</Td>
              <Td>$52.11</Td>
            </tr>
            <tr>
              <Td>2024-02-24</Td>
              <Td>38</Td>
              <Td>$1,987.00</Td>
              <Td>$52.29</Td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </Table>
      </ReportCard>
    </Container>
  )
}

