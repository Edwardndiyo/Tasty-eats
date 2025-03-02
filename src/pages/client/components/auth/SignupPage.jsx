// "use client"

// import { useState } from "react"
// import { Link, useNavigate } from "react-router-dom"
// import styled from "styled-components"
// import { Eye, EyeOff, Mail, Lock, User } from "lucide-react"

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `

// const AuthCard = styled.div`
//   padding: 40px;
//   border-radius: 8px;
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
//   width: 400px;
// `

// const Title = styled.h2`
//   text-align: center;
//   margin-bottom: 20px;
// `

// const ErrorMessage = styled.div`
//   color: red;
//   margin-bottom: 10px;
//   text-align: center;
// `

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
// `

// const FormGroup = styled.div`
//   margin-bottom: 20px;
// `

// const Label = styled.label`
//   display: block;
//   margin-bottom: 5px;
// `

// const InputWrapper = styled.div`
//   position: relative;
// `

// const InputIcon = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 10px;
//   transform: translateY(-50%);
// `

// const Input = styled.input`
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 4px;
//   width: 100%;
// `

// const PasswordToggle = styled.button`
//   position: absolute;
//   top: 50%;
//   right: 10px;
//   transform: translateY(-50%);
//   background: none;
//   border: none;
//   cursor: pointer;
// `

// const SubmitButton = styled.button`
//   padding: 10px;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   &:disabled {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }
// `

// const Divider = styled.div`
//   margin: 20px 0;
//   text-align: center;
// `

// const DividerText = styled.span`
//   padding: 0 10px;
//   background-color: white;
// `

// const SocialButton = styled.button`
//   padding: 10px;
//   background-color: #f0f0f0;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   width: 100%;
//   margin-bottom: 10px;
// `

// const BottomText = styled.div`
//   text-align: center;
//   margin-top: 20px;
// `

// export default function SignupPage() {
//   const navigate = useNavigate()
//   const [showPassword, setShowPassword] = useState(false)
//   const [loading, setLoading] = useState(false)
//   const [error, setError] = useState("")
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   })

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setLoading(true)
//     setError("")

//     if (formData.password !== formData.confirmPassword) {
//       setError("Passwords do not match")
//       setLoading(false)
//       return
//     }

//     try {
//       // Implement your signup logic here
//       await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call
//       navigate("/")
//     } catch (err) {
//       setError("Something went wrong. Please try again.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }))
//   }

//   return (
//     <Container>
//       <AuthCard>
//         <Title>Create an account</Title>

//         {error && <ErrorMessage>{error}</ErrorMessage>}

//         <Form onSubmit={handleSubmit}>
//           <FormGroup>
//             <Label htmlFor="name">Full Name</Label>
//             <InputWrapper>
//               <InputIcon>
//                 <User size={16} />
//               </InputIcon>
//               <Input
//                 type="text"
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter your full name"
//                 required
//               />
//             </InputWrapper>
//           </FormGroup>

//           <FormGroup>
//             <Label htmlFor="email">Email</Label>
//             <InputWrapper>
//               <InputIcon>
//                 <Mail size={16} />
//               </InputIcon>
//               <Input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 required
//               />
//             </InputWrapper>
//           </FormGroup>

//           <FormGroup>
//             <Label htmlFor="password">Password</Label>
//             <InputWrapper>
//               <InputIcon>
//                 <Lock size={16} />
//               </InputIcon>
//               <Input
//                 type={showPassword ? "text" : "password"}
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Create a password"
//                 required
//               />
//               <PasswordToggle
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 aria-label={showPassword ? "Hide password" : "Show password"}
//               >
//                 {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//               </PasswordToggle>
//             </InputWrapper>
//           </FormGroup>

//           <FormGroup>
//             <Label htmlFor="confirmPassword">Confirm Password</Label>
//             <InputWrapper>
//               <InputIcon>
//                 <Lock size={16} />
//               </InputIcon>
//               <Input
//                 type={showPassword ? "text" : "password"}
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 placeholder="Confirm your password"
//                 required
//               />
//             </InputWrapper>
//           </FormGroup>

//           <SubmitButton type="submit" disabled={loading}>
//             {loading ? "Creating account..." : "Create account"}
//           </SubmitButton>
//         </Form>

