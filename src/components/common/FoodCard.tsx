"use client"

import type React from "react"

import styled from "styled-components"
import { useState } from "react"
import { Heart, ShoppingCart } from "react-feather"

interface FoodCardProps {
  id: string
  name: string
  description: string
  price: number
  image: string
  rating: number
  type: "veg" | "non-veg"
  onAddToCart: () => void
}

const Card = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: transform ${({ theme }) => theme.transitions.default};
  position: relative;

  &:hover {
    transform: translateY(-4px);
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 66.67%; // 3:2 aspect ratio
`

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Content = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
`

const Title = styled.h3`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
  color: ${({ theme }) => theme.colors.text.primary};
`

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.typography.small.fontSize};
  margin: ${({ theme }) => theme.spacing.sm} 0;
`

const Price = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.body.fontSize};
`

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.sm};
`

const FoodType = styled.span<{ type: "veg" | "non-veg" }>`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid ${({ type, theme }) => (type === "veg" ? theme.colors.status.success : theme.colors.status.error)};
  border-radius: 4px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 2px;
    background: ${({ type, theme }) => (type === "veg" ? theme.colors.status.success : theme.colors.status.error)};
  }
`

const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.text.secondary};
  transition: color ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`

export const FoodCard: React.FC<FoodCardProps> = ({ name, description, price, image, type, onAddToCart }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <Card>
      <ImageContainer>
        <Image src={image || "/placeholder.svg"} alt={name} />
      </ImageContainer>
      <Content>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <FoodType type={type} />
          <Title>{name}</Title>
        </div>
        <Description>{description}</Description>
        <Actions>
          <Price>${price.toFixed(2)}</Price>
          <div style={{ display: "flex", gap: "8px" }}>
            <IconButton onClick={() => setIsFavorite(!isFavorite)}>
              <Heart fill={isFavorite ? "currentColor" : "none"} />
            </IconButton>
            <IconButton onClick={onAddToCart}>
              <ShoppingCart />
            </IconButton>
          </div>
        </Actions>
      </Content>
    </Card>
  )
}

