import styled from "styled-components"
import { Star } from "lucide-react"

const Container = styled.div`
  background-color: white;
  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  overflow: hidden;
`

const Header = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
`

const List = styled.div`
  max-height: 400px;
  overflow-y: auto;
`

const ReviewItem = styled.div`
  padding: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};

  &:last-child {
    border-bottom: none;
  }
`

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
`

const ReviewerInfo = styled.div``

const ReviewerName = styled.div`
  font-weight: 500;
  margin-bottom: 0.25rem;
`

const ReviewDate = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.mutedForeground};
`

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #f59e0b;
`

const ReviewText = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.mutedForeground};
`

const DishInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${(props) => props.theme.colors.border};
`

const DishImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 0.375rem;
  object-fit: cover;
`

const DishName = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
`

export default function ReviewsList() {
  const reviews = [
    {
      id: 1,
      reviewer: "John Doe",
      date: "2 days ago",
      rating: 5,
      text: "Amazing burger! The meat was perfectly cooked and the toppings were fresh. Will definitely order again!",
      dish: {
        name: "Classic Burger",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=64&h=64&fit=crop",
      },
    },
    {
      id: 2,
      reviewer: "Jane Smith",
      date: "1 week ago",
      rating: 4,
      text: "The pizza was delicious but took a bit longer than expected to arrive. Still worth the wait!",
      dish: {
        name: "Margherita Pizza",
        image: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=64&h=64&fit=crop",
      },
    },
  ]

  return (
    <Container>
      <Header>
        <Title>Recent Reviews</Title>
      </Header>
      <List>
        {reviews.map((review) => (
          <ReviewItem key={review.id}>
            <ReviewHeader>
              <ReviewerInfo>
                <ReviewerName>{review.reviewer}</ReviewerName>
                <ReviewDate>{review.date}</ReviewDate>
              </ReviewerInfo>
              <Rating>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < review.rating ? "currentColor" : "none"} />
                ))}
              </Rating>
            </ReviewHeader>
            <ReviewText>{review.text}</ReviewText>
            <DishInfo>
              <DishImage src={review.dish.image} alt={review.dish.name} />
              <DishName>{review.dish.name}</DishName>
            </DishInfo>
          </ReviewItem>
        ))}
      </List>
    </Container>
  )
}

