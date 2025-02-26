// import * as React from "react"

// import { AdminLayout } from "../../components/admin/AdminLayout"
// import { AdminDashboard } from "../../components/admin/Dashboard"
// import { CategoryManagement } from "../../components/admin/CategoryManagement"
// import { ReportGeneration } from "../../components/admin/ReportGeneration"
// import { UserManagement } from "../../components/admin/UserManagement"

// export const AdminPage: React.FC = () => {
//   // You would typically use a router to determine which component to show
//   const currentPage: "dashboard" | "categories" | "reports" | "users" = "dashboard"

//   const renderContent = () => {
//     switch (currentPage) {
//       case "dashboard":
//         return <AdminDashboard />
//       case "categories":
//         return <CategoryManagement />
//       case "reports":
//         return <ReportGeneration />
//       case "users":
//         return <UserManagement />
//       default:
//         return <AdminDashboard />
//     }
//   }
  
//   return <AdminLayout activePage={currentPage}>{renderContent()}</AdminLayout>
// }




// import * as React from "react"
// import { useParams } from "react-router-dom"

// import { AdminLayout } from "../../components/admin/AdminLayout"
// import { AdminDashboard } from "../../components/admin/Dashboard"
// import { CategoryManagement } from "../../components/admin/CategoryManagement"
// import { ReportGeneration } from "../../components/admin/ReportGeneration"
// import { UserManagement } from "../../components/admin/UserManagement"

// // Define the allowed page types
// type AdminPageType = "dashboard" | "categories" | "reports" | "users"

// export const AdminPage: React.FC = () => {
//   // Get the current page from router params or default to "dashboard"
//   const { page } = useParams<{ page?: AdminPageType }>()
//   const currentPage: AdminPageType = page ?? "dashboard"

//   // Map page names to their respective components
//   const pageComponents: Record<AdminPageType, JSX.Element> = {
//     dashboard: <AdminDashboard />,
//     categories: <CategoryManagement />,
//     reports: <ReportGeneration />,
//     users: <UserManagement />,
//   }

//   return <AdminLayout activePage={currentPage}>{pageComponents[currentPage]}</AdminLayout>
// }




import * as React from "react"
import { useParams } from "react-router-dom"

import { AdminLayout } from "../../components/admin/AdminLayout"
import { AdminDashboard } from "../../components/admin/Dashboard"
import { CategoryManagement } from "../../components/admin/CategoryManagement"
import { ReportGeneration } from "../../components/admin/ReportGeneration"
import { UserManagement } from "../../components/admin/UserManagement"

// Define the allowed page types
type AdminPageType = "dashboard" | "categories" | "reports" | "users"

export const AdminPage: React.FC = () => {
  // Get the current page from router params or default to "dashboard"
  const { page } = useParams<{ page?: AdminPageType }>()
  const currentPage: AdminPageType = page ?? "dashboard"

  // Map page names to their respective components
  const pageComponents: Record<AdminPageType, React.ReactNode> = {
    dashboard: <AdminDashboard />,
    categories: <CategoryManagement />,
    reports: <ReportGeneration />,
    users: <UserManagement />,
  }

  return <AdminLayout activePage={currentPage}>{pageComponents[currentPage]}</AdminLayout>
}
