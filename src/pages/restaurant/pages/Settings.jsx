"use client"

import { useState } from "react"
import styled from "styled-components"
import { User, Image, Clock, CreditCard, Bell, Trash2, Save, Eye, EyeOff, Upload, X, AlertTriangle } from "lucide-react"

const Container = styled.div`
  max-width: 1000px;
`

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

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  margin-bottom: 2rem;
  overflow-x: auto;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`

const Tab = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  font-weight: 500;
  color: ${(props) => (props.active ? props.theme.colors.primary : props.theme.colors.mutedForeground)};
  border-bottom: 2px solid ${(props) => (props.active ? props.theme.colors.primary : "transparent")};
  background: none;
  border-left: none;
  border-right: none;
  border-top: none;
  cursor: pointer;
  white-space: nowrap;
  
  &:hover {
    color: ${(props) => !props.active && props.theme.colors.foreground};
  }
`

const Card = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  overflow: hidden;
  margin-bottom: 2rem;
`

const CardHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`

const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
`

const CardDescription = styled.p`
  color: ${(props) => props.theme.colors.mutedForeground};
  font-size: 0.875rem;
  margin-top: 0.25rem;
`

const CardContent = styled.div`
  padding: 1.5rem;
`

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`

const FormGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
`

const Input = styled.input`
  height: 2.5rem;
  padding: 0 0.75rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.375rem;
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors.primary};
  }
`

const TextArea = styled.textarea`
  min-height: 6rem;
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.375rem;
  width: 100%;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors.primary};
  }
`

const PasswordInput = styled.div`
  position: relative;
  
  input {
    padding-right: 2.5rem;
  }
`

const PasswordToggle = styled.button`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.mutedForeground};
  cursor: pointer;
  
  &:hover {
    color: ${(props) => props.theme.colors.foreground};
  }
`

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 2.5rem;
  padding: 0 1rem;
  font-weight: 500;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s ease;
  
  ${(props) =>
    props.variant === "primary"
      ? `
    background-color: ${props.theme.colors.primary};
    color: ${props.theme.colors.primaryForeground};
    border: none;
    
    &:hover {
      background-color: ${props.theme.colors.primaryDark};
    }
  `
      : props.variant === "destructive"
        ? `
    background-color: ${props.theme.colors.destructive};
    color: ${props.theme.colors.destructiveForeground};
    border: none;
    
    &:hover {
      background-color: ${props.theme.colors.destructiveDark || "#b91c1c"};
    }
  `
        : `
    background-color: white;
    color: ${props.theme.colors.foreground};
    border: 1px solid ${props.theme.colors.border};
    
    &:hover {
      background-color: ${props.theme.colors.muted};
    }
  `}
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`

const ImageUploadContainer = styled.div`
  margin-bottom: 1rem;
`

const ImagePreview = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.muted};
  margin-bottom: 1rem;
`

const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const RemoveImageButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`

const UploadButton = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 2.5rem;
  padding: 0 1rem;
  background-color: white;
  color: ${(props) => props.theme.colors.foreground};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.muted};
  }
  
  input {
    display: none;
  }
`

const TimeGrid = styled.div`
  display: grid;
  gap: 1rem;
`

const DayRow = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 1fr auto;
  gap: 1rem;
  align-items: center;
  
  @media (max-width: 640px) {
    grid-template-columns: 80px 1fr;
    gap: 0.5rem;
  }
`

const DayLabel = styled.div`
  font-weight: 500;
`

const TimeInput = styled.input`
  height: 2.5rem;
  padding: 0 0.75rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.375rem;
  width: 100%;
  
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors.primary};
  }
  
  @media (max-width: 640px) {
    grid-column: span 2;
  }
`

const ClosedToggle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (max-width: 640px) {
    grid-column: span 2;
  }
`

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 3rem;
  height: 1.5rem;
  
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }
`

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.colors.muted};
  transition: 0.2s;
  border-radius: 9999px;
  
  &:before {
    position: absolute;
    content: "";
    height: 1.25rem;
    width: 1.25rem;
    left: 0.125rem;
    bottom: 0.125rem;
    background-color: white;
    transition: 0.2s;
    border-radius: 50%;
  }
  
  input:checked + & {
    background-color: ${(props) => props.theme.colors.primary};
  }
  
  input:checked + &:before {
    transform: translateX(1.5rem);
  }
`

const PaymentMethodItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.375rem;
  margin-bottom: 0.75rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`

const PaymentMethodInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const PaymentIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.muted};
  border-radius: 0.375rem;
  color: ${(props) => props.theme.colors.foreground};
`

const PaymentDetails = styled.div``

const PaymentName = styled.div`
  font-weight: 500;
`

const PaymentDescription = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.mutedForeground};
`

const NotificationItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  
  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
  
  &:first-child {
    padding-top: 0;
  }
