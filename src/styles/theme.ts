export const theme = {
    colors: {
      primary: "#FF4B2B",
      secondary: "#2B2B2B",
      accent: "#FFB800",
      background: "#FFFFFF",
      surface: "#F8F8F8",
      text: {
        primary: "#2B2B2B",
        secondary: "#757575",
        light: "#FFFFFF",
      },
      status: {
        success: "#4CAF50",
        warning: "#FFC107",
        error: "#F44336",
        info: "#2196F3",
      },
    },
    spacing: {
      xs: "4px",
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "32px",
    },
    breakpoints: {
      mobile: "320px",
      tablet: "768px",
      desktop: "1024px",
    },
    typography: {
      fontFamily: "'Poppins', sans-serif",
      h1: {
        fontSize: "2.5rem",
        fontWeight: 600,
      },
      h2: {
        fontSize: "2rem",
        fontWeight: 600,
      },
      h3: {
        fontSize: "1.75rem",
        fontWeight: 500,
      },
      body: {
        fontSize: "1rem",
        fontWeight: 400,
      },
      small: {
        fontSize: "0.875rem",
        fontWeight: 400,
      },
    },
    shadows: {
      sm: "0 1px 3px rgba(0,0,0,0.12)",
      md: "0 4px 6px rgba(0,0,0,0.1)",
      lg: "0 10px 15px rgba(0,0,0,0.1)",
    },
    transitions: {
      default: "0.3s ease-in-out",
    },
  }
  
  export type Theme = typeof theme
  
  