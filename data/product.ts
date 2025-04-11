import { Product } from "@/types/Product";
import { IWishlistItem } from "@/types/Wishlist";

export const sampleWishlist: IWishlistItem[] = [
  {
    _id: "675289c4365032a2a9f79749",
    name: "Avocado Romper for Baby Boy",
    price: 42000,
    salePrice: 2000,
    sizes: [
      { _id: "1224", size: "0 - 3M", price: 350000, salePrice: 315000, stockQuantity: 100 },
      { _id: "12", size: "3 - 6M", price: 350000, salePrice: 315000, stockQuantity: 100 },
      { _id: "132", size: "3 - 6M", price: 350000, salePrice: 315000, stockQuantity: 100 },
      { _id: "122", size: "3 - 6M", price: 350000, salePrice: 315000, stockQuantity: 100 },
      { _id: "123", size: "3 - 6M", price: 350000, salePrice: 315000, stockQuantity: 100 },
    ],
    colors: [],
    slug: "turban-bow-clips-for-baby-girls",
  }, {
    _id: "675289c43650342a2a9f79749",
    name: "Turban/Bow Clips for Baby Girls",
    price: 42000,
    salePrice: 2000,
    sizes: [
      { _id: "122", size: "0 - 3M", price: 350000, salePrice: 315000, stockQuantity: 100 },
      { _id: "12", size: "3 - 6M", price: 350000, salePrice: 315000, stockQuantity: 100 },
    ],    colors: [],
    slug: "turban-bow-clips-for-baby-girls",
  }, {
    _id: "675289c14365032a2a9f79749",
    name: "Turban/Bow Clips for Baby Girls",
    price: 42000,
    salePrice: 2000,
    sizes: [
      { _id: "122", size: "0 - 3M", price: 350000, salePrice: 315000, stockQuantity: 100 },
      { _id: "12", size: "3 - 6M", price: 350000, salePrice: 315000, stockQuantity: 100 },
    ],
    colors: [],
    slug: "turban-bow-clips-for-baby-girls",
  }, {
    _id: "675289c43265032a2a9f79749",
    name: "Turban/Bow Clips for Baby Girls",
    price: 42000,
    salePrice: 2000,
    sizes: [],
    colors: [],
    slug: "turban-bow-clips-for-baby-girls",
  }, {
    _id: "6275289c4365032a2a9f79749",
    name: "Turban/Bow Clips for Baby Girls",
    price: 42000,
    salePrice: 2000,
    sizes: [],
    colors: [],
    slug: "turban-bow-clips-for-baby-girls",
  },
];

