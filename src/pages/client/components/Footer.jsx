import styled from "styled-components"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

const FooterWrapper = styled.footer`
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.colors.border};
  background-color: ${(props) => props.theme.colors.background};
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
  
  @media (min-width: 768px) {
    padding: 3rem 1.5rem;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Logo = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
`

const Description = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.mutedForeground};
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`

const SocialLink = styled.a`
  color: ${(props) => props.theme.colors.mutedForeground};
  
  &:hover {
    color: ${(props) => props.theme.colors.foreground};
  }
`

const ColumnTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  margin-bottom: 1rem;
`

const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const LinkItem = styled.li`
  font-size: 0.875rem;
`

const Link = styled.a`
  color: ${(props) => props.theme.colors.mutedForeground};
  text-decoration: none;
  
  &:hover {
    color: ${(props) => props.theme.colors.foreground};
  }
`

const BottomSection = styled.div`
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const Copyright = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.mutedForeground};
`

const LegalLinks = styled.div`
  display: flex;
  gap: 1rem;
`

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Grid>
          <Column>
            <Logo>TastyEats</Logo>
            <Description>Connecting you with the best restaurants and food in your area.</Description>
            <SocialLinks>
              <SocialLink href="#" aria-label="Facebook">
                <Facebook size={20} />
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter">
                <Twitter size={20} />
              </SocialLink>
              <SocialLink href="#" aria-label="Instagram">
                <Instagram size={20} />
              </SocialLink>
              <SocialLink href="#" aria-label="YouTube">
                <Youtube size={20} />
              </SocialLink>
            </SocialLinks>
          </Column>

          <Column>
            <ColumnTitle>Company</ColumnTitle>
            <LinkList>
              <LinkItem>
                <Link href="#">About Us</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#">Careers</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#">Contact Us</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#">Partner With Us</Link>
              </LinkItem>
            </LinkList>
          </Column>

          <Column>
            <ColumnTitle>Information</ColumnTitle>
            <LinkList>
              <LinkItem>
                <Link href="#">Privacy Policy</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#">Terms of Service</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#">Refund Policy</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#">FAQ</Link>
              </LinkItem>
            </LinkList>
          </Column>

          <Column>
            <ColumnTitle>Cities</ColumnTitle>
            <LinkList>
              <LinkItem>
                <Link href="#">Calabar</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#">Obudu</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#">Ikom</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#">Uyo</Link>
              </LinkItem>
            </LinkList>
          </Column>
        </Grid>

        <BottomSection>
          <Copyright>&copy; {new Date().getFullYear()} TastyEats. All rights reserved.</Copyright>
          <LegalLinks>
            <Link href="#">Terms</Link>
            <Link href="#">Privacy</Link>
            <Link href="#">Cookies</Link>
          </LegalLinks>
        </BottomSection>
      </Container>
    </FooterWrapper>
  )
}

