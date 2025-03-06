// "use client"

// import { useState } from "react"
// import styled from "styled-components"
// import { Save, Upload } from "lucide-react"

// const PageHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 24px;
// `

// const Title = styled.h1`
//   font-size: 24px;
//   font-weight: 600;
//   color: #333;
// `

// const SaveButton = styled.button`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   padding: 8px 16px;
//   border-radius: 4px;
//   font-weight: 500;
//   cursor: pointer;
//   background-color: #4361ee;
//   color: white;
//   border: none;
  
//   &:hover {
//     background-color: #3a56d4;
//   }
// `

// const SettingsContainer = styled.div`
//   display: grid;
//   grid-template-columns: 200px 1fr;
//   gap: 40px;
// `

// const SettingsNav = styled.div`
//   background-color: white;
//   border-radius: 8px;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
// `

// const NavItem = styled.button`
//   display: block;
//   width: 100%;
//   padding: 12px 16px;
//   text-align: left;
//   background-color: ${(props) => (props.active ? "#f0f4ff" : "transparent")};
//   color: ${(props) => (props.active ? "#4361ee" : "#333")};
//   border: none;
//   border-left: 4px solid ${(props) => (props.active ? "#4361ee" : "transparent")};
//   cursor: pointer;
  
//   &:hover {
//     background-color: ${(props) => (props.active ? "#f0f4ff" : "#f8f9fa")};
//   }
// `

// const SettingsPanel = styled.div`
//   background-color: white;
//   border-radius: 8px;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
//   padding: 24px;
// `

// const PanelTitle = styled.h2`
//   font-size: 18px;
//   font-weight: 600;
//   margin-bottom: 24px;
//   padding-bottom: 12px;
//   border-bottom: 1px solid #eee;
// `

// const FormGroup = styled.div`
//   margin-bottom: 20px;
// `

// const Label = styled.label`
//   display: block;
//   font-weight: 500;
//   margin-bottom: 8px;
// `

// const Input = styled.input`
//   width: 100%;
//   padding: 10px 12px;
//   border: 1px solid #ddd;
//   border-radius: 4px;
  
//   &:focus {
//     outline: none;
//     border-color: #4361ee;
//   }
// `

// const Textarea = styled.textarea`
//   width: 100%;
//   padding: 10px 12px;
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   min-height: 100px;
//   resize: vertical;
  
//   &:focus {
//     outline: none;
//     border-color: #4361ee;
//   }
// `

// const Select = styled.select`
//   width: 100%;
//   padding: 10px 12px;
//   border: 1px solid #ddd;
//   border-radius: 4px;
  
//   &:focus {
//     outline: none;
//     border-color: #4361ee;
//   }
// `

// const Checkbox = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   margin-bottom: 8px;
  
//   input {
//     width: 18px;
//     height: 18px;
//   }
// `

// const ImageUpload = styled.div`
//   margin-top: 12px;
// `

// const UploadButton = styled.label`
//   display: inline-flex;
//   align-items: center;
//   gap: 8px;
//   padding: 8px 16px;
//   border-radius: 4px;
//   font-weight: 500;
//   cursor: pointer;
//   background-color: white;
//   color: #333;
//   border: 1px solid #ddd;
  
//   &:hover {
//     background-color: #f8f9fa;
//   }
  
//   input {
//     display: none;
//   }
// `

// const SiteSettings = () => {
//   const [activeTab, setActiveTab] = useState("general")

//   return (
//     <div>
//       <PageHeader>
//         <Title>Site Settings</Title>
//         <SaveButton>
//           <Save size={16} />
//           Save Changes
//         </SaveButton>
//       </PageHeader>

//       <SettingsContainer>
//         <SettingsNav>
//           <NavItem active={activeTab === "general"} onClick={() => setActiveTab("general")}>
//             General
//           </NavItem>
//           <NavItem active={activeTab === "appearance"} onClick={() => setActiveTab("appearance")}>
//             Appearance
//           </NavItem>
//           <NavItem active={activeTab === "users"} onClick={() => setActiveTab("users")}>
//             User Settings
//           </NavItem>
//           <NavItem active={activeTab === "restaurants"} onClick={() => setActiveTab("restaurants")}>
//             Restaurant Settings
//           </NavItem>
//           <NavItem active={activeTab === "payments"} onClick={() => setActiveTab("payments")}>
//             Payment Settings
//           </NavItem>
//           <NavItem active={activeTab === "email"} onClick={() => setActiveTab("email")}>
//             Email Settings
//           </NavItem>
//           <NavItem active={activeTab === "integrations"} onClick={() => setActiveTab("integrations")}>
//             Integrations
//           </NavItem>
//         </SettingsNav>

//         <SettingsPanel>
//           {activeTab === "general" && (
//             <>
//               <PanelTitle>General Settings</PanelTitle>

//               <FormGroup>
//                 <Label>Site Name</Label>
//                 <Input type="text" defaultValue="FoodDelivery" />
//               </FormGroup>

