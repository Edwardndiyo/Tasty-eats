// "use client"

// import * as React from "react"
// import styled from "styled-components"
// import { User, Lock, Unlock } from "react-feather"
// import { Button } from "../common/Button"

// const Container = styled.div`
//   padding: ${({ theme }) => theme.spacing.lg};
// `

// const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   background: ${({ theme }) => theme.colors.background};
//   border-radius: 12px;
//   overflow: hidden;
//   box-shadow: ${({ theme }) => theme.shadows.sm};
// `

// const Th = styled.th`
//   text-align: left;
//   padding: ${({ theme }) => theme.spacing.md};
//   background: ${({ theme }) => theme.colors.background};
//   border-bottom: 2px solid ${({ theme }) => theme.colors.text.secondary}22;
// `

// const Td = styled.td`
//   padding: ${({ theme }) => theme.spacing.md};
//   border-bottom: 1px solid ${({ theme }) => theme.colors.text.secondary}11;
// `

// const SearchInput = styled.input`
//   padding: ${({ theme }) => theme.spacing.sm};
//   border: 1px solid ${({ theme }) => theme.colors.text.secondary}33;
//   border-radius: 6px;
//   width: 300px;
//   margin-bottom: ${({ theme }) => theme.spacing.lg};

//   &:focus {
//     outline: none;
//     border-color: ${({ theme }) => theme.colors.primary};
//   }
// `

// const UserAvatar = styled.div`
//   width: 32px;
//   height: 32px;
//   border-radius: 16px;
//   background: ${({ theme }) => theme.colors.primary}22;
//   color: ${({ theme }) => theme.colors.primary};
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `

// const Badge = styled.span<{ status: "active" | "inactive" }>`
//   padding: 4px 8px;
//   border-radius: 12px;
//   font-size: 12px;
//   background: ${({ status, theme }) =>
//     status === "active" ? theme.colors.status.success + "22" : theme.colors.status.error + "22"};
//   color: ${({ status, theme }) => (status === "active" ? theme.colors.status.success : theme.colors.status.error)};
// `

// interface User {
//   id: string
//   name: string
//   email: string
//   role: "customer" | "restaurant" | "admin"
//   status: "active" | "inactive"
//   lastLogin: string
// }

// export const UserManagement: React.FC = () => {
//   const [users, setUsers] = React.useState<User[]>([
//     {
//       id: "1",
//       name: "John Doe",
//       email: "john@example.com",
//       role: "customer",
//       status: "active",
//       lastLogin: "2024-02-25 10:30 AM",
//     },
//     // Add more sample users
//   ])

//   const [searchTerm, setSearchTerm] = React.useState("")

//   const handleToggleStatus = (userId: string) => {
//     setUsers(
//       users.map((user) =>
//         user.id === userId ? { ...user, status: user.status === "active" ? "inactive" : "active" } : user,
//       ),
//     )
//   }

//   const filteredUsers = users.filter(
//     (user) =>
//       user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.email.toLowerCase().includes(searchTerm.toLowerCase()),
//   )

//   return (
//     <Container>
//       <h2>User Management</h2>

//       <div style={{ marginTop: "24px" }}>
//         <SearchInput
//           type="text"
//           placeholder="Search users..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />

//         <Table>
//           <thead>
//             <tr>
//               <Th>User</Th>
//               <Th>Role</Th>
//               <Th>Status</Th>
//               <Th>Last Login</Th>
//               <Th>Actions</Th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredUsers.map((user) => (
//               <tr key={user.id}>
//                 <Td>
//                   <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//                     <UserAvatar>
//                       <User size={16} />
//                     </UserAvatar>
//                     <div>
//                       <div>{user.name}</div>
//                       <div style={{ fontSize: "12px", color: "#666" }}>{user.email}</div>
//                     </div>
//                   </div>
//                 </Td>
//                 <Td>
//                   <span
//                     style={{
//                       textTransform: "capitalize",
//                       padding: "4px 8px",
//                       borderRadius: "4px",
//                       backgroundColor: "#f5f5f5",
//                       fontSize: "12px",
//                     }}
//                   >
//                     {user.role}
//                   </span>
//                 </Td>
//                 <Td>
//                   <Badge status={user.status}>{user.status}</Badge>
//                 </Td>
//                 <Td>{user.lastLogin}</Td>
//                 <Td>
//                   <Button variant="outline" size="small" onClick={() => handleToggleStatus(user.id)}>
//                     {user.status === "active" ? <Lock size={16} /> : <Unlock size={16} />}
//                     {user.status === "active" ? "Disable" : "Enable"}
//                   </Button>
//                 </Td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       </div>
//     </Container>
//   )
// }