export const sampleProducts: Product[] = [
  {
    _id: "675289c4365032a2a9f79749",
    name: "Turban/Bow Clips for Baby Girls",
    description:
      "Handcrafted from soft and high-quality fabrics, these accessories provide maximum comfort for your baby while ensuring safety for their delicate skin. The turban and bow clips feature adorable bow designs, harmonious colors, and eye-catching patterns. These accessories not only make your baby even more charming but also serve as the perfect accent for any outfit",
    price: 42000,
    salePrice: 2000,
    stockQuantity: 100,
    colors: [
      {
        id: "eb9d9a4e-c72d-4d22-97bb-15457d9c7a09",
        color: "#ff0000",
        images: [
          "/assets/images/shop/product.png",
          "/assets/images/shop/product.png",
          "/assets/images/shop/product.png",
          "/assets/images/shop/product.png",
        ],
        imageUrl: "file-1733461089061-8fcb3ac4-f3a1-4d24-ba60-256eeebaafba.png",
      },
      {
        id: "baf69961-d84f-4223-9438-a53a0aa29111",
        color: "#0066ff",
        images: [
          "https://laandlin-api.vercel.app/api/images/file-1733461123889-7bf6bd61-bbad-4dd2-b879-aa721fa38103.png",
        ],
        imageUrl: "file-1733461075348-75b83c63-5ccc-4be8-94ca-20964425fd82.png",
      },
    ],
    sizes: null,
    tags: [
      {
        _id: "66e16bc955b3f9b19a17c418",
        name: "Hair Accessories",
      },
    ],
    sku: "123456",
    sold: 0,
    slug: "turban-bow-clips-for-baby-girls",
    material: ["Handmade Design", "Adorable Style", "Soft and Safe Materials", "Easy to Mix & Match"],
    ages: "5",
    gender: "Girl",
    status: "Sale",
    availability: "In Stock",
    // collection: {
    //   _id: "6760e948f31df5b1b0162986",
    //   name: "Year of the Snake",
    //   slug: "year-of-the-snake",
    //   bannerUrl: "file-1734404246490-2f6cb870-761f-448b-ba38-0e4ce6e1bac3.png",
    // },
    category: {
      _id: "66f177ca2522f727e60b0cc0",
      name: "Accessories",
    },
    weight: 0.5,
  },
  {
    _id: "6752a9d9f6ebde285aa3f8s7",
    name: "Avocado Romper for Baby Boy",
    description:
      "The baby boy romper with a cute avocado pattern is uniquely crafted by Laandlin. Made from soft muslin fabric, it ensures comfort and safety for sensitive skin. The green and white short-sleeve design adds a touch of charm and elegance.",
    price: 350000,
    salePrice: 315000,
    stockQuantity: 100,
    colors: [
      {
        id: "6db45a42-c5d5-481b-a324-9ac99698feeb",
        color: "#8cf38f",
        images: [
          "file-1733470785294-c05dce06-7721-42b0-aa6c-6975a9428d76.png",
          "file-1733470781863-7387026e-075f-4098-84c7-8d09cdd74cf3.png",
        ],
        imageUrl: "file-1733470785294-c05dce06-7721-42b0-aa6c-6975a9428d76.png",
      },
      {
        id: "6db45a42-c5d5-481b-a324-9ac99698feeb",
        color: "#8cf38f",
        images: [
          "file-1733470785294-c05dce06-7721-42b0-aa6c-6975a9428d76.png",
          "file-1733470781863-7387026e-075f-4098-84c7-8d09cdd74cf3.png",
        ],
        imageUrl: "file-1733470785294-c05dce06-7721-42b0-aa6c-6975a9428d76.png",
      },
    ],
    tags: [
      { _id: "66e16bde55b3f9b19a17c41c", name: "Baby Shirt" },
      { _id: "66e16bd155b3f9b19a17c41a", name: "Suit" },
    ],
    sizes: [
      { _id: "122", size: "0 - 3M", price: 350000, salePrice: 315000, stockQuantity: 100 },
      { _id: "12", size: "3 - 6M", price: 350000, salePrice: 315000, stockQuantity: 100 },
    ],
    sku: "123456",
    sold: 0,
    slug: "avocado-romper-for-baby-boy",
    material: ["Handmade Design", "Adorable Style", "Soft and Safe Materials", "Easy to Mix & Match"],
    ages: "5",
    gender: "Boy",
    status: "Sale",
    availability: "In Stock",
    category: {
      _id: "6752b299f6ebde285aa4084f",
      name: "Romper",
    },

    weight: 0.5,
  },
  {
    _id: "6752a9d9f6esde285ay3f847",
    name: "Avocado Romper for Baby Boy",
    description:
      "The baby boy romper with a cute avocado pattern is uniquely crafted by Laandlin. Made from soft muslin fabric, it ensures comfort and safety for sensitive skin. The green and white short-sleeve design adds a touch of charm and elegance.",
    price: 350000,
    salePrice: 315000,
    stockQuantity: 100,
    colors: [
      {
        id: "6db45a42-c5d5-481b-a324-9ac99698feeb",
        color: "#8cf38f",
        images: [
          "file-1733470785294-c05dce06-7721-42b0-aa6c-6975a9428d76.png",
          "file-1733470781863-7387026e-075f-4098-84c7-8d09cdd74cf3.png",
        ],
        imageUrl: "file-1733470785294-c05dce06-7721-42b0-aa6c-6975a9428d76.png",
      },
    ],
    tags: [
      { _id: "66e16bde55b3f9b19a17c41c", name: "Baby Shirt" },
      { _id: "66e16bd155b3f9b19a17c41a", name: "Suit" },
    ],
    sizes: [
      { _id: "122", size: "0 - 3M", price: 350000, salePrice: 315000, stockQuantity: 100 },
      { _id: "12", size: "3 - 6M", price: 350000, salePrice: 315000, stockQuantity: 100 },
    ],
    sku: "123456",
    sold: 0,
    slug: "avocado-romper-for-baby-boy",
    material: ["Handmade Design", "Adorable Style", "Soft and Safe Materials", "Easy to Mix & Match"],
    ages: "5",
    gender: "Boy",
    status: "Sale",
    availability: "In Stock",
    category: {
      _id: "6752b299f6ebde285aa4084f",
      name: "Romper",
    },

    weight: 0.5,
  },
  {
    _id: "6752a9d9f6ebde285aa3f847",
    name: "Avocado Romper for Baby Boy",
    description:
      "The baby boy romper with a cute avocado pattern is uniquely crafted by Laandlin. Made from soft muslin fabric, it ensures comfort and safety for sensitive skin. The green and white short-sleeve design adds a touch of charm and elegance.",
    price: 350000,
    salePrice: 315000,
    stockQuantity: 100,
    colors: [
      {
        id: "6db45a42-c5d5-481b-a324-9ac99698feeb",
        color: "#8cf38f",
        images: [
          "file-1733470785294-c05dce06-7721-42b0-aa6c-6975a9428d76.png",
          "file-1733470781863-7387026e-075f-4098-84c7-8d09cdd74cf3.png",
        ],
        imageUrl: "file-1733470785294-c05dce06-7721-42b0-aa6c-6975a9428d76.png",
      },
    ],
    tags: [
      { _id: "66e16bde55b3f9b19a17c41c", name: "Baby Shirt" },
      { _id: "66e16bd155b3f9b19a17c41a", name: "Suit" },
    ],
    sizes: [
      { _id: "122", size: "0 - 3M", price: 350000, salePrice: 315000, stockQuantity: 100 },
      { _id: "12", size: "3 - 6M", price: 350000, salePrice: 315000, stockQuantity: 100 },
    ],
    sku: "123456",
    sold: 0,
    slug: "avocado-romper-for-baby-boy",
    material: ["Handmade Design", "Adorable Style", "Soft and Safe Materials", "Easy to Mix & Match"],
    ages: "5",
    gender: "Boy",
    status: "Sale",
    availability: "In Stock",
    category: {
      _id: "6752b299f6ebde285aa4084f",
      name: "Romper",
    },

    weight: 0.5,
  },
  {
    _id: "6752a9d9f6ebd7e285a3f847",
    name: "Avocado Romper for Baby Boy",
    description:
      "The baby boy romper with a cute avocado pattern is uniquely crafted by Laandlin. Made from soft muslin fabric, it ensures comfort and safety for sensitive skin. The green and white short-sleeve design adds a touch of charm and elegance.",
    price: 350000,
    salePrice: 315000,
    stockQuantity: 100,
    colors: [
      {
        id: "6db45a42-c5d5-481b-a324-9ac99698feeb",
        color: "#8cf38f",
        images: [
          "file-1733470785294-c05dce06-7721-42b0-aa6c-6975a9428d76.png",
          "file-1733470781863-7387026e-075f-4098-84c7-8d09cdd74cf3.png",
        ],
        imageUrl: "file-1733470785294-c05dce06-7721-42b0-aa6c-6975a9428d76.png",
      },
    ],
    tags: [
      { _id: "66e16bde55b3f9b19a17c41c", name: "Baby Shirt" },
      { _id: "66e16bd155b3f9b19a17c41a", name: "Suit" },
    ],
    sizes: [
      { _id: "122", size: "0 - 3M", price: 350000, salePrice: 315000, stockQuantity: 100 },
      { _id: "12", size: "3 - 6M", price: 350000, salePrice: 315000, stockQuantity: 100 },
    ],
    sku: "123456",
    sold: 0,
    slug: "avocado-romper-for-baby-boy",
    material: ["Handmade Design", "Adorable Style", "Soft and Safe Materials", "Easy to Mix & Match"],
    ages: "5",
    gender: "Boy",
    status: "Sale",
    availability: "In Stock",
    category: {
      _id: "6752b299f6ebde285aa4084f",
      name: "Romper",
    },

    weight: 0.5,
  },
  {
    _id: "6752a9d9f62ebde28aa3f847",
    name: "Avocado Romper for Baby Boy",
    description:
      "The baby boy romper with a cute avocado pattern is uniquely crafted by Laandlin. Made from soft muslin fabric, it ensures comfort and safety for sensitive skin. The green and white short-sleeve design adds a touch of charm and elegance.",
    price: 350000,
    salePrice: 315000,
    stockQuantity: 100,
    colors: [
      {
        id: "6db45a42-c5d5-481b-a324-9ac99698feeb",
        color: "#8cf38f",
        images: [
          "file-1733470785294-c05dce06-7721-42b0-aa6c-6975a9428d76.png",
          "file-1733470781863-7387026e-075f-4098-84c7-8d09cdd74cf3.png",
        ],
        imageUrl: "file-1733470785294-c05dce06-7721-42b0-aa6c-6975a9428d76.png",
      },
    ],
    tags: [
      { _id: "66e16bde55b3f9b19a17c41c", name: "Baby Shirt" },
      { _id: "66e16bd155b3f9b19a17c41a", name: "Suit" },
    ],
    sizes: [
      { _id: "122", size: "0 - 3M", price: 350000, salePrice: 315000, stockQuantity: 100 },
      { _id: "12", size: "3 - 6M", price: 350000, salePrice: 315000, stockQuantity: 100 },
    ],
    sku: "123456",
    sold: 0,
    slug: "avocado-romper-for-baby-boy",
    material: ["Handmade Design", "Adorable Style", "Soft and Safe Materials", "Easy to Mix & Match"],
    ages: "5",
    gender: "Boy",
    status: "Sale",
    availability: "In Stock",
    category: {
      _id: "6752b299f6ebde285aa4084f",
      name: "Romper",
    },

    weight: 0.5,
  },
];