`

const NotificationInfo = styled.div``

const NotificationName = styled.div`
  font-weight: 500;
`

const NotificationDescription = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.mutedForeground};
`

const DangerZone = styled.div`
  padding: 1.5rem;
  border: 1px solid ${(props) => props.theme.colors.destructive};
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.destructiveLight || "rgba(239, 68, 68, 0.1)"};
`

const DangerTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.destructive};
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const DangerDescription = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.mutedForeground};
  margin-bottom: 1rem;
`

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`

const ModalContent = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 28rem;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`

const ModalTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.destructive};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.375rem;
  border: none;
  background: none;
  cursor: pointer;
  color: ${(props) => props.theme.colors.mutedForeground};
  
  &:hover {
    background-color: ${(props) => props.theme.colors.muted};
    color: ${(props) => props.theme.colors.foreground};
  }
`

const ModalBody = styled.div`
  padding: 1.5rem;
`

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1.5rem;
  border-top: 1px solid ${(props) => props.theme.colors.border};
`

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile")
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  })
  const [coverImage, setCoverImage] = useState(
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&h=800&fit=crop",
  )
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const [profileForm, setProfileForm] = useState({
    name: "Flame Grill House",
    email: "contact@flamegrillhouse.com",
    phone: "+1 234 567 890",
    address: "123 Main Street, New York, NY 10001",
    description: "Premium steaks and gourmet burgers in a cozy atmosphere.",
  })

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const [openingHours, setOpeningHours] = useState([
    { day: "Monday", open: "09:00", close: "22:00", isClosed: false },
    { day: "Tuesday", open: "09:00", close: "22:00", isClosed: false },
    { day: "Wednesday", open: "09:00", close: "22:00", isClosed: false },
    { day: "Thursday", open: "09:00", close: "22:00", isClosed: false },
    { day: "Friday", open: "09:00", close: "23:00", isClosed: false },
    { day: "Saturday", open: "10:00", close: "23:00", isClosed: false },
    { day: "Sunday", open: "10:00", close: "22:00", isClosed: false },
  ])

  const [paymentMethods, setPaymentMethods] = useState([
    { id: "cash", name: "Cash on Delivery", description: "Pay with cash when your order arrives", enabled: true },
    { id: "card", name: "Credit/Debit Card", description: "Pay securely with your card", enabled: true },
    { id: "paypal", name: "PayPal", description: "Fast and secure online payments", enabled: false },
  ])

  const [notifications, setNotifications] = useState([
    { id: "email_orders", name: "Email Notifications", description: "Receive order updates via email", enabled: true },
    { id: "sms_orders", name: "SMS Notifications", description: "Receive order updates via SMS", enabled: false },
    {
      id: "push_orders",
      name: "Push Notifications",
      description: "Receive order updates via push notifications",
      enabled: true,
    },
  ])

  const handleProfileChange = (e) => {
    const { name, value } = e.target
    setProfileForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handlePasswordChange = (e) => {
    const { name, value } = e.target
    setPasswordForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setCoverImage(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = () => {
    setCoverImage(null)
  }

  const updateOpeningHour = (index, field, value) => {
    const updated = [...openingHours]
    updated[index] = {
      ...updated[index],
      [field]: value,
    }
    setOpeningHours(updated)
  }

  const togglePaymentMethod = (id) => {
    setPaymentMethods((prev) =>
      prev.map((method) => (method.id === id ? { ...method, enabled: !method.enabled } : method)),
    )
  }

  const toggleNotification = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, enabled: !notification.enabled } : notification,
      ),
    )
  }

  const handleSaveProfile = (e) => {
    e.preventDefault()
    // Save profile logic here
    alert("Profile saved successfully!")
  }

  const handleChangePassword = (e) => {
    e.preventDefault()

    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert("New passwords do not match!")
      return
    }

    // Change password logic here
    alert("Password changed successfully!")
    setPasswordForm({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    })
  }

  const handleSaveHours = (e) => {
    e.preventDefault()
    // Save hours logic here
    alert("Opening hours saved successfully!")
  }

  const handleDeleteAccount = () => {
    // Delete account logic here
    alert("Account deleted successfully!")
    setShowDeleteModal(false)
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <>
            <Card>
              <CardHeader>
                <CardTitle>Restaurant Profile</CardTitle>
                <CardDescription>Update your restaurant's information</CardDescription>
              </CardHeader>
              <CardContent>
                <Form onSubmit={handleSaveProfile}>
                  <FormGrid>
                    <FormGroup>
                      <Label htmlFor="name">Restaurant Name</Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={profileForm.name}
                        onChange={handleProfileChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={profileForm.email}
                        onChange={handleProfileChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={profileForm.phone}
                        onChange={handleProfileChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup style={{ gridColumn: "1 / -1" }}>
                      <Label htmlFor="address">Address</Label>
                      <Input
                        type="text"
                        id="address"
                        name="address"
                        value={profileForm.address}
                        onChange={handleProfileChange}
                        required
                      />
                    </FormGroup>
                    <FormGroup style={{ gridColumn: "1 / -1" }}>
                      <Label htmlFor="description">Description</Label>
                      <TextArea
                        id="description"
                        name="description"
                        value={profileForm.description}
                        onChange={handleProfileChange}
                        required
                      />
                    </FormGroup>
                  </FormGrid>
                  <ButtonGroup>
                    <Button type="submit" variant="primary">
                      <Save size={16} />
                      Save Changes
                    </Button>
                  </ButtonGroup>
                </Form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>Update your account password</CardDescription>
              </CardHeader>
              <CardContent>
                <Form onSubmit={handleChangePassword}>
                  <FormGroup>
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <PasswordInput>
                      <Input
                        type={showPassword.current ? "text" : "password"}
                        id="currentPassword"
                        name="currentPassword"
                        value={passwordForm.currentPassword}
                        onChange={handlePasswordChange}
                        required
                      />
                      <PasswordToggle
                        type="button"
                        onClick={() => setShowPassword((prev) => ({ ...prev, current: !prev.current }))}
                      >
                        {showPassword.current ? <EyeOff size={16} /> : <Eye size={16} />}
                      </PasswordToggle>
                    </PasswordInput>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="newPassword">New Password</Label>
                    <PasswordInput>
                      <Input
                        type={showPassword.new ? "text" : "password"}
                        id="newPassword"
                        name="newPassword"
                        value={passwordForm.newPassword}
                        onChange={handlePasswordChange}
                        required
                      />
                      <PasswordToggle
                        type="button"
                        onClick={() => setShowPassword((prev) => ({ ...prev, new: !prev.new }))}
                      >
                        {showPassword.new ? <EyeOff size={16} /> : <Eye size={16} />}
                      </PasswordToggle>
                    </PasswordInput>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <PasswordInput>
                      <Input
                        type={showPassword.confirm ? "text" : "password"}
                        id="confirmPassword"
                        name="confirmPassword"
                        value={passwordForm.confirmPassword}
                        onChange={handlePasswordChange}
                        required
                      />
                      <PasswordToggle
                        type="button"
                        onClick={() => setShowPassword((prev) => ({ ...prev, confirm: !prev.confirm }))}
                      >
                        {showPassword.confirm ? <EyeOff size={16} /> : <Eye size={16} />}
                      </PasswordToggle>
                    </PasswordInput>
                  </FormGroup>
                  <ButtonGroup>
                    <Button type="submit" variant="primary">
                      Update Password
                    </Button>
                  </ButtonGroup>
                </Form>
              </CardContent>
            </Card>
          </>
        )

      case "appearance":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Restaurant Cover Image</CardTitle>
              <CardDescription>Update your restaurant's cover image</CardDescription>
            </CardHeader>
            <CardContent>
              <ImageUploadContainer>
                {coverImage && (
                  <ImagePreview>
                    <PreviewImage src={coverImage || "/placeholder.svg"} alt="Restaurant Cover" />
                    <RemoveImageButton onClick={handleRemoveImage}>
                      <X size={16} />
                    </RemoveImageButton>
                  </ImagePreview>
                )}
                <UploadButton>
                  <Upload size={16} />
                  {coverImage ? "Change Image" : "Upload Image"}
                  <input type="file" accept="image/*" onChange={handleImageUpload} />
                </UploadButton>
              </ImageUploadContainer>
              <ButtonGroup>
                <Button type="button" variant="primary">
                  <Save size={16} />
                  Save Changes
                </Button>
              </ButtonGroup>
            </CardContent>
          </Card>
        )

      case "hours":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Opening Hours</CardTitle>
              <CardDescription>Set your restaurant's opening hours</CardDescription>
            </CardHeader>
            <CardContent>
              <Form onSubmit={handleSaveHours}>
                <TimeGrid>
                  {openingHours.map((day, index) => (
                    <DayRow key={day.day}>
                      <DayLabel>{day.day}</DayLabel>
                      <TimeInput
                        type="time"
                        value={day.open}
                        onChange={(e) => updateOpeningHour(index, "open", e.target.value)}
                        disabled={day.isClosed}
                      />
                      <TimeInput
                        type="time"
                        value={day.close}
                        onChange={(e) => updateOpeningHour(index, "close", e.target.value)}
                        disabled={day.isClosed}
                      />
                      <ClosedToggle>
                        <Switch>
                          <input
                            type="checkbox"
                            checked={day.isClosed}
                            onChange={(e) => updateOpeningHour(index, "isClosed", e.target.checked)}
                          />
                          <Slider />
                        </Switch>
                        <span>Closed</span>
                      </ClosedToggle>
                    </DayRow>
                  ))}
                </TimeGrid>
                <ButtonGroup>
                  <Button type="submit" variant="primary">
                    <Save size={16} />
                    Save Hours
                  </Button>
                </ButtonGroup>
              </Form>
            </CardContent>
          </Card>
        )

      case "payments":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Payment Methods</CardTitle>
              <CardDescription>Configure available payment methods</CardDescription>
            </CardHeader>
            <CardContent>
              {paymentMethods.map((method) => (
                <PaymentMethodItem key={method.id}>
                  <PaymentMethodInfo>
                    <PaymentIcon>
                      <CreditCard size={20} />
                    </PaymentIcon>
                    <PaymentDetails>
                      <PaymentName>{method.name}</PaymentName>
                      <PaymentDescription>{method.description}</PaymentDescription>
                    </PaymentDetails>
                  </PaymentMethodInfo>
                  <Switch>
                    <input type="checkbox" checked={method.enabled} onChange={() => togglePaymentMethod(method.id)} />
                    <Slider onChange={() => togglePaymentMethod(method.id)} />
                    <Slider />
                  </Switch>
                </PaymentMethodItem>
              ))}
              <ButtonGroup>
                <Button type="button" variant="primary">
                  <Save size={16} />
                  Save Payment Methods
                </Button>
              </ButtonGroup>
            </CardContent>
          </Card>
        )

      case "notifications":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Configure how you receive order notifications</CardDescription>
            </CardHeader>
            <CardContent>
              {notifications.map((notification) => (
                <NotificationItem key={notification.id}>
                  <NotificationInfo>
                    <NotificationName>{notification.name}</NotificationName>
                    <NotificationDescription>{notification.description}</NotificationDescription>
                  </NotificationInfo>
                  <Switch>
                    <input
                      type="checkbox"
                      checked={notification.enabled}
                      onChange={() => toggleNotification(notification.id)}
                    />
                    <Slider />
                  </Switch>
                </NotificationItem>
              ))}
              <ButtonGroup>
                <Button type="button" variant="primary">
                  <Save size={16} />
                  Save Notification Preferences
                </Button>
              </ButtonGroup>
            </CardContent>
          </Card>
        )

      case "account":
        return (
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account settings</CardDescription>
            </CardHeader>
            <CardContent>
              <DangerZone>
                <DangerTitle>
                  <AlertTriangle size={16} />
                  Delete Account
                </DangerTitle>
                <DangerDescription>
                  Permanently delete your account and all associated data. This action cannot be undone.
                </DangerDescription>
                <Button type="button" variant="destructive" onClick={() => setShowDeleteModal(true)}>
                  <Trash2 size={16} />
                  Delete Account
                </Button>
              </DangerZone>
            </CardContent>
          </Card>
        )

      default:
        return null
    }
  }

  return (
    <Container>
      <PageHeader>
        <Title>Settings</Title>
        <Subtitle>Manage your restaurant settings and preferences</Subtitle>
      </PageHeader>

      <TabsContainer>
        <Tab active={activeTab === "profile"} onClick={() => setActiveTab("profile")}>
          <User size={16} />
          Profile
        </Tab>
        <Tab active={activeTab === "appearance"} onClick={() => setActiveTab("appearance")}>
          <Image size={16} />
          Appearance
        </Tab>
        <Tab active={activeTab === "hours"} onClick={() => setActiveTab("hours")}>
          <Clock size={16} />
          Opening Hours
        </Tab>
        <Tab active={activeTab === "payments"} onClick={() => setActiveTab("payments")}>
          <CreditCard size={16} />
          Payment Methods
        </Tab>
        <Tab active={activeTab === "notifications"} onClick={() => setActiveTab("notifications")}>
          <Bell size={16} />
          Notifications
        </Tab>
        <Tab active={activeTab === "account"} onClick={() => setActiveTab("account")}>
          <Trash2 size={16} />
          Account
        </Tab>
      </TabsContainer>

      {renderTabContent()}

      {showDeleteModal && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>
                <AlertTriangle size={20} />
                Delete Account
              </ModalTitle>
              <CloseButton onClick={() => setShowDeleteModal(false)}>
                <X size={20} />
              </CloseButton>
            </ModalHeader>
            <ModalBody>
              <p>
                Are you sure you want to delete your account? This action cannot be undone and all your data will be
                permanently removed.
              </p>
              <FormGroup style={{ marginTop: "1rem" }}>
                <Label htmlFor="confirmDelete">Type "DELETE" to confirm</Label>
                <Input type="text" id="confirmDelete" placeholder="DELETE" />
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => setShowDeleteModal(false)}>Cancel</Button>
              <Button variant="destructive" onClick={handleDeleteAccount}>
                Delete Account
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Container>
  )
}