"use client"

import * as React from "react"
import styled from "styled-components"
import { User, Lock, Unlock } from "react-feather"
import { Button } from "../common/Button"

const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
    
    thead {
      display: none;
    }
    
    tbody {
      display: block;
    }
    
    tr {
      display: block;
      padding: ${({ theme }) => theme.spacing.md};
      border-bottom: 1px solid ${({ theme }) => theme.colors.text.secondary}22;
    }
    
    td {
      display: block;
      padding: ${({ theme }) => theme.spacing.xs} 0;
      border: none;
      
      &:before {
        content: attr(data-label);
        float: left;
        font-weight: bold;
        margin-right: ${({ theme }) => theme.spacing.sm};
      }
    }
  }
`

const Th = styled.th`
  text-align: left;
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 2px solid ${({ theme }) => theme.colors.text.secondary}22;
`

const Td = styled.td`
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.text.secondary}11;
`

const SearchInput = styled.input`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.text.secondary}33;
  border-radius: 6px;
  width: 300px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.primary}22;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`

const Badge = styled.span<{ status: "active" | "inactive" }>`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  background: ${({ status, theme }) =>
    status === "active" ? theme.colors.status.success + "22" : theme.colors.status.error + "22"};
  color: ${({ status, theme }) => (status === "active" ? theme.colors.status.success : theme.colors.status.error)};
`

interface User {
  id: string
  name: string
  email: string
  role: "customer" | "restaurant" | "admin"
  status: "active" | "inactive"
  lastLogin: string
}

export const UserManagement: React.FC = () => {
  const [users, setUsers] = React.useState<User[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: "customer",
      status: "active",
      lastLogin: "2024-02-25 10:30 AM",
    },
    // Add more sample users
  ])

  const [searchTerm, setSearchTerm] = React.useState("")

  const handleToggleStatus = (userId: string) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, status: user.status === "active" ? "inactive" : "active" } : user,
      ),
    )
  }

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Container>
      <h2>User Management</h2>

      <div style={{ marginTop: "24px" }}>
        <SearchInput
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Table>
          <thead>
            <tr>
              <Th>User</Th>
              <Th>Role</Th>
              <Th>Status</Th>
              <Th>Last Login</Th>
              <Th>Actions</Th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td data-label="User">
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <UserAvatar>
                      <User size={16} />
                    </UserAvatar>
                    <div>
                      <div>{user.name}</div>
                      <div style={{ fontSize: "12px", color: "#666" }}>{user.email}</div>
                    </div>
                  </div>
                </td>
                <td data-label="Role">
                  <span
                    style={{
                      textTransform: "capitalize",
                      padding: "4px 8px",
                      borderRadius: "4px",
                      backgroundColor: "#f5f5f5",
                      fontSize: "12px",
                    }}
                  >
                    {user.role}
                  </span>
                </td>
                <td data-label="Status">
                  <Badge status={user.status}>{user.status}</Badge>
                </td>
                <td data-label="Last Login">{user.lastLogin}</td>
                <td data-label="Actions">
                  <Button variant="outline" size="small" onClick={() => handleToggleStatus(user.id)}>
                    {user.status === "active" ? <Lock size={16} /> : <Unlock size={16} />}
                    {user.status === "active" ? "Disable" : "Enable"}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  )
}

