import styled from "styled-components"

const Card = styled.div`
  background-color: white;
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }
`

const IconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  background-color: ${(props) => props.theme.colors.primaryLight};
  color: ${(props) => props.theme.colors.primary};
`

const Title = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.mutedForeground};
  margin-bottom: 0.5rem;
`

const Value = styled.div`
  font-size: 1.875rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.foreground};
`

const Trend = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: ${(props) => (props.positive ? "#16a34a" : "#dc2626")};
`

export default function StatCard({ icon, title, value, trend, trendValue }) {
  return (
    <Card>
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
      <Value>{value}</Value>
      {trend && (
        <Trend positive={trend === "up"}>
          {trend === "up" ? "↑" : "↓"} {trendValue}
        </Trend>
      )}
    </Card>
  )
}

