import styled, { css } from "styled-components"

type ButtonVariant = "primary" | "secondary" | "outline" | "text"
type ButtonSize = "small" | "medium" | "large"

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  disabled?: boolean
}

const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case "primary":
      return css`
        background: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.text.light};
        border: none;

        &:hover {
          background: ${({ theme }) => theme.colors.primary}ee;
        }
      `
    case "secondary":
      return css`
        background: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.text.light};
        border: none;

        &:hover {
          background: ${({ theme }) => theme.colors.secondary}ee;
        }
      `
    case "outline":
      return css`
        background: transparent;
        color: ${({ theme }) => theme.colors.primary};
        border: 2px solid ${({ theme }) => theme.colors.primary};

        &:hover {
          background: ${({ theme }) => theme.colors.primary}11;
        }
      `
    case "text":
      return css`
        background: transparent;
        color: ${({ theme }) => theme.colors.primary};
        border: none;
        padding: 0;

        &:hover {
          text-decoration: underline;
        }
      `
  }
}

const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case "small":
      return css`
        padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
        font-size: ${({ theme }) => theme.typography.small.fontSize};
      `
    case "medium":
      return css`
        padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
        font-size: ${({ theme }) => theme.typography.body.fontSize};
      `
    case "large":
      return css`
        padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
        font-size: ${({ theme }) => theme.typography.h3.fontSize};
      `
  }
}

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};
  gap: ${({ theme }) => theme.spacing.sm};

  ${({ variant = "primary" }) => getVariantStyles(variant)}
  ${({ size = "medium" }) => getSizeStyles(size)}
  ${({ fullWidth }) => fullWidth && css`width: 100%;`}
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}33;
  }
`

