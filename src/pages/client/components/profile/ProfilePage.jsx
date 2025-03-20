import { useState } from "react"
import styled from "styled-components"
import { User, MapPin, CreditCard, Camera } from "lucide-react"

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  
  @media (min-width: 768px) {
    padding: 2rem 1.5rem;
  }
`

const Header = styled.div`
  margin-bottom: 2rem;
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`

const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.mutedForeground};
`

const ProfileGrid = styled.div`
  display: grid;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 280px 1fr;
  }
`

const Sidebar = styled.div`
  @media (min-width: 768px) {
    position: sticky;
    top: 6rem;
  }
`

const ProfileCard = styled.div`
  padding: 1.5rem;
  border-radius: 0.75rem;
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.border};
`

const AvatarUpload = styled.div`
  position: relative;
  width: 96px;
  height: 96px;
  margin: 0 auto 1.5rem;
`

const Avatar = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 9999px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.muted};
`

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const UploadButton = styled.label`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryForeground};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  input {
    display: none;
  }
  
  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }
`

const ProfileInfo = styled.div`
  text-align: center;
`

const ProfileName = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
`

const ProfileEmail = styled.p`
  color: ${(props) => props.theme.colors.mutedForeground};
  font-size: 0.875rem;
`

const Nav = styled.nav`
  margin-top: 2rem;
`

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const NavItem = styled.li`
  list-style: none;
`

const NavLink = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.375rem;
  background: none;
  border: none;
  color: ${(props) => (props.active ? props.theme.colors.primary : props.theme.colors.foreground)};
  font-weight: ${(props) => (props.active ? "600" : "400")};
  cursor: pointer;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.muted};
  }
  
  svg {
    margin-right: 0.75rem;
  }
`

const Content = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  overflow: hidden;
`

const ContentHeader = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`

const ContentTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
`

const Form = styled.form`
  padding: 1.5rem;
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
  background-color: white;
  width: 100%;
  color: ${(props) => props.theme.colors.foreground};
  
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors.primary};
  }
`

const Select = styled.select`
  height: 2.5rem;
  padding: 0 0.75rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.375rem;
  background-color: white;
  width: 100%;
  color: ${(props) => props.theme.colors.foreground};
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors.primary};
  }
`

const SaveButton = styled.button`
  height: 2.5rem;
  padding: 0 1rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryForeground};
  border: none;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const AddressCard = styled.div`
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.375rem;
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`

const AddressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`

const AddressType = styled.span`
  font-weight: 500;
`

const AddressActions = styled.div`
  display: flex;
  gap: 0.5rem;
`

const AddressButton = styled.button`
  padding: 0.25rem 0.5rem;
  border: none;
  background: none;
  color: ${(props) => props.theme.colors.primary};
  font-size: 0.875rem;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`

const AddressDetails = styled.p`
  color: ${(props) => props.theme.colors.mutedForeground};
  font-size: 0.875rem;
  line-height: 1.5;
`

const AddNewButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  border: 1px dashed ${(props) => props.theme.colors.border};
  border-radius: 0.375rem;
  background: none;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.primaryLight};
  }
`

const PaymentMethodCard = styled(AddressCard)`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const CardIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.muted};
  border-radius: 0.375rem;
`

const CardInfo = styled.div`
  flex: 1;
`

const CardNumber = styled.div`
  font-weight: 500;