//               <FormGroup>
//                 <Label>Site Description</Label>
//                 <Textarea defaultValue="The best food delivery platform for restaurants and customers." />
//               </FormGroup>

//               <FormGroup>
//                 <Label>Contact Email</Label>
//                 <Input type="email" defaultValue="contact@fooddelivery.com" />
//               </FormGroup>

//               <FormGroup>
//                 <Label>Phone Number</Label>
//                 <Input type="tel" defaultValue="+1 (555) 123-4567" />
//               </FormGroup>

//               <FormGroup>
//                 <Label>Address</Label>
//                 <Textarea defaultValue="123 Main Street, Suite 100, New York, NY 10001" />
//               </FormGroup>

//               <FormGroup>
//                 <Label>Time Zone</Label>
//                 <Select defaultValue="America/New_York">
//                   <option value="America/New_York">Eastern Time (US & Canada)</option>
//                   <option value="America/Chicago">Central Time (US & Canada)</option>
//                   <option value="America/Denver">Mountain Time (US & Canada)</option>
//                   <option value="America/Los_Angeles">Pacific Time (US & Canada)</option>
//                 </Select>
//               </FormGroup>
//             </>
//           )}

//           {activeTab === "appearance" && (
//             <>
//               <PanelTitle>Appearance Settings</PanelTitle>

//               <FormGroup>
//                 <Label>Logo</Label>
//                 <p>Current logo: logo.png</p>
//                 <ImageUpload>
//                   <UploadButton>
//                     <Upload size={16} />
//                     Upload New Logo
//                     <input type="file" accept="image/*" />
//                   </UploadButton>
//                 </ImageUpload>
//               </FormGroup>

//               <FormGroup>
//                 <Label>Favicon</Label>
//                 <p>Current favicon: favicon.ico</p>
//                 <ImageUpload>
//                   <UploadButton>
//                     <Upload size={16} />
//                     Upload New Favicon
//                     <input type="file" accept="image/*" />
//                   </UploadButton>
//                 </ImageUpload>
//               </FormGroup>

//               <FormGroup>
//                 <Label>Primary Color</Label>
//                 <Input type="color" defaultValue="#4361ee" />
//               </FormGroup>

//               <FormGroup>
//                 <Label>Secondary Color</Label>
//                 <Input type="color" defaultValue="#f97316" />
//               </FormGroup>

//               <FormGroup>
//                 <Label>Homepage Hero Image</Label>
//                 <p>Current hero image: hero.jpg</p>
//                 <ImageUpload>
//                   <UploadButton>
//                     <Upload size={16} />
//                     Upload New Hero Image
//                     <input type="file" accept="image/*" />
//                   </UploadButton>
//                 </ImageUpload>
//               </FormGroup>
//             </>
//           )}

//           {/* Other tabs would be implemented similarly */}
//           {activeTab !== "general" && activeTab !== "appearance" && (
//             <p>Settings for {activeTab} would be displayed here.</p>
//           )}
//         </SettingsPanel>
//       </SettingsContainer>
//     </div>
//   )
// }

// export default SiteSettings












"use client"

import { useState } from "react"
import styled from "styled-components"
import { Save, Upload } from "lucide-react"

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  width: 95%;
`

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #333;
`

const SaveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  background-color: #4361ee;
  color: white;
  border: none;
  
  &:hover {
    background-color: #3a56d4;
  }
`

const TabsContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 24px;
  border-bottom: 1px solid #e5e7eb;
  overflow-x: auto;
  scrollbar-width: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
`

const TabButton = styled.button`
  padding: 12px 20px;
  font-weight: 500;
  color: ${(props) => (props.active ? "#4361ee" : "#6b7280")};
  background-color: transparent;
  border: none;
  border-bottom: 2px solid ${(props) => (props.active ? "#4361ee" : "transparent")};
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  
  &:hover {
    color: ${(props) => (props.active ? "#4361ee" : "#111827")};
  }
`

const SettingsPanel = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 24px;
  width: 100%;
`

const PanelTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid #eee;
`

const FormGroup = styled.div`
  margin-bottom: 20px;
`

const Label = styled.label`
  display: block;
  font-weight: 500;
  margin-bottom: 8px;
`

const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: #4361ee;
  }
`

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #4361ee;
  }
`

const Select = styled.select`
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  
  &:focus {
    outline: none;
    border-color: #4361ee;
  }
`

const ImageUpload = styled.div`
  margin-top: 12px;
`

const UploadButton = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  background-color: white;
  color: #333;
  border: 1px solid #ddd;
  
  &:hover {
    background-color: #f8f9fa;
  }
  
  input {
    display: none;
  }
`

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`

const ColorPickerGroup = styled.div`
  display: flex;
  gap: 20px;
`

const ColorPickerItem = styled.div`
  flex: 1;
`

const ColorPreview = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  margin-top: 8px;
  background-color: ${(props) => props.color};
  border: 1px solid #ddd;
