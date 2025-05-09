// MUI
import { styled } from "@mui/material/styles"

export const StyledLogo = styled("span")(() => ({
  fontFamily: "var(--font-protest), Arial, sans-serif",
  fontSize: "24px",
  fontWeight: "800",
  textTransform: "uppercase",
  display: "inline-flex",
  gap: "7px",
  verticalAlign: "middle",
  [`@media (max-width:600px)`]: {
    fontSize: "16px",
    span: {
      fontSize: "16px",
    },
  },
}))
