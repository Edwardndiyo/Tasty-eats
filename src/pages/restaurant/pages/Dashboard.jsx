import styled from "styled-components"
import { DollarSign, ShoppingBag, CheckCircle, Clock, Award, TrendingUp } from "lucide-react"
import StatCard from "../components/dashboard/StatCard"
import OrdersList from "../components/dashboard/OrdersList"
import ReviewsList from "../components/dashboard/ReviewsList"

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
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`

export default function Dashboard() {
  return (
    <div>
      <PageHeader>
        <Title>Dashboard</Title>
        <Subtitle>Welcome back! Here's what's happening with your restaurant.</Subtitle>
      </PageHeader>

      <StatsGrid>
        <StatCard
          icon={<DollarSign size={24} />}
          title="Total Revenue"
          value="$12,345"
          trend="up"
          trendValue="12% from last month"
        />
        <StatCard
          icon={<ShoppingBag size={24} />}
          title="Current Orders"
          value="23"
          trend="up"
          trendValue="8 new orders"
        />
        <StatCard
          icon={<CheckCircle size={24} />}
          title="Completed Orders"
          value="1,234"
          trend="up"
          trendValue="24% increase"
        />
        <StatCard
          icon={<Clock size={24} />}
          title="Pending Orders"
          value="12"
          trend="down"
          trendValue="3 less than usual"
        />
        <StatCard
          icon={<Award size={24} />}
          title="Most Ordered"
          value="Classic Burger"
          trend="up"
          trendValue="32 orders today"
        />
        <StatCard
          icon={<TrendingUp size={24} />}
          title="Average Rating"
          value="4.8"
          trend="up"
          trendValue="0.2 points"
        />
      </StatsGrid>

      <ContentGrid>
        <OrdersList />
        <ReviewsList />
      </ContentGrid>
    </div>
  )
}

