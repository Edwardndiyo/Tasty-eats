"use client"

import { useState } from "react"
import styled from "styled-components"
import { Search, Filter, MoreHorizontal, Edit, Trash2, CheckCircle, XCircle, ExternalLink } from "lucide-react"

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

const RestaurantInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const RestaurantImage = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.muted};
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const RestaurantDetails = styled.div`
  display: flex;
  flex-direction: column;
`

const RestaurantName = styled.div`
  font-weight: 500;
`

const RestaurantOwner = styled.div`
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
      case "Fast Food":
        return `
          background-color: #fee2e2;
          color: #991b1b;
        `
      case "Fine Dining":
        return `
          background-color: #fef9c3;
          color: #854d0e;
        `
      case "Casual Dining":
        return `
          background-color: #dcfce7;
          color: #166534;
        `
      case "Cafe":
        return `
          background-color: #dbeafe;
          color: #1e40af;
        `
      case "Food Truck":
        return `
          background-color: #f3e8ff;
          color: #6b21a8;
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

export default function RestaurantList() {
  const [activeMenu, setActiveMenu] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  // Sample data
  const restaurants = [
    {
      id: 1,
      name: "Flame Grill House",
      owner: "John Doe",
      type: "Fast Food",
      status: "active",
      rating: 4.8,
      joinedAt: "Jan 15, 2023",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=96&h=96&fit=crop",
    },
    {
      id: 2,
      name: "Spice Garden",
      owner: "Jane Smith",
      type: "Fine Dining",
      status: "active",
      rating: 4.7,
      joinedAt: "Feb 3, 2023",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=96&h=96&fit=crop",
    },
    {
      id: 3,
      name: "Bella Italia",
      owner: "Mike Johnson",
      type: "Casual Dining",
      status: "inactive",
      rating: 4.6,
      joinedAt: "Mar 20, 2023",
      image: "https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=96&h=96&fit=crop",
    },
    {
      id: 4,
      name: "Sushi Master",
      owner: "Sarah Williams",
      type: "Fine Dining",
      status: "pending",
      rating: 4.9,
      joinedAt: "Apr 12, 2023",
      image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=96&h=96&fit=crop",
    },
    {
      id: 5,
      name: "Cafe Mocha",
      owner: "David Brown",
      type: "Cafe",
      status: "active",
      rating: 4.5,
      joinedAt: "May 5, 2023",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=96&h=96&fit=crop",
    },
    {
      id: 6,
      name: "Taco Truck",
      owner: "Emily Davis",
      type: "Food Truck",
      status: "active",
      rating: 4.3,
      joinedAt: "Jun 18, 2023",
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=96&h=96&fit=crop",
    },
    {
      id: 7,
      name: "Pizza Palace",
      owner: "Michael Wilson",
      type: "Fast Food",
      status: "active",
      rating: 4.4,
      joinedAt: "Jul 22, 2023",
      image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=96&h=96&fit=crop",
    },
  ]

  const toggleMenu = (id) => {
    setActiveMenu(activeMenu === id ? null : id)
  }

  const totalPages = Math.ceil(restaurants.length / 5)

  return (
    <Container>
      <Header>
        <Title>Restaurant Management</Title>
        <Controls>
          <SearchContainer>
            <SearchIcon>
              <Search size={20} />
            </SearchIcon>
            <SearchInput type="text" placeholder="Search restaurants..." />
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
            <Th>Restaurant</Th>
            <Th>Type</Th>
            <Th>Status</Th>
            <Th>Rating</Th>
            <Th>Joined</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map((restaurant) => (
            <Tr key={restaurant.id}>
              <Td>
                <RestaurantInfo>
                  <RestaurantImage>
                    <Image src={restaurant.image || "/placeholder.svg"} alt={restaurant.name} />
                  </RestaurantImage>
                  <RestaurantDetails>
                    <RestaurantName>{restaurant.name}</RestaurantName>
                    <RestaurantOwner>Owner: {restaurant.owner}</RestaurantOwner>
                  </RestaurantDetails>
                </RestaurantInfo>
              </Td>
              <Td>
                <Badge type={restaurant.type}>{restaurant.type}</Badge>
              </Td>
              <Td>
                <StatusBadge status={restaurant.status}>{restaurant.status}</StatusBadge>
              </Td>
              <Td>{restaurant.rating} ★</Td>
              <Td>{restaurant.joinedAt}</Td>
              <Td style={{ position: "relative" }}>
                <ActionButton onClick={() => toggleMenu(restaurant.id)}>
                  <MoreHorizontal size={16} />
                </ActionButton>
                {activeMenu === restaurant.id && (
                  <ActionMenu>
                    <ActionMenuItem>
                      <ExternalLink size={16} />
                      View Details
                    </ActionMenuItem>
                    <ActionMenuItem>
                      <Edit size={16} />
                      Edit Restaurant
                    </ActionMenuItem>
                    {restaurant.status === "active" ? (
                      <ActionMenuItem>
                        <XCircle size={16} />
                        Deactivate
                      </ActionMenuItem>
                    ) : restaurant.status === "pending" ? (
                      <ActionMenuItem>
                        <CheckCircle size={16} />
                        Approve
                      </ActionMenuItem>
                    ) : (
                      <ActionMenuItem>
                        <CheckCircle size={16} />
                        Activate
                      </ActionMenuItem>
                    )}
                    <ActionMenuItem danger>
                      <Trash2 size={16} />
                      Delete Restaurant
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
          Showing {Math.min(5, restaurants.length)} of {restaurants.length} restaurants
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

