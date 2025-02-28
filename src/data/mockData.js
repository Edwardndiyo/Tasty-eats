export interface Restaurant {
    id: string
    name: string
    description: string
    cuisine: string
    rating: number
    priceRange: "low" | "medium" | "high"
    deliveryTime: string
    image: string
    featured: boolean
    menu: MenuItem[]
  }
  
  export interface MenuItem {
    id: string
    name: string
    description: string
    price: number
    image: string
    category: string
    type: "veg" | "non-veg"
    featured: boolean
    restaurantId: string
  }
  
  export const restaurants: Restaurant[] = [
    {
      id: "1",
      name: "Pizza Paradise",
      description: "Authentic Italian pizzas made with fresh ingredients",
      cuisine: "Italian",
      rating: 4.5,
      priceRange: "medium",
      deliveryTime: "30-45 min",
      image: "/placeholder.svg",
      featured: true,
      menu: [
        {
          id: "1-1",
          name: "Margherita Pizza",
          description: "Fresh tomatoes, mozzarella, basil, and olive oil",
          price: 14.99,
          image: "/placeholder.svg",
          category: "Pizza",
          type: "veg",
          featured: true,
          restaurantId: "1",
        },
        {
          id: "1-2",
          name: "Pepperoni Pizza",
          description: "Classic pepperoni with mozzarella and tomato sauce",
          price: 16.99,
          image: "/placeholder.svg",
          category: "Pizza",
          type: "non-veg",
          featured: true,
          restaurantId: "1",
        },
      ],
    },
    {
      id: "2",
      name: "Burger Bliss",
      description: "Gourmet burgers made with premium ingredients",
      cuisine: "American",
      rating: 4.3,
      priceRange: "medium",
      deliveryTime: "25-40 min",
      image: "/placeholder.svg",
      featured: true,
      menu: [
        {
          id: "2-1",
          name: "Classic Cheeseburger",
          description: "Angus beef patty with cheddar cheese and special sauce",
          price: 12.99,
          image: "/placeholder.svg",
          category: "Burgers",
          type: "non-veg",
          featured: true,
          restaurantId: "2",
        },
        {
          id: "2-2",
          name: "Veggie Burger",
          description: "Plant-based patty with fresh vegetables",
          price: 11.99,
          image: "/placeholder.svg",
          category: "Burgers",
          type: "veg",
          featured: false,
          restaurantId: "2",
        },
      ],
    },
  ]
  
  export const featuredItems = restaurants.flatMap((restaurant) => restaurant.menu.filter((item) => item.featured))
  
  