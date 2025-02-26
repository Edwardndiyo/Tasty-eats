"use client"

import * as React from "react"
import styled from "styled-components"
import { Home, Mail, Phone, Clock, MapPin } from "react-feather"
import { FaBuilding } from 'react-icons/fa';
import { Button } from "../common/Button"

const FormContainer = styled.div`
  max-width: 600px;
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

const TextArea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.text.secondary}33;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  min-height: 100px;
  resize: vertical;

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

const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text.primary};
`

const Select = styled.select`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.text.secondary}33;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.typography.body.fontSize};
  background-color: white;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

const TimeInputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.md};
`

export const RestaurantRegistration = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    cuisineType: "",
    openingTime: "",
    closingTime: "",
    description: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <FormContainer>
      <Title>Register Your Restaurant</Title>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Restaurant Name</Label>
          <InputWrapper>
            <IconWrapper>
              <FaBuilding size={18} />
            </IconWrapper>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter restaurant name"
              required
            />
          </InputWrapper>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email Address</Label>
          <InputWrapper>
            <IconWrapper>
              <Mail size={18} />
            </IconWrapper>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email address"
              required
            />
          </InputWrapper>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="phone">Phone Number</Label>
          <InputWrapper>
            <IconWrapper>
              <Phone size={18} />
            </IconWrapper>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              required
            />
          </InputWrapper>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="address">Address</Label>
          <InputWrapper>
            <IconWrapper>
              <MapPin size={18} />
            </IconWrapper>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter restaurant address"
              required
            />
          </InputWrapper>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="cuisineType">Cuisine Type</Label>
          <Select id="cuisineType" name="cuisineType" value={formData.cuisineType} onChange={handleChange} required>
            <option value="">Select cuisine type</option>
            <option value="italian">Italian</option>
            <option value="chinese">Chinese</option>
            <option value="indian">Indian</option>
            <option value="mexican">Mexican</option>
            <option value="japanese">Japanese</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label>Business Hours</Label>
          <TimeInputGroup>
            <InputWrapper>
              <IconWrapper>
                <Clock size={18} />
              </IconWrapper>
              <Input type="time" name="openingTime" value={formData.openingTime} onChange={handleChange} required />
            </InputWrapper>
            <InputWrapper>
              <IconWrapper>
                <Clock size={18} />
              </IconWrapper>
              <Input type="time" name="closingTime" value={formData.closingTime} onChange={handleChange} required />
            </InputWrapper>
          </TimeInputGroup>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="description">Restaurant Description</Label>
          <TextArea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Tell us about your restaurant..."
            required
          />
        </FormGroup>

        <Button type="submit" fullWidth>
          Register Restaurant
        </Button>
      </form>
    </FormContainer>
  )
}

