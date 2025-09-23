import { Product, OutfitLook } from './types'

export const weeklyProducts: Product[] = [
  {
    id: 'ourlegacy-third-cut-denim',
    title: "Third Cut Digital Denim Print",
    brand: "Our Legacy",
    description: "Produced in an Italian denim with a trompe l'oeil vintage denim print, the mens Third Cut jeans have a relaxed, wide legged fit",
    image: "https://ourlegacy.centracdn.net/client/dynamic/images/8380_3868101f95-m4205tdd_3166-rtail-big.jpg",
    price: "€430",
    originalPrice: "",
    category: "Finds of the Week",
    tags: ["denim", "premium", "italian"],
    productLink: "https://www.ourlegacy.com/third-cut-digital-denim-print",
    affiliateLink: "https://www.ourlegacy.com/third-cut-digital-denim-print?ref=elevatedgentleman",
    featured: true,
    inStock: true,
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["Digital Denim Print"]
  },
  {
    id: 'poolhouse-silverlake-crop',
    title: "Silverlake Crop Tee II",
    brand: "Pool House New York",
    description: "A boxy, drop-shoulder relaxed men's crop t-shirt with classic white finish. Perfect for contemporary casual styling.",
    image: "https://poolhousenewyork.com/cdn/shop/files/silverlake_crop_tee_boxy_drop_shoulder_relaxed_mens_t-shirt_baggy_shopify_cover_image_classic_white_1.jpg",
    price: "$65",
    originalPrice: "",
    category: "Fashion on a Budget",
    tags: ["basics", "crop", "casual"],
    productLink: "https://poolhousenewyork.com/products/the-silverlake-crop-tee-ii-1",
    affiliateLink: "https://poolhousenewyork.com/products/the-silverlake-crop-tee-ii-1?ref=elevatedgentleman",
    featured: false,
    inStock: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Classic White", "Black", "Sage"]
  },
  {
    id: 'bananarepublic-suede-trucker',
    title: "Suede Trucker Jacket",
    brand: "Banana Republic",
    description: "Premium suede trucker jacket with classic western-inspired silhouette. Crafted for sophisticated casual wear.",
    image: "https://bananarepublic.gap.com/webcontent/0056/287/618/cn56287618.jpg",
    price: "$550",
    originalPrice: "$750",
    category: "Deals of the Week",
    tags: ["suede", "outerwear", "classic"],
    productLink: "https://bananarepublic.gap.com/browse/product.do?pid=502836002",
    affiliateLink: "https://bananarepublic.gap.com/browse/product.do?pid=502836002&ref=elevatedgentleman",
    featured: true,
    inStock: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Tan", "Brown"]
  },
  {
    id: 'acne-2021m-jeans',
    title: "2021M Straight-Leg Jeans",
    brand: "Acne Studios",
    description: "Contemporary straight-leg jeans with premium construction and modern fit. A staple for the discerning wardrobe.",
    image: "/images/Image 3.jpeg",
    price: "$350",
    originalPrice: "",
    category: "High Roller List",
    tags: ["denim", "luxury", "acne"],
    productLink: "https://www.mrporter.com/en-us/mens/product/acne-studios/clothing/straight-jeans/2021m-straight-leg-jeans/46376663162902746",
    affiliateLink: "https://www.mrporter.com/en-us/mens/product/acne-studios/clothing/straight-jeans/2021m-straight-leg-jeans/46376663162902746?ref=elevatedgentleman",
    featured: false,
    inStock: true,
    sizes: ["29", "30", "31", "32", "33", "34"],
    colors: ["Raw Indigo", "Black"]
  },
  {
    id: 'cos-merino-sweater',
    title: "Slim Merino Wool Crew-Neck Sweater",
    brand: "COS",
    description: "A refined essential, this sweater is crafted from pure merino wool that's lightweight and soft to the touch. Cut in a slim shape with ribbed detailing.",
    image: "https://media.cos.com/assets/001/cd/1c/cd1c2d2ff2a4d76c77cd97b30cebbf9b6e64bf38_xxl-1.jpg",
    price: "$129",
    originalPrice: "",
    category: "Best Accessories",
    tags: ["knitwear", "merino", "essential"],
    productLink: "https://www.cos.com/en-us/men/menswear/knitwear/merino/product/slim-merino-wool-crew-neck-jumper-cobalt-blue-1260173008",
    affiliateLink: "https://www.cos.com/en-us/men/menswear/knitwear/merino/product/slim-merino-wool-crew-neck-jumper-cobalt-blue-1260173008?ref=elevatedgentleman",
    featured: false,
    inStock: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Cobalt Blue", "Black", "Cream", "Grey"]
  },
  {
    id: 'california-arts-overcoat',
    title: "Manhattan Oversized Overcoat",
    brand: "California Arts",
    description: "Traditional Wall Street meets west coast casual. Blending precise tailoring with a minimalist, relaxed silhouette in Deep Moss.",
    image: "https://california-arts.com/cdn/shop/files/CA-AUG--13362_2048x2048.jpg?v=1757563502",
    price: "$748",
    originalPrice: "",
    category: "Emerging Brand Spotlight",
    tags: ["outerwear", "oversized", "premium"],
    productLink: "https://california-arts.com/collections/coats-jackets/products/manhattanovercoat_deep-moss",
    affiliateLink: "https://california-arts.com/collections/coats-jackets/products/manhattanovercoat_deep-moss?ref=elevatedgentleman",
    featured: true,
    inStock: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Deep Moss", "Black", "Camel"]
  },
  // Additional products for outfit combinations
  {
    id: 'white-dress-shirt',
    title: "Classic White Dress Shirt",
    brand: "Everlane",
    description: "Crisp, clean lines with a modern fit. Made from premium cotton with a subtle texture.",
    image: "/images/white-dress-shirt.jpg",
    price: "$88",
    originalPrice: "",
    category: "Best Accessories",
    tags: ["basics", "formal", "cotton"],
    productLink: "https://www.everlane.com/products/mens-relaxed-dress-shirt-white",
    affiliateLink: "https://www.everlane.com/products/mens-relaxed-dress-shirt-white?ref=elevatedgentleman",
    featured: false,
    inStock: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Light Blue"]
  },
  {
    id: 'leather-loafers',
    title: "Penny Loafers",
    brand: "Cole Haan",
    description: "Classic penny loafers in rich leather with a modern sole. Perfect for business casual or smart casual looks.",
    image: "/images/leather-loafers.jpg",
    price: "$280",
    originalPrice: "",
    category: "Best Accessories",
    tags: ["shoes", "leather", "formal"],
    productLink: "https://www.colehaan.com/mens-pinch-penny-loafer-british-tan/C04059.html",
    affiliateLink: "https://www.colehaan.com/mens-pinch-penny-loafer-british-tan/C04059.html?ref=elevatedgentleman",
    featured: false,
    inStock: true,
    sizes: ["8", "8.5", "9", "9.5", "10", "10.5", "11", "12"],
    colors: ["British Tan", "Black"]
  }
]

