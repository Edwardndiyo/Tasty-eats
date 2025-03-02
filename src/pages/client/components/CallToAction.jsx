import styled from "styled-components"

const Section = styled.section`
  padding: 3rem 1.5rem;
  margin: 3rem 0;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryForeground};
  text-align: center;
`

const Container = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const Title = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 1.2;
  
  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`

const Description = styled.p`
  color: ${(props) => props.theme.colors.primaryForeground};
  opacity: 0.8;
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`

const Button = styled.button`
  display: inline-flex;
  height: 3rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
  padding: 0 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.backgroundHover};
  }
`

export default function CallToAction() {
  return (
    <Section>
      <Container>
        <Title>Discover the Best Food in Your Area</Title>
        <Description>
          Browse through hundreds of menus from top-rated restaurants and get your favorite food delivered to your
          doorstep.
        </Description>
        <div>
          <Button>Browse Menus</Button>
        </div>
      </Container>
    </Section>
  )
}

