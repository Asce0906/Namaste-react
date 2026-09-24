import { FaMagnifyingGlass, FaStar } from "react-icons/fa6";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    id: 1,
    name: "Spice Route Biryani House",
    cuisines: ["Biryani", "Mughlai", "North Indian"],
    rating: 4.5,
    deliveryTime: 30,
    cost: 320,
    image:
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "The Burger Shack",
    cuisines: ["Burgers", "American", "Fast Food"],
    rating: 4.2,
    deliveryTime: 25,
    cost: 249,
    image:
      "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Napoli Wood Fired Pizza",
    cuisines: ["Pizza", "Italian"],
    rating: 4.6,
    deliveryTime: 35,
    cost: 399,
    image:
      "https://images.unsplash.com/photo-1594179047502-07fb8a5451f6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Dosa Junction",
    cuisines: ["South Indian", "Dosa", "Breakfast"],
    rating: 4.4,
    deliveryTime: 20,
    cost: 149,
    image:
      "https://images.unsplash.com/photo-1708146464361-5c5ce4f9abb6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Dragon Bowl",
    cuisines: ["Chinese", "Noodles", "Asian"],
    rating: 4.0,
    deliveryTime: 32,
    cost: 279,
    image:
      "https://images.pexels.com/photos/17848654/pexels-photo-17848654/free-photo-of-meal-with-chopsticks-in-bowl.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 6,
    name: "Tokyo Bites Sushi",
    cuisines: ["Japanese", "Sushi"],
    rating: 4.7,
    deliveryTime: 45,
    cost: 599,
    image:
      "https://images.pexels.com/photos/2323391/pexels-photo-2323391.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 7,
    name: "Punjabi Tadka Dhaba",
    cuisines: ["Punjabi", "North Indian", "Thali"],
    rating: 4.3,
    deliveryTime: 28,
    cost: 229,
    image:
      "https://images.unsplash.com/photo-1742599361574-6fb156181466?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "Taco Fiesta",
    cuisines: ["Mexican", "Tacos", "Wraps"],
    rating: 3.9,
    deliveryTime: 33,
    cost: 199,
    image:
      "https://cdn.pixabay.com/photo/2014/01/14/22/14/tacos-245241_1280.jpg",
  },
  {
    id: 9,
    name: "Sweet Tooth Desserts",
    cuisines: ["Desserts", "Ice Cream", "Bakery"],
    rating: 4.8,
    deliveryTime: 22,
    cost: 179,
    image:
      "https://images.unsplash.com/photo-1594179047502-07fb8a5451f6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    name: "Pasta La Vista",
    cuisines: ["Pasta", "Italian", "Continental"],
    rating: 4.1,
    deliveryTime: 38,
    cost: 349,
    image:
      "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 11,
    name: "Chaat Corner",
    cuisines: ["Street Food", "Chaat", "Snacks"],
    rating: 4.3,
    deliveryTime: 18,
    cost: 99,
    image:
      "https://images.unsplash.com/photo-1594179047502-07fb8a5451f6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 12,
    name: "Grill & Chill BBQ",
    cuisines: ["BBQ", "Kebabs", "Grill"],
    rating: 4.4,
    deliveryTime: 40,
    cost: 429,
    image:
      "https://images.pexels.com/photos/5374014/pexels-photo-5374014.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 13,
    name: "Green Bowl Salads",
    cuisines: ["Healthy", "Salads", "Vegan"],
    rating: 3.8,
    deliveryTime: 26,
    cost: 259,
    image:
      "https://images.pexels.com/photos/6086/food-salad-healthy-vegetables.jpg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 14,
    name: "Coastal Curry Kitchen",
    cuisines: ["Seafood", "Kerala", "Coastal"],
    rating: 4.5,
    deliveryTime: 42,
    cost: 379,
    image:
      "https://images.unsplash.com/photo-1742599361539-f096753d1100?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 15,
    name: "Sandwich Symphony",
    cuisines: ["Sandwiches", "Cafe", "Coffee"],
    rating: 4.0,
    deliveryTime: 24,
    cost: 169,
    image:
      "https://images.unsplash.com/photo-1637330765988-89f4be4ec090?auto=format&fit=crop&w=600&q=80",
  },
];

const ResCard = (props) => {
  const { name, cuisines, rating, deliveryTime, cost, image } = props.resData;

  return (
    <div className="res_card">
      <img src={image} alt={`${name} logo`} />
      <div className="card_details">
        <h1>{name}</h1>
        <p>{cuisines.join(", ")}</p>
        <span className="rating">
          {rating}
          <FaStar color="orange" />
        </span>
        <p>{`Delivered in ${deliveryTime} mins`}</p>
        <div className="buy">
          <span className="price">{`₹${cost}`}</span>
          {/* <button className="btn">Buy Now</button> */}
        </div>
      </div>
    </div>
  );
};

const ResContainer = () => {
  return (
    <div className="res_container">
      <div className="search">
        <input type="text" placeholder="Search Restaraunts..." />
        <button>
          <span>Search</span>
          <FaMagnifyingGlass />
        </button>
      </div>
      <div className="card_container">
        {resList.map((res) => (
          <ResCard key={res.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <ResContainer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