export const outfitLooks: OutfitLook[] = [
  {
    id: 'smart-casual-weekend',
    title: "Smart Casual Weekend",
    description: "Perfect for weekend outings, casual dates, or relaxed social gatherings. Combines comfort with style.",
    heroImage: "https://media.cos.com/assets/001/cd/1c/cd1c2d2ff2a4d76c77cd97b30cebbf9b6e64bf38_xxl-1.jpg",
    occasion: "Weekend",
    season: "Fall/Winter",
    styleType: "Smart Casual",
    products: [
      weeklyProducts.find(p => p.id === 'cos-merino-sweater')!,
      weeklyProducts.find(p => p.id === 'acne-2021m-jeans')!,
      weeklyProducts.find(p => p.id === 'leather-loafers')!
    ],
    totalPrice: 759,
    featured: true
  },
  {
    id: 'elevated-street-style',
    title: "Elevated Street Style",
    description: "Contemporary street style with premium touches. Perfect for creative professionals and modern casual wear.",
    heroImage: "https://ourlegacy.centracdn.net/client/dynamic/images/8380_3868101f95-m4205tdd_3166-rtail-big.jpg",
    occasion: "Casual",
    season: "Spring/Summer",
    styleType: "Modern",
    products: [
      weeklyProducts.find(p => p.id === 'poolhouse-silverlake-crop')!,
      weeklyProducts.find(p => p.id === 'ourlegacy-third-cut-denim')!,
      weeklyProducts.find(p => p.id === 'bananarepublic-suede-trucker')!
    ],
    totalPrice: 1045,
    featured: true
  },
  {
    id: 'business-casual-refined',
    title: "Business Casual Refined",
    description: "Sophisticated business casual look that works for client meetings, office days, or professional events.",
    heroImage: "https://california-arts.com/cdn/shop/files/CA-AUG--13362_2048x2048.jpg?v=1757563502",
    occasion: "Work",
    season: "Fall/Winter",
    styleType: "Business Casual",
    products: [
      weeklyProducts.find(p => p.id === 'white-dress-shirt')!,
      weeklyProducts.find(p => p.id === 'california-arts-overcoat')!,
      weeklyProducts.find(p => p.id === 'acne-2021m-jeans')!,
      weeklyProducts.find(p => p.id === 'leather-loafers')!
    ],
    totalPrice: 1466,
    featured: false
  }
]