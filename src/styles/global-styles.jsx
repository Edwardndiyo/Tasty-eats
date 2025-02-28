import { createGlobalStyle } from "styled-components"

export const theme = {
  colors: {
    background: "#ffffff",
    backgroundHover: "#f5f5f5",
    backgroundTransparent: "rgba(255, 255, 255, 0.8)",
    foreground: "#1f2937",
    card: "#ffffff",
    cardForeground: "#1f2937",
    primary: "#f97316",
    primaryDark: "#ea580c",
    primaryLight: "rgba(249, 115, 22, 0.1)",
    primaryForeground: "#ffffff",
    secondary: "#f1f5f9",
    secondaryForeground: "#1f2937",
    muted: "#f1f5f9",
    mutedForeground: "#64748b",
    accent: "#f1f5f9",
    accentForeground: "#1f2937",
    destructive: "#ef4444",
    destructiveForeground: "#ffffff",
    border: "#e2e8f0",
    input: "#e2e8f0",
    ring: "#1f2937",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  radii: {
    sm: "0.125rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    full: "9999px",
  },
}

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.foreground};
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  button, input, select, textarea {
    font-family: inherit;
  }
  
  ul, ol {
    list-style: none;
  }
`