`

const CardExpiry = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.mutedForeground};
`

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("personal")
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 234 567 890",
    country: "US",
    language: "en",
    timezone: "UTC-5",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      // Implement your update logic here
      await new Promise((resolve) => setTimeout(resolve, 1000))
      // Show success message
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const renderContent = () => {
    switch (activeTab) {
      case "personal":
        return (
          <>
            <ContentHeader>
              <ContentTitle>Personal Information</ContentTitle>
            </ContentHeader>
            <Form onSubmit={handleSubmit}>
              <FormGrid>
                <FormGroup>
                  <Label htmlFor="name">Full Name</Label>
                  <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email">Email Address</Label>
                  <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="country">Country</Label>
                  <Select id="country" name="country" value={formData.country} onChange={handleChange}>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="GB">United Kingdom</option>
                  </Select>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="language">Language</Label>
                  <Select id="language" name="language" value={formData.language} onChange={handleChange}>
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                  </Select>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select id="timezone" name="timezone" value={formData.timezone} onChange={handleChange}>
                    <option value="UTC-8">Pacific Time (UTC-8)</option>
                    <option value="UTC-5">Eastern Time (UTC-5)</option>
                    <option value="UTC+0">UTC</option>
                  </Select>
                </FormGroup>
              </FormGrid>
              <div style={{ marginTop: "1.5rem" }}>
                <SaveButton type="submit" disabled={loading}>
                  {loading ? "Saving..." : "Save changes"}
                </SaveButton>
              </div>
            </Form>
          </>
        )
      case "addresses":
        return (
          <>
            <ContentHeader>
              <ContentTitle>Delivery Addresses</ContentTitle>
            </ContentHeader>
            <div style={{ padding: "1.5rem" }}>
              <AddressCard>
                <AddressHeader>
                  <AddressType>Home</AddressType>
                  <AddressActions>
                    <AddressButton>Edit</AddressButton>
                    <AddressButton>Delete</AddressButton>
                  </AddressActions>
                </AddressHeader>
                <AddressDetails>
                  123 Main Street, Apt 4B
                  <br />
                  New York, NY 10001
                  <br />
                  United States
                </AddressDetails>
              </AddressCard>
              <AddressCard>
                <AddressHeader>
                  <AddressType>Work</AddressType>
                  <AddressActions>
                    <AddressButton>Edit</AddressButton>
                    <AddressButton>Delete</AddressButton>
                  </AddressActions>
                </AddressHeader>
                <AddressDetails>
                  456 Business Ave
                  <br />
                  New York, NY 10002
                  <br />
                  United States
                </AddressDetails>
              </AddressCard>
              <AddNewButton>+ Add new address</AddNewButton>
            </div>
          </>
        )
      case "payment":
        return (
          <>
            <ContentHeader>
              <ContentTitle>Payment Methods</ContentTitle>
            </ContentHeader>
            <div style={{ padding: "1.5rem" }}>
              <PaymentMethodCard>
                <CardIcon>
                  <CreditCard size={20} />
                </CardIcon>
                <CardInfo>
                  <CardNumber>•••• •••• •••• 4242</CardNumber>
                  <CardExpiry>Expires 12/24</CardExpiry>
                </CardInfo>
                <AddressActions>
                  <AddressButton>Edit</AddressButton>
                  <AddressButton>Delete</AddressButton>
                </AddressActions>
              </PaymentMethodCard>
              <AddNewButton>+ Add new payment method</AddNewButton>
            </div>
          </>
        )
      default:
        return null
    }
  }

  return (
    <Container>
      <Header>
        <Title>Account Settings</Title>
        <Subtitle>Manage your account settings and preferences</Subtitle>
      </Header>

      <ProfileGrid>
        <Sidebar>
          <ProfileCard>
            <AvatarUpload>
              <Avatar>
                <AvatarImage
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face"
                  alt="Profile"
                />
              </Avatar>
              <UploadButton>
                <input type="file" accept="image/*" />
                <Camera size={14} />
              </UploadButton>
            </AvatarUpload>
            <ProfileInfo>
              <ProfileName>John Doe</ProfileName>
              <ProfileEmail>john@example.com</ProfileEmail>
            </ProfileInfo>
            <Nav>
              <NavList>
                <NavItem>
                  <NavLink active={activeTab === "personal"} onClick={() => setActiveTab("personal")}>
                    <User size={16} />
                    Personal Info
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink active={activeTab === "addresses"} onClick={() => setActiveTab("addresses")}>
                    <MapPin size={16} />
                    Addresses
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink active={activeTab === "payment"} onClick={() => setActiveTab("payment")}>
                    <CreditCard size={16} />
                    Payment Methods
                  </NavLink>
                </NavItem>
              </NavList>
            </Nav>
          </ProfileCard>
        </Sidebar>

        <Content>{renderContent()}</Content>
      </ProfileGrid>
    </Container>
  )
}