`

const SiteSettings = () => {
  const [activeTab, setActiveTab] = useState("general")
  const [primaryColor, setPrimaryColor] = useState("#4361ee")
  const [secondaryColor, setSecondaryColor] = useState("#f97316")

  const tabs = [
    { id: "general", label: "General" },
    { id: "appearance", label: "Appearance" },
    { id: "users", label: "User Settings" },
    { id: "restaurants", label: "Restaurant Settings" },
    { id: "payments", label: "Payment Settings" },
    { id: "email", label: "Email Settings" },
    { id: "integrations", label: "Integrations" },
  ]

  return (
    // <div style={{ width: "95%" }}>
    <div>
      <PageHeader>
        <Title>Site Settings</Title>
        <SaveButton>
          <Save size={16} />
          Save Changes
        </SaveButton>
      </PageHeader>

      <TabsContainer>
        {tabs.map((tab) => (
          <TabButton key={tab.id} active={activeTab === tab.id} onClick={() => setActiveTab(tab.id)}>
            {tab.label}
          </TabButton>
        ))}
      </TabsContainer>

      <SettingsPanel>
        {activeTab === "general" && (
          <>
            <PanelTitle>General Settings</PanelTitle>
            <FormGrid>
              <FormGroup>
                <Label>Site Name</Label>
                <Input type="text" defaultValue="FoodDelivery" />
              </FormGroup>

              <FormGroup>
                <Label>Contact Email</Label>
                <Input type="email" defaultValue="contact@fooddelivery.com" />
              </FormGroup>

              <FormGroup>
                <Label>Phone Number</Label>
                <Input type="tel" defaultValue="+1 (555) 123-4567" />
              </FormGroup>

              <FormGroup>
                <Label>Time Zone</Label>
                <Select defaultValue="America/New_York">
                  <option value="America/New_York">Eastern Time (US & Canada)</option>
                  <option value="America/Chicago">Central Time (US & Canada)</option>
                  <option value="America/Denver">Mountain Time (US & Canada)</option>
                  <option value="America/Los_Angeles">Pacific Time (US & Canada)</option>
                </Select>
              </FormGroup>
            </FormGrid>

            <FormGroup>
              <Label>Site Description</Label>
              <Textarea defaultValue="The best food delivery platform for restaurants and customers." />
            </FormGroup>

            <FormGroup>
              <Label>Address</Label>
              <Textarea defaultValue="123 Main Street, Suite 100, New York, NY 10001" />
            </FormGroup>
          </>
        )}

        {activeTab === "appearance" && (
          <>
            <PanelTitle>Appearance Settings</PanelTitle>

            <ColorPickerGroup>
              <ColorPickerItem>
                <Label>Primary Color</Label>
                <Input type="color" value={primaryColor} onChange={(e) => setPrimaryColor(e.target.value)} />
                <ColorPreview color={primaryColor} />
              </ColorPickerItem>

              <ColorPickerItem>
                <Label>Secondary Color</Label>
                <Input type="color" value={secondaryColor} onChange={(e) => setSecondaryColor(e.target.value)} />
                <ColorPreview color={secondaryColor} />
              </ColorPickerItem>
            </ColorPickerGroup>

            <FormGroup style={{ marginTop: "24px" }}>
              <Label>Logo</Label>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <img
                  src="/placeholder.svg?height=60&width=180"
                  alt="Current logo"
                  style={{ border: "1px solid #ddd", borderRadius: "4px" }}
                />
                <ImageUpload>
                  <UploadButton>
                    <Upload size={16} />
                    Upload New Logo
                    <input type="file" accept="image/*" />
                  </UploadButton>
                </ImageUpload>
              </div>
            </FormGroup>

            <FormGroup>
              <Label>Favicon</Label>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <img
                  src="/placeholder.svg?height=32&width=32"
                  alt="Current favicon"
                  style={{ border: "1px solid #ddd", borderRadius: "4px" }}
                />
                <ImageUpload>
                  <UploadButton>
                    <Upload size={16} />
                    Upload New Favicon
                    <input type="file" accept="image/*" />
                  </UploadButton>
                </ImageUpload>
              </div>
            </FormGroup>

            <FormGroup>
              <Label>Homepage Hero Image</Label>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <img
                  src="/placeholder.svg?height=100&width=200"
                  alt="Current hero image"
                  style={{ border: "1px solid #ddd", borderRadius: "4px" }}
                />
                <ImageUpload>
                  <UploadButton>
                    <Upload size={16} />
                    Upload New Hero Image
                    <input type="file" accept="image/*" />
                  </UploadButton>
                </ImageUpload>
              </div>
            </FormGroup>
          </>
        )}

        {/* Other tabs would be implemented similarly */}
        {activeTab !== "general" && activeTab !== "appearance" && (
          <div style={{ padding: "40px 0", textAlign: "center" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "500", color: "#6b7280", marginBottom: "8px" }}>
              {tabs.find((tab) => tab.id === activeTab)?.label} Configuration
            </h3>
            <p style={{ color: "#9ca3af" }}>
              Settings for {tabs.find((tab) => tab.id === activeTab)?.label.toLowerCase()} would be displayed here.
            </p>
          </div>
        )}
      </SettingsPanel>
    </div>
  )
}

export default SiteSettings