//         <Divider>
//           <DividerText>or</DividerText>
//         </Divider>

//         <SocialButton type="button">
//           <svg width="16" height="16" viewBox="0 0 48 48">
//             <path
//               fill="#FFC107"
//               d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
//             />
//             <path
//               fill="#FF3D00"
//               d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
//             />
//             <path
//               fill="#4CAF50"
//               d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
//             />
//             <path
//               fill="#1976D2"
//               d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
//             />
//           </svg>
//           Continue with Google
//         </SocialButton>

//         <BottomText>
//           Already have an account? <Link to="/login">Sign in</Link>
//         </BottomText>
//       </AuthCard>
//     </Container>
//   )
// }











"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react"

const Container = styled.div`
  min-height: calc(100vh - 4rem);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  background-color: ${(props) => props.theme.colors.background};
`

const AuthCard = styled.div`
  width: 100%;
  max-width: 440px;
  padding: 2.5rem;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  
  @media (max-width: 480px) {
    padding: 2rem 1.5rem;
  }
`

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.foreground};
`

const Subtitle = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.mutedForeground};
  margin-bottom: 2rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.foreground};
`

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const InputIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  color: ${(props) => props.theme.colors.mutedForeground};
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
`

const Input = styled.input`
  width: 100%;
  height: 2.75rem;
  padding: 0 2.75rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.5rem;
  background-color: white;
  color: ${(props) => props.theme.colors.foreground};
  transition: all 0.2s ease;
  
  &::placeholder {
    color: ${(props) => props.theme.colors.mutedForeground};
  }
  
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primaryLight};
  }
`

const PasswordToggle = styled.button`
  position: absolute;
  right: 0.75rem;
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.mutedForeground};
  cursor: pointer;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: ${(props) => props.theme.colors.foreground};
  }
`

const SubmitButton = styled.button`
  width: 100%;
  height: 2.75rem;
  margin-top: 0.5rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryForeground};
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1.5rem 0;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: ${(props) => props.theme.colors.border};
  }
`

const DividerText = styled.span`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.mutedForeground};
`

const GoogleButton = styled.button`
  width: 100%;
  height: 2.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background-color: white;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 0.5rem;
  color: ${(props) => props.theme.colors.foreground};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.muted};
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`

const BottomText = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.mutedForeground};
  
  a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`

const ErrorMessage = styled.div`
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.destructiveLight};
  color: ${(props) => props.theme.colors.destructive};
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export default function SignupPage() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setLoading(false)
      return
    }

    try {
      // Implement your signup logic here
      await new Promise((resolve) => setTimeout(resolve, 1000))
      navigate("/")
    } catch (err) {
      setError("Something went wrong. Please try again.")
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

  return (
    <Container>
      <AuthCard>
        <Title>Create account</Title>
        <Subtitle>Get started with your free account</Subtitle>

        {error && (
          <ErrorMessage>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 4v5M8 12h.01M15 8A7 7 0 111 8a7 7 0 0114 0z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {error}
          </ErrorMessage>
        )}

        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Full Name</Label>
            <InputWrapper>
              <InputIcon>
                <User size={18} />
              </InputIcon>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </InputWrapper>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <InputWrapper>
              <InputIcon>
                <Mail size={18} />
              </InputIcon>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </InputWrapper>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <InputWrapper>
              <InputIcon>
                <Lock size={18} />
              </InputIcon>
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
              />
              <PasswordToggle
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </PasswordToggle>
            </InputWrapper>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <InputWrapper>
              <InputIcon>
                <Lock size={18} />
              </InputIcon>
              <Input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
              />
            </InputWrapper>
          </FormGroup>

          <SubmitButton type="submit" disabled={loading}>
            {loading ? "Creating account..." : "Create account"}
          </SubmitButton>
        </Form>

        <Divider>
          <DividerText>or continue with</DividerText>
        </Divider>

        <GoogleButton type="button">
          <svg viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Continue with Google
        </GoogleButton>

        <BottomText>
          Already have an account? <Link to="/login">Sign in</Link>
        </BottomText>
      </AuthCard>
    </Container>
  )
}

