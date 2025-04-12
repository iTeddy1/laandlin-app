// Dummy Cart Data (Replace with your actual cart data)
const initialCartItems: any[] = [
  {
    itemId: "cart1",
    productId: "pegasus38-id", // Replace with actual product ID
    name: "Nike Air Zoom Pegasus 38",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/7b359f1b-9498-4241-8157-97947621137f/air-zoom-pegasus-38-mens-road-running-shoes-J1D8rv.jpg",
    price: 120,
    salePrice: null, // No sale price
    color: { name: "Black/White/Anthracite", hex: "#000000" }, // Example color
    size: "US 9",
    quantity: 1,
    totalItemPrice: 120 * 1,
  },
  {
    itemId: "cart2",
    productId: "club-fleece-hoodie-id", // Replace with actual product ID
    name: "Nike Sportswear Club Fleece Hoodie",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/1036a321-8a0c-482f-b22f-31a10399613d/sportswear-club-fleece-pullover-hoodie-lK2f1n.jpg",
    price: 60,
    salePrice: 50, // Example sale price
    color: { name: "Heather Grey/White", hex: "#a9a9a9" }, // Example color
    size: "M",
    quantity: 2,
    totalItemPrice: 60 * 2, // Use salePrice if available
  },
  // Add more dummy cart items here following the CartItemDisplay interface
];

export default initialCartItems;
