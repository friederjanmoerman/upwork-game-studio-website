// Styles
import theme from "@/theme"
import { StyledLogo } from "./Logo.styles"
import ColoredElement from "@/components/atoms/Line/ColoredElement"

const Logo = () => {
  return (
    <StyledLogo>
      Full <ColoredElement color={theme.palette.secondary.main} fontSize={"24px"} content={"—"} />
      Clip
    </StyledLogo>
  )
}

export default Logo
