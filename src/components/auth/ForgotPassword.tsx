"use client"

import * as React from "react"
import styled from "styled-components"
import { Mail } from "react-feather"
import { Button } from "../common/Button"

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.lg};
`

const Title = styled.h2`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const Description = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

const Input = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  padding-left: 40px;
  border: 1px solid ${({ theme }) => theme.colors.text.secondary}33;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  transition: border-color ${({ theme }) => theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

const IconWrapper = styled.span`
  position: absolute;
  left: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
`

const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.status.error};
  font-size: ${({ theme }) => theme.typography.small.fontSize};
  margin-top: ${({ theme }) => theme.spacing.xs};
  display: block;
`

const SuccessMessage = styled.div`
  color: ${({ theme }) => theme.colors.status.success};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.md};
`

export const ForgotPassword = () => {
  const [email, setEmail] = React.useState("")
  const [error, setError] = React.useState("")
  const [success, setSuccess] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email) {
      setError("Email is required")
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    // Handle password reset request
    console.log("Password reset requested for:", email)
    setSuccess(true)
  }

  return (
    <FormContainer>
      <Title>Forgot Password</Title>
      <Description>Enter your email address and we'll send you instructions to reset your password.</Description>

      {!success ? (
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <InputWrapper>
              <IconWrapper>
                <Mail size={18} />
              </IconWrapper>
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputWrapper>
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </FormGroup>

          <Button type="submit" fullWidth>
            Reset Password
          </Button>
        </form>
      ) : (
        <SuccessMessage>
          Password reset instructions have been sent to your email address. Please check your inbox and follow the
          instructions to reset your password.
        </SuccessMessage>
      )}
    </FormContainer>
  )
}

