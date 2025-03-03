import styled from "styled-components"
import { MoreHorizontal, ExternalLink } from "lucide-react"
import { Link } from "react-router-dom"

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

const ViewAllLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const Th = styled.th`
  padding: 0.75rem 1.5rem;
  text-align: left;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.mutedForeground};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  &:first-child {
    padding-left: 1.5rem;
  }

  &:last-child {
    padding-right: 1.5rem;
    text-align: right;
  }
`

const Tr = styled.tr`
  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.muted};
  }
`

const Td = styled.td`
  padding: 1rem 1.5rem;
  font-size: 0.875rem;

  &:first-child {
    padding-left: 1.5rem;
  }

  &:last-child {
    padding-right: 1.5rem;
    text-align: right;
  }
`

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const Avatar = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.muted};
`

const UserImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
`

const UserName = styled.div`
  font-weight: 500;
`

const UserEmail = styled.div`
  font-size: 0.75rem;
  color: ${(props) => props.theme.colors.mutedForeground};
`

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  height: 1.5rem;
  padding: 0 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: capitalize;
  
  ${(props) => {
    switch (props.type) {
      case "customer":
        return `
          background-color: #dbeafe;
          color: #1e40af;
        `
      case "restaurant":
        return `
          background-color: #dcfce7;
          color: #166534;
        `
      case "admin":
        return `
          background-color: #fef9c3;
          color: #854d0e;
        `
      default:
        return `
          background-color: ${props.theme.colors.muted};
          color: ${props.theme.colors.mutedForeground};
        `
    }
  }}
`

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  background: none;
  border-radius: 0.375rem;
  color: ${(props) => props.theme.colors.mutedForeground};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.muted};
    color: ${(props) => props.theme.colors.foreground};
  }
`

export default function RecentUsers() {
  // Sample data
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      type: "customer",
      status: "active",
      joinedAt: "2 days ago",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      type: "restaurant",
      status: "active",
      joinedAt: "1 week ago",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      type: "customer",
      status: "active",
      joinedAt: "2 weeks ago",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Sarah Williams",
      email: "sarah@example.com",
      type: "restaurant",
      status: "active",
      joinedAt: "1 month ago",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Admin User",
      email: "admin@example.com",
      type: "admin",
      status: "active",
      joinedAt: "2 months ago",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
    },
  ]

  return (
    <Container>
      <Header>
        <Title>Recent Users</Title>
        <ViewAllLink to="/admin/users">
          View All
          <ExternalLink size={16} />
        </ViewAllLink>
      </Header>

      <Table>
        <thead>
          <tr>
            <Th>User</Th>
            <Th>Type</Th>
            <Th>Status</Th>
            <Th>Joined</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td>
                <UserInfo>
                  <Avatar>
                    <UserImage src={user.avatar} alt={user.name} />
                  </Avatar>
                  <UserDetails>
                    <UserName>{user.name}</UserName>
                    <UserEmail>{user.email}</UserEmail>
                  </UserDetails>
                </UserInfo>
              </Td>
              <Td>
                <Badge type={user.type}>{user.type}</Badge>
              </Td>
              <Td>{user.status}</Td>
              <Td>{user.joinedAt}</Td>
              <Td>
                <ActionButton>
                  <MoreHorizontal size={16} />
                </ActionButton>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
}

