import { useState } from "react"
import styled from "styled-components"
import { Search, Filter, MoreHorizontal, Edit, Trash2, UserX, UserCheck } from "lucide-react"

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
  flex-wrap: wrap;
  gap: 1rem;
`

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
`

const Controls = styled.div`
  display: flex;
  gap: 0.75rem;
`

const SearchContainer = styled.div`
  position: relative;
  width: 300px;
  
  @media (max-width: 640px) {
    width: 100%;
  }
`

const SearchInput = styled.input`
  width: 100%;
  height: 2.5rem;
  padding: 0 1rem 0 2.5rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme.colors.background};

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors.primary};
  }
`

const SearchIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${(props) => props.theme.colors.mutedForeground};
`

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  height: 2.5rem;
  padding: 0 1rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.375rem;
  background-color: white;
  color: ${(props) => props.theme.colors.foreground};
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.muted};
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

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  height: 1.5rem;
  padding: 0 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: capitalize;
  
  ${(props) => {
    switch (props.status) {
      case "active":
        return `
          background-color: #dcfce7;
          color: #166534;
        `
      case "inactive":
        return `
          background-color: #fee2e2;
          color: #991b1b;
        `
      case "pending":
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

const ActionMenu = styled.div`
  position: absolute;
  right: 1.5rem;
  margin-top: 0.5rem;
  width: 12rem;
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.375rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  z-index: 50;
`

const ActionMenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;
  text-align: left;
  border: none;
  background: none;
  font-size: 0.875rem;
  color: ${(props) => (props.danger ? props.theme.colors.destructive : props.theme.colors.foreground)};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.muted};
  }
`

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  border-top: 1px solid ${(props) => props.theme.colors.border};
`

const PaginationInfo = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.mutedForeground};
`

const PaginationButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`

const PaginationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: 1px solid ${(props) => (props.active ? "transparent" : props.theme.colors.border)};
  border-radius: 0.375rem;
  background-color: ${(props) => (props.active ? props.theme.colors.primary : "white")};
  color: ${(props) => (props.active ? props.theme.colors.primaryForeground : props.theme.colors.foreground)};
  font-size: 0.875rem;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.active ? props.theme.colors.primaryDark : props.theme.colors.muted)};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export default function UserList() {
  const [activeMenu, setActiveMenu] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  // Sample data
  const users = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      type: "customer",
      status: "active",
      joinedAt: "Jan 15, 2023",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      type: "restaurant",
      status: "active",
      joinedAt: "Feb 3, 2023",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      type: "customer",
      status: "inactive",
      joinedAt: "Mar 20, 2023",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Sarah Williams",
      email: "sarah@example.com",
      type: "restaurant",
      status: "pending",
      joinedAt: "Apr 12, 2023",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Admin User",
      email: "admin@example.com",
      type: "admin",
      status: "active",
      joinedAt: "May 5, 2022",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
    },
    {
      id: 6,
      name: "David Brown",
      email: "david@example.com",
      type: "customer",
      status: "active",
      joinedAt: "Jun 18, 2023",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=64&h=64&fit=crop&crop=face",
    },
    {
      id: 7,
      name: "Emily Davis",
      email: "emily@example.com",
      type: "restaurant",
      status: "active",
      joinedAt: "Jul 22, 2023",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=64&h=64&fit=crop&crop=face",
    },
    {
      id: 8,
      name: "Michael Wilson",
      email: "michael@example.com",
      type: "customer",
      status: "inactive",
      joinedAt: "Aug 30, 2023",
      avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=64&h=64&fit=crop&crop=face",
    },
  ]

  const toggleMenu = (id) => {
    setActiveMenu(activeMenu === id ? null : id)
  }

  const totalPages = Math.ceil(users.length / 5)

  return (
    <Container>
      <Header>
        <Title>User Management</Title>
        <Controls>
          <SearchContainer>
            <SearchIcon>
              <Search size={20} />
            </SearchIcon>
            <SearchInput type="text" placeholder="Search users..." />
          </SearchContainer>
          <FilterButton>
            <Filter size={20} />
            Filter
          </FilterButton>
        </Controls>
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
              <Td>
                <StatusBadge status={user.status}>{user.status}</StatusBadge>
              </Td>
              <Td>{user.joinedAt}</Td>
              <Td style={{ position: "relative" }}>
                <ActionButton onClick={() => toggleMenu(user.id)}>
                  <MoreHorizontal size={16} />
                </ActionButton>
                {activeMenu === user.id && (
                  <ActionMenu>
                    <ActionMenuItem>
                      <Edit size={16} />
                      Edit User
                    </ActionMenuItem>
                    {user.status === "active" ? (
                      <ActionMenuItem>
                        <UserX size={16} />
                        Deactivate
                      </ActionMenuItem>
                    ) : (
                      <ActionMenuItem>
                        <UserCheck size={16} />
                        Activate
                      </ActionMenuItem>
                    )}
                    <ActionMenuItem danger>
                      <Trash2 size={16} />
                      Delete User
                    </ActionMenuItem>
                  </ActionMenu>
                )}
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>

      <Pagination>
        <PaginationInfo>
          Showing {Math.min(5, users.length)} of {users.length} users
        </PaginationInfo>
        <PaginationButtons>
          <PaginationButton
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            &lt;
          </PaginationButton>
          {[...Array(totalPages)].map((_, i) => (
            <PaginationButton key={i} active={currentPage === i + 1} onClick={() => setCurrentPage(i + 1)}>
              {i + 1}
            </PaginationButton>
          ))}
          <PaginationButton
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          >
            &gt;
          </PaginationButton>
        </PaginationButtons>
      </Pagination>
    </Container>
  )
}

