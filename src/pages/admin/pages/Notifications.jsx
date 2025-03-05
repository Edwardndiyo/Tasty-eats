// import React from 'react'

// function Notifications() {
//   return (
//     <div>Notifications</div>
//   )
// }

// export default Notifications




"use client"

import { useState, useEffect } from "react"
import styled from "styled-components"
import { Bell, User, UtensilsCrossed, MessageSquare, AlertCircle, Check, Trash2, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

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

const NotificationsContainer = styled.div`
  background-color: white;
  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  overflow: hidden;
`

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`

const Tab = styled.button`
  flex: 1;
  padding: 1rem;
  background: none;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  color: ${(props) => (props.active ? props.theme.colors.primary : props.theme.colors.mutedForeground)};

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background-color: ${(props) => (props.active ? props.theme.colors.primary : "transparent")};
    transition: all 0.2s ease;
  }

  &:hover {
    color: ${(props) => (!props.active ? props.theme.colors.foreground : props.theme.colors.primary)};
  }
`

const NotificationCount = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 1.5rem;
  height: 1.5rem;
  padding: 0 0.5rem;
  border-radius: 9999px;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  margin-left: 0.5rem;
`

const NotificationList = styled.div`
  max-height: 600px;
  overflow-y: auto;
  
  /* Custom scrollbar */
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    border: transparent;
  }
`

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  text-align: center;
`

const EmptyIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 9999px;
  background-color: ${(props) => props.theme.colors.muted};
  color: ${(props) => props.theme.colors.mutedForeground};
  margin-bottom: 1.5rem;
`

const EmptyTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`

const EmptyDescription = styled.p`
  color: ${(props) => props.theme.colors.mutedForeground};
  max-width: 24rem;
  margin: 0 auto;
`

const NotificationActions = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-top: 1px solid ${(props) => props.theme.colors.border};
`

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &.primary {
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
    border: none;
    
    &:hover {
      background-color: ${(props) => props.theme.colors.primaryDark};
    }
  }
  
  &.secondary {
    background-color: white;
    color: ${(props) => props.theme.colors.foreground};
    border: 1px solid ${(props) => props.theme.colors.border};
    
    &:hover {
      background-color: ${(props) => props.theme.colors.muted};
    }
  }
  
  &.danger {
    background-color: white;
    color: ${(props) => props.theme.colors.destructive};
    border: 1px solid ${(props) => props.theme.colors.border};
    
    &:hover {
      background-color: ${(props) => props.theme.colors.destructiveLight};
    }
  }
`

const NotificationItem = styled(motion.div)`
  display: flex;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => (props.unread ? props.theme.colors.muted : "white")};
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.muted};
  }
`

const NotificationIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  margin-right: 1rem;
  flex-shrink: 0;
  
  &.order {
    background-color: #e3f2fd;
    color: #1976d2;
  }
  
  &.user {
    background-color: #e8f5e9;
    color: #2e7d32;
  }
  
  &.restaurant {
    background-color: #fff8e1;
    color: #f57c00;
  }
  
  &.message {
    background-color: #f3e5f5;
    color: #7b1fa2;
  }
  
  &.alert {
    background-color: #ffebee;
    color: #c62828;
  }
`

const NotificationContent = styled.div`
  flex: 1;
`

const NotificationTitle = styled.h4`
  font-weight: 600;
  margin-bottom: 0.25rem;
`

const NotificationMessage = styled.p`
  color: ${(props) => props.theme.colors.mutedForeground};
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`

const NotificationTime = styled.span`
  color: ${(props) => props.theme.colors.mutedForeground};
  font-size: 0.75rem;
`

const NotificationActions2 = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 1rem;
`

const NotificationActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  border: none;
  background: none;
  color: ${(props) => props.theme.colors.mutedForeground};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.muted};
    color: ${(props) => props.theme.colors.foreground};
  }
  
  &.delete:hover {
    background-color: ${(props) => props.theme.colors.destructiveLight};
    color: ${(props) => props.theme.colors.destructive};
  }
`

const UnreadIndicator = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background-color: ${(props) => props.theme.colors.primary};
  margin-left: 1rem;
