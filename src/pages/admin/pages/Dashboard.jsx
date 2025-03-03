"use client"

import styled from "styled-components"
import { Users, UtensilsCrossed, ShoppingBag, DollarSign } from "lucide-react"
import StatCard from "../components/dashboard/StatCard"
import RecentUsers from "../components/dashboard/RecentUsers"
import RecentOrders from "../components/dashboard/RecentOrders"
import RevenueChart from "../components/dashboard/RevenueChart"
import RestaurantStats from "../components/dashboard/RestaurantStats"

const PageHeader = styled.div`
  margin-bottom: 2rem;
`

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`

const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.mutedForeground};
`

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`

const ContentGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`

const FullWidthSection = styled.div`
  grid-column: 1 / -1;
`

export default function Dashboard() {
  return (
    <div>
      <PageHeader>
        <Title>Dashboard</Title>
        <Subtitle>Welcome to the admin dashboard. Here's an overview of your platform.</Subtitle>
      </PageHeader>

      <StatsGrid>
        <StatCard
          icon={<Users size={24} />}
          title="Total Users"
          value="1,234"
          trend="up"
          trendValue="12% from last month"
        />
        <StatCard
          icon={<UtensilsCrossed size={24} />}
          title="Restaurants"
          value="56"
          trend="up"
          trendValue="3 new this week"
        />
        <StatCard
          icon={<ShoppingBag size={24} />}
          title="Total Orders"
          value="8,765"
          trend="up"
          trendValue="24% increase"
        />
        <StatCard
          icon={<DollarSign size={24} />}
          title="Revenue"
          value="$123,456"
          trend="up"
          trendValue="18% increase"
        />
      </StatsGrid>

      <FullWidthSection>
        <RevenueChart />
      </FullWidthSection>

      <ContentGrid>
        <RecentOrders />
        <RestaurantStats />
      </ContentGrid>

      <RecentUsers />
    </div>
  )
}