`

// Sample notification data
const initialNotifications = {
  user: [
    {
      id: 1,
      type: "user",
      title: "New User Registration",
      message: "John Doe has registered as a new customer.",
      time: "2 hours ago",
      unread: true,
    },
    {
      id: 2,
      type: "user",
      title: "Profile Update",
      message: "Emily Davis has updated her profile information.",
      time: "5 hours ago",
      unread: true,
    },
    {
      id: 3,
      type: "user",
      title: "Account Verification",
      message: "Michael Wilson has verified his email address.",
      time: "1 day ago",
      unread: false,
    },
    {
      id: 4,
      type: "user",
      title: "Password Reset",
      message: "Sarah Johnson has requested a password reset.",
      time: "2 days ago",
      unread: false,
    },
  ],
  restaurant: [
    {
      id: 5,
      type: "restaurant",
      title: "New Restaurant Application",
      message: "Spice Garden has applied to join the platform.",
      time: "1 hour ago",
      unread: true,
    },
    {
      id: 6,
      type: "order",
      title: "Large Order Placed",
      message: "Flame Grill House has received a large order worth $250.",
      time: "3 hours ago",
      unread: true,
    },
    {
      id: 7,
      type: "message",
      title: "Support Request",
      message: "Bella Italia has submitted a support request regarding payment issues.",
      time: "6 hours ago",
      unread: true,
    },
    {
      id: 8,
      type: "alert",
      title: "Menu Update Required",
      message: "Sushi Master needs to update their menu prices.",
      time: "1 day ago",
      unread: false,
    },
    {
      id: 9,
      type: "restaurant",
      title: "Restaurant Verification",
      message: "Taco Fiesta has completed the verification process.",
      time: "2 days ago",
      unread: false,
    },
  ],
}

export default function Notifications() {
  const [activeTab, setActiveTab] = useState("user")
  const [notifications, setNotifications] = useState(initialNotifications)

  // Get the count of unread notifications for each tab
  const userUnreadCount = notifications.user.filter((notification) => notification.unread).length
  const restaurantUnreadCount = notifications.restaurant.filter((notification) => notification.unread).length

  // Function to mark a notification as read
  const markAsRead = (id) => {
    setNotifications((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].map((notification) =>
        notification.id === id ? { ...notification, unread: false } : notification,
      ),
    }))
  }

  // Function to delete a notification
  const deleteNotification = (id) => {
    setNotifications((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].filter((notification) => notification.id !== id),
    }))
  }

  // Function to mark all notifications as read
  const markAllAsRead = () => {
    setNotifications((prev) => ({
      ...prev,
      [activeTab]: prev[activeTab].map((notification) => ({ ...notification, unread: false })),
    }))
  }

  // Function to clear all notifications
  const clearAll = () => {
    setNotifications((prev) => ({
      ...prev,
      [activeTab]: [],
    }))
  }

  // Function to get the appropriate icon for a notification type
  const getNotificationIcon = (type) => {
    switch (type) {
      case "user":
        return <User size={20} />
      case "restaurant":
        return <UtensilsCrossed size={20} />
      case "order":
        return <Bell size={20} />
      case "message":
        return <MessageSquare size={20} />
      case "alert":
        return <AlertCircle size={20} />
      default:
        return <Bell size={20} />
    }
  }

  // Add a new notification every 20 seconds for demo purposes
  useEffect(() => {
    const interval = setInterval(() => {
      const newNotification = {
        id: Date.now(),
        type: Math.random() > 0.5 ? "user" : "restaurant",
        title: "New Notification",
        message: "This is a new notification that just arrived.",
        time: "Just now",
        unread: true,
      }

      setNotifications((prev) => ({
        ...prev,
        [newNotification.type === "user" ? "user" : "restaurant"]: [
          newNotification,
          ...prev[newNotification.type === "user" ? "user" : "restaurant"],
        ],
      }))
    }, 20000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <PageHeader>
        <Title>Notifications</Title>
        <Subtitle>Manage and view all system notifications</Subtitle>
      </PageHeader>

      <NotificationsContainer>
        <TabsContainer>
          <Tab active={activeTab === "user"} onClick={() => setActiveTab("user")}>
            User Notifications
            {userUnreadCount > 0 && <NotificationCount>{userUnreadCount}</NotificationCount>}
          </Tab>
          <Tab active={activeTab === "restaurant"} onClick={() => setActiveTab("restaurant")}>
            Restaurant Notifications
            {restaurantUnreadCount > 0 && <NotificationCount>{restaurantUnreadCount}</NotificationCount>}
          </Tab>
        </TabsContainer>

        <NotificationList>
          <AnimatePresence>
            {notifications[activeTab].length > 0 ? (
              notifications[activeTab].map((notification) => (
                <NotificationItem
                  key={notification.id}
                  unread={notification.unread}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <NotificationIcon className={notification.type}>
                    {getNotificationIcon(notification.type)}
                  </NotificationIcon>

                  <NotificationContent>
                    <NotificationTitle>{notification.title}</NotificationTitle>
                    <NotificationMessage>{notification.message}</NotificationMessage>
                    <NotificationTime>{notification.time}</NotificationTime>
                  </NotificationContent>

                  <NotificationActions2>
                    {notification.unread && (
                      <NotificationActionButton title="Mark as read" onClick={() => markAsRead(notification.id)}>
                        <Check size={16} />
                      </NotificationActionButton>
                    )}
                    <NotificationActionButton
                      className="delete"
                      title="Delete notification"
                      onClick={() => deleteNotification(notification.id)}
                    >
                      <X size={16} />
                    </NotificationActionButton>
                  </NotificationActions2>

                  {notification.unread && <UnreadIndicator />}
                </NotificationItem>
              ))
            ) : (
              <EmptyState>
                <EmptyIcon>
                  <Bell size={32} />
                </EmptyIcon>
                <EmptyTitle>No notifications</EmptyTitle>
                <EmptyDescription>
                  You don't have any {activeTab} notifications at the moment. New notifications will appear here when
                  they arrive.
                </EmptyDescription>
              </EmptyState>
            )}
          </AnimatePresence>
        </NotificationList>

        {notifications[activeTab].length > 0 && (
          <NotificationActions>
            <ActionButton
              className="secondary"
              onClick={markAllAsRead}
              disabled={!notifications[activeTab].some((n) => n.unread)}
            >
              <Check size={16} />
              Mark all as read
            </ActionButton>
            <ActionButton className="danger" onClick={clearAll}>
              <Trash2 size={16} />
              Clear all
            </ActionButton>
          </NotificationActions>
        )}
      </NotificationsContainer>
    </div>
  )
}

