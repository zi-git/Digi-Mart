const products = [
  {
    name: "Trendy Boots",
    price: 3135,
    description:
      "Trendy Boots perfect for daily wear. Designed with quality and comfort in mind.",
    category: "footwear",
    image: "https://images.meesho.com/images/products/441503252/x8scf_512.webp",
    image2:
      "https://images.meesho.com/images/products/441503252/or46o_512.webp",
    image3:
      "https://images.meesho.com/images/products/441503252/khr3b_512.webp",
  },
  {
    name: "Paragon K6016L Women Sandals | Casual & Formal Sandals | Stylish, Comfortable & Durable | For Daily & Occasion Wear",
    price: 979,
    description:
      "Stylish Sandals perfect for daily wear. Designed with quality and comfort in mind.",
    category: "footwear",
    image:
      "https://paragonfootwear.com/cdn/shop/products/k6016l_grn_1.jpg?v=1741862762&width=1024",
    image2:
      "https://paragonfootwear.com/cdn/shop/products/k6016l_grn_2.jpg?v=1741862762&width=1024",
    image3:
      "https://paragonfootwear.com/cdn/shop/products/k6016l_grn_3_114x144_crop_center.jpg?v=1741862762",
  },
  {
    name: "Men's Flip Flop Slippers - WC6621 Navy Blue Red",
    price: 339,
    description:
      "Trendy Slippers perfect for daily wear. Designed with quality and comfort in mind.",
    category: "footwear",
    image:
      "https://www.walkaroo.in/cdn/shop/files/1_b539b171-b318-41bc-8d07-8c791aae51d3.jpg?v=1746536939&width=104",
    image2:
      "https://www.walkaroo.in/cdn/shop/files/2_f59fa8fd-8ec2-4334-af1e-820dcbd930ea.jpg?v=1746536939&width=104",
    image3:
      "https://www.walkaroo.in/cdn/shop/files/3_a0eecb12-84c3-48d5-bcf5-ec50f6eae87f.jpg?v=1746536939&width=104",
  },
  {
    name: "Men's Daily Wear V-Strap Sandals - WGP50006 Black",
    price: 49,
    description:
      "Elegant Slippers perfect for daily wear. Designed with quality and comfort in mind.",
    category: "footwear",
    image:
      "https://www.walkaroo.in/cdn/shop/files/1_241a5a17-fbf8-4264-ad82-eb0d221ded3d.jpg?v=1746162157&width=1000",
    image2:
      "https://www.walkaroo.in/cdn/shop/files/2_b2ae8883-9515-4607-92c3-0a808364255c.jpg?v=1746162157&width=104",
    image3:
      "https://www.walkaroo.in/cdn/shop/files/3_cf390287-145f-4d94-a4c2-7ac8c491a6d9.jpg?v=1746162157&width=104",
  },
  {
    name: "Men's Active Beads Sports Shoe - WS9163 Blue Green",
    price: 1799,
    description:
      "Elegant Sandals perfect for daily wear. Designed with quality and comfort in mind.",
    category: "footwear",
    image:
      "https://www.walkaroo.in/cdn/shop/files/1_8177b84f-3f1e-4455-849b-aec5578121c2.jpg?v=1740582796&width=1000",
    image2:
      "https://www.walkaroo.in/cdn/shop/files/ver3-remake.png?v=1745232360&width=1000",
    image3:
      "https://www.walkaroo.in/cdn/shop/files/7_bdc952f4-58be-42e4-b4bd-00e77c8fbe24.jpg?v=1745232360&width=1000",
  },
  {
    name: "Women's Daily Wear Sandal - WLR72013 Peacock Blue",
    price: 389,
    description:
      "Comfortable Heels perfect for daily wear. Designed with quality and comfort in mind.",
    category: "footwear",
    image:
      "https://www.walkaroo.in/cdn/shop/files/1_1cccd6f7-9e10-400d-b6c7-73049e059d7d.jpg?v=1748861553&width=1000",
    image2:
      "https://www.walkaroo.in/cdn/shop/files/2_1e6e0a49-28f8-4ceb-a913-8704dba359e0.jpg?v=1748861553&width=104",
    image3:
      "https://www.walkaroo.in/cdn/shop/files/3_d7592716-863c-4cad-bd1e-cf1a0e05f1a9.jpg?v=1748861553&width=104",
  },
  {
    name: "Men's Loafer Formal Shoes - 17142 Brown ",
    price: 699.0,
    description:
      "Trendy Loafers perfect for daily wear. Designed with quality and comfort in mind.",
    category: "footwear",
    image:
      "https://www.walkaroo.in/cdn/shop/files/1_d5f44e9e-3e4f-4ea0-9c1f-c4b4899c3a24.jpg?v=1745389333&width=1000",
    image2:
      "https://www.walkaroo.in/cdn/shop/files/3_26482cd4-32c2-47b7-9def-95d379bd340c.jpg?v=1745389332&width=1000",
    image3:
      "https://www.walkaroo.in/cdn/shop/files/2_2883cf4d-634c-4017-ac9c-67881c1b9a3c.jpg?v=1745389333&width=1000",
  },
  {
    name: "Men's Loafer Formal Shoes - 17101 Black",
    price: 649.0,
    description:
      "Stylish Loafers perfect for daily wear. Designed with quality and comfort in mind.",
    category: "footwear",
    image:
      "https://www.walkaroo.in/cdn/shop/files/03_9156f34c-c148-424d-9e20-98cd5756a55d.jpg?v=1740585634&width=1000",
    image2:
      "https://www.walkaroo.in/cdn/shop/files/01_76776e03-c9c4-4522-a115-b59d3326f733.jpg?v=1740585634&width=104",
    image3:
      "https://www.walkaroo.in/cdn/shop/files/02_10571221-59a4-42c9-a502-14219f808a8b.jpg?v=1740585634&width=104",
  },
  {
    name: "Wireless Mouse 1",
    price: 647.25,
    description:
      "This is a high-quality wireless mouse 1 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Audio",
    "sub-category": "Headphones",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Wireless+Mouse+1+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Wireless+Mouse+1+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Wireless+Mouse+1+View3",
  },
  {
    name: "Smart Router 2",
    price: 1399.18,
    description:
      "This is a high-quality smart router 2 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Home Appliances",
    "sub-category": "Kitchen",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Smart+Router+2+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Smart+Router+2+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Smart+Router+2+View3",
  },
  {
    name: "Ergonomic Drone 3",
    price: 1118.89,
    description:
      "This is a high-quality ergonomic drone 3 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Gaming",
    "sub-category": "Accessories",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Ergonomic+Drone+3+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Ergonomic+Drone+3+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Ergonomic+Drone+3+View3",
  },
  {
    name: "Portable Tablet 4",
    price: 1391.8,
    description:
      "This is a high-quality portable tablet 4 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Photography",
    "sub-category": "Lenses",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Portable+Tablet+4+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Portable+Tablet+4+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Portable+Tablet+4+View3",
  },
  {
    name: "Durable Printer 5",
    price: 125.75,
    description:
      "This is a high-quality durable printer 5 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Storage",
    "sub-category": "SSDs",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Durable+Printer+5+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Durable+Printer+5+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Durable+Printer+5+View3",
  },
  {
    name: "High-Performance Webcam 6",
    price: 135.25,
    description:
      "This is a high-quality high-performance webcam 6 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Home Appliances",
    "sub-category": "Laundry",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=High-Performance+Webcam+6+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=High-Performance+Webcam+6+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=High-Performance+Webcam+6+View3",
  },
  {
    name: "Compact Headphone 7",
    price: 1300.99,
    description:
      "This is a high-quality compact headphone 7 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Smart Home",
    "sub-category": "Security Cameras",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Compact+Headphone+7+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Compact+Headphone+7+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Compact+Headphone+7+View3",
  },
  {
    name: "Stylish Charger 8",
    price: 900.5,
    description:
      "This is a high-quality stylish charger 8 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Storage",
    "sub-category": "Network Storage",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Stylish+Charger+8+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Stylish+Charger+8+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Stylish+Charger+8+View3",
  },
  {
    name: "Eco-Friendly Mouse 9",
    price: 1300.99,
    description:
      "This is a high-quality eco-friendly mouse 9 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Audio",
    "sub-category": "Microphones",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Eco-Friendly+Mouse+9+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Eco-Friendly+Mouse+9+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Eco-Friendly+Mouse+9+View3",
  },
  {
    name: "Advanced Router 10",
    price: 1050.0,
    description:
      "This is a high-quality advanced router 10 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Home Appliances",
    "sub-category": "Heating & Cooling",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Advanced+Router+10+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Advanced+Router+10+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Advanced+Router+10+View3",
  },
  {
    name: "Wireless Speaker 11",
    price: 1475.25,
    description:
      "This is a high-quality wireless speaker 11 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Office Supplies",
    "sub-category": "Scanners",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Wireless+Speaker+11+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Wireless+Speaker+11+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Wireless+Speaker+11+View3",
  },
  {
    name: "Smart Webcam 12",
    price: 850.75,
    description:
      "This is a high-quality smart webcam 12 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Gaming",
    "sub-category": "Consoles",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Smart+Webcam+12+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Smart+Webcam+12+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Smart+Webcam+12+View3",
  },
  {
    name: "Ergonomic Monitor 13",
    price: 1200.0,
    description:
      "This is a high-quality ergonomic monitor 13 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Photography",
    "sub-category": "DSLRs",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Ergonomic+Monitor+13+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Ergonomic+Monitor+13+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Ergonomic+Monitor+13+View3",
  },
  {
    name: "Portable Headphones 14",
    price: 120.0,
    description:
      "This is a high-quality portable headphones 14 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Computing",
    "sub-category": "GPUs",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Portable+Headphones+14+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Portable+Headphones+14+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Portable+Headphones+14+View3",
  },
  {
    name: "Durable Router 15",
    price: 250.0,
    description:
      "This is a high-quality durable router 15 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Smart Home",
    "sub-category": "Lighting",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Durable+Router+15+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Durable+Router+15+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Durable+Router+15+View3",
  },
  {
    name: "High-Performance Drone 16",
    price: 800.0,
    description:
      "This is a high-quality high-performance drone 16 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Wearables",
    "sub-category": "Smartwatches",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=High-Performance+Drone+16+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=High-Performance+Drone+16+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=High-Performance+Drone+16+View3",
  },
  {
    name: "Compact Tablet 17",
    price: 550.0,
    description:
      "This is a high-quality compact tablet 17 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Storage",
    "sub-category": "HDDs",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Compact+Tablet+17+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Compact+Tablet+17+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Compact+Tablet+17+View3",
  },
  {
    name: "Stylish Camera 18",
    price: 950.0,
    description:
      "This is a high-quality stylish camera 18 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Electronics",
    "sub-category": "Laptops",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Stylish+Camera+18+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Stylish+Camera+18+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Stylish+Camera+18+View3",
  },
  {
    name: "Eco-Friendly Watch 19",
    price: 150.0,
    description:
      "This is a high-quality eco-friendly watch 19 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Home Appliances",
    "sub-category": "Cleaning",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Eco-Friendly+Watch+19+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Eco-Friendly+Watch+19+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Eco-Friendly+Watch+19+View3",
  },
  {
    name: "Advanced Drive 20",
    price: 200.0,
    description:
      "This is a high-quality advanced drive 20 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Office Supplies",
    "sub-category": "Printers",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Advanced+Drive+20+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Advanced+Drive+20+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Advanced+Drive+20+View3",
  },
  {
    name: "Wireless Printer 21",
    price: 350.0,
    description:
      "This is a high-quality wireless printer 21 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Gaming",
    "sub-category": "PC Games",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Wireless+Printer+21+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Wireless+Printer+21+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Wireless+Printer+21+View3",
  },
  {
    name: "Smart Projector 22",
    price: 700.0,
    description:
      "This is a high-quality smart projector 22 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Photography",
    "sub-category": "Mirrorless",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Smart+Projector+22+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Smart+Projector+22+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Smart+Projector+22+View3",
  },
  {
    name: "Ergonomic Mouse 23",
    price: 75.0,
    description:
      "This is a high-quality ergonomic mouse 23 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Audio",
    "sub-category": "Speakers",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Ergonomic+Mouse+23+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Ergonomic+Mouse+23+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Ergonomic+Mouse+23+View3",
  },
  {
    name: "Portable Keyboard 24",
    price: 120.0,
    description:
      "This is a high-quality portable keyboard 24 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Computing",
    "sub-category": "CPUs",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Portable+Keyboard+24+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Portable+Keyboard+24+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Portable+Keyboard+24+View3",
  },
  {
    name: "Durable Monitor 25",
    price: 280.0,
    description:
      "This is a high-quality durable monitor 25 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Smart Home",
    "sub-category": "Security Cameras",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Durable+Monitor+25+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Durable+Monitor+25+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Durable+Monitor+25+View3",
  },
  {
    name: "High-Performance Speaker 26",
    price: 180.0,
    description:
      "This is a high-quality high-performance speaker 26 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Wearables",
    "sub-category": "Fitness Trackers",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=High-Performance+Speaker+26+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=High-Performance+Speaker+26+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=High-Performance+Speaker+26+View3",
  },
  {
    name: "Compact Headphones 27",
    price: 90.0,
    description:
      "This is a high-quality compact headphones 27 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Storage",
    "sub-category": "USB Drives",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Compact+Headphones+27+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Compact+Headphones+27+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Compact+Headphones+27+View3",
  },
  {
    name: "Stylish Webcam 28",
    price: 60.0,
    description:
      "This is a high-quality stylish webcam 28 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Electronics",
    "sub-category": "Smartphones",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Stylish+Webcam+28+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Stylish+Webcam+28+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Stylish+Webcam+28+View3",
  },
  {
    name: "Eco-Friendly Charger 29",
    price: 45.0,
    description:
      "This is a high-quality eco-friendly charger 29 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Home Appliances",
    "sub-category": "Kitchen",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Eco-Friendly+Charger+29+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Eco-Friendly+Charger+29+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Eco-Friendly+Charger+29+View3",
  },
  {
    name: "Advanced Router 30",
    price: 300.0,
    description:
      "This is a high-quality advanced router 30 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Office Supplies",
    "sub-category": "Paper",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Advanced+Router+30+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Advanced+Router+30+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Advanced+Router+30+View3",
  },
  {
    name: "Wireless Drone 31",
    price: 600.0,
    description:
      "This is a high-quality wireless drone 31 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Gaming",
    "sub-category": "VR Headsets",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Wireless+Drone+31+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Wireless+Drone+31+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Wireless+Drone+31+View3",
  },
  {
    name: "Smart Tablet 32",
    price: 400.0,
    description:
      "This is a high-quality smart tablet 32 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Photography",
    "sub-category": "Tripods",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Smart+Tablet+32+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Smart+Tablet+32+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Smart+Tablet+32+View3",
  },
  {
    name: "Ergonomic Camera 33",
    price: 800.0,
    description:
      "This is a high-quality ergonomic camera 33 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Audio",
    "sub-category": "Soundbars",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Ergonomic+Camera+33+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Ergonomic+Camera+33+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Ergonomic+Camera+33+View3",
  },
  {
    name: "Portable Watch 34",
    price: 200.0,
    description:
      "This is a high-quality portable watch 34 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Computing",
    "sub-category": "GPUs",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Portable+Watch+34+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Portable+Watch+34+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Portable+Watch+34+View3",
  },
  {
    name: "Durable Drive 35",
    price: 150.0,
    description:
      "This is a high-quality durable drive 35 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Smart Home",
    "sub-category": "Lighting",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Durable+Drive+35+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Durable+Drive+35+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Durable+Drive+35+View3",
  },
  {
    name: "High-Performance Printer 36",
    price: 400.0,
    description:
      "This is a high-quality high-performance printer 36 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Wearables",
    "sub-category": "Fitness Trackers",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=High-Performance+Printer+36+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=High-Performance+Printer+36+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=High-Performance+Printer+36+View3",
  },
  {
    name: "Compact Projector 37",
    price: 1100.0,
    description:
      "This is a high-quality compact projector 37 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Storage",
    "sub-category": "Network Storage",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Compact+Projector+37+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Compact+Projector+37+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Compact+Projector+37+View3",
  },
  {
    name: "Stylish Mouse 38",
    price: 55.0,
    description:
      "This is a high-quality stylish mouse 38 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Electronics",
    "sub-category": "Tablets",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Stylish+Mouse+38+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Stylish+Mouse+38+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Stylish+Mouse+38+View3",
  },
  {
    name: "Eco-Friendly Keyboard 39",
    price: 95.0,
    description:
      "This is a high-quality eco-friendly keyboard 39 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Home Appliances",
    "sub-category": "Cleaning",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Eco-Friendly+Keyboard+39+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Eco-Friendly+Keyboard+39+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Eco-Friendly+Keyboard+39+View3",
  },
  {
    name: "Advanced Monitor 40",
    price: 350.0,
    description:
      "This is a high-quality advanced monitor 40 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Office Supplies",
    "sub-category": "Ink & Toner",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Advanced+Monitor+40+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Advanced+Monitor+40+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Advanced+Monitor+40+View3",
  },
  {
    name: "Wireless Speaker 41",
    price: 150.0,
    description:
      "This is a high-quality wireless speaker 41 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Gaming",
    "sub-category": "Accessories",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Wireless+Speaker+41+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Wireless+Speaker+41+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Wireless+Speaker+41+View3",
  },
  {
    name: "Smart Headphones 42",
    price: 130.0,
    description:
      "This is a high-quality smart headphones 42 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Photography",
    "sub-category": "DSLRs",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Smart+Headphones+42+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Smart+Headphones+42+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Smart+Headphones+42+View3",
  },
  {
    name: "Ergonomic Webcam 43",
    price: 70.0,
    description:
      "This is a high-quality ergonomic webcam 43 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Audio",
    "sub-category": "Headphones",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Ergonomic+Webcam+43+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Ergonomic+Webcam+43+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Ergonomic+Webcam+43+View3",
  },
  {
    name: "Portable Charger 44",
    price: 50.0,
    description:
      "This is a high-quality portable charger 44 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Computing",
    "sub-category": "RAM",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Portable+Charger+44+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Portable+Charger+44+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Portable+Charger+44+View3",
  },
  {
    name: "Durable Router 45",
    price: 200.0,
    description:
      "This is a high-quality durable router 45 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Smart Home",
    "sub-category": "Thermostats",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Durable+Router+45+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Durable+Router+45+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Durable+Router+45+View3",
  },
  {
    name: "High-Performance Drone 46",
    price: 750.0,
    description:
      "This is a high-quality high-performance drone 46 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Wearables",
    "sub-category": "VR Headsets",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=High-Performance+Drone+46+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=High-Performance+Drone+46+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=High-Performance+Drone+46+View3",
  },
  {
    name: "Compact Tablet 47",
    price: 600.0,
    description:
      "This is a high-quality compact tablet 47 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Storage",
    "sub-category": "SSDs",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Compact+Tablet+47+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Compact+Tablet+47+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Compact+Tablet+47+View3",
  },
  {
    name: "Stylish Camera 48",
    price: 1000.0,
    description:
      "This is a high-quality stylish camera 48 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Electronics",
    "sub-category": "Desktops",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Stylish+Camera+48+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Stylish+Camera+48+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Stylish+Camera+48+View3",
  },
  {
    name: "Eco-Friendly Watch 49",
    price: 180.0,
    description:
      "This is a high-quality eco-friendly watch 49 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Home Appliances",
    "sub-category": "Heating & Cooling",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Eco-Friendly+Watch+49+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Eco-Friendly+Watch+49+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Eco-Friendly+Watch+49+View3",
  },
  {
    name: "Advanced Drive 50",
    price: 220.0,
    description:
      "This is a high-quality advanced drive 50 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Office Supplies",
    "sub-category": "Scanners",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Advanced+Drive+50+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Advanced+Drive+50+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Advanced+Drive+50+View3",
  },
  {
    name: "Wireless Printer 51",
    price: 380.0,
    description:
      "This is a high-quality wireless printer 51 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Gaming",
    "sub-category": "Consoles",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Wireless+Printer+51+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Wireless+Printer+51+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Wireless+Printer+51+View3",
  },
  {
    name: "Smart Projector 52",
    price: 1200.0,
    description:
      "This is a high-quality smart projector 52 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Photography",
    "sub-category": "Mirrorless",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Smart+Projector+52+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Smart+Projector+52+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Smart+Projector+52+View3",
  },
  {
    name: "Ergonomic Mouse 53",
    price: 65.0,
    description:
      "This is a high-quality ergonomic mouse 53 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Audio",
    "sub-category": "Speakers",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Ergonomic+Mouse+53+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Ergonomic+Mouse+53+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Ergonomic+Mouse+53+View3",
  },
  {
    name: "Portable Keyboard 54",
    price: 110.0,
    description:
      "This is a high-quality portable keyboard 54 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Computing",
    "sub-category": "CPUs",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Portable+Keyboard+54+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Portable+Keyboard+54+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Portable+Keyboard+54+View3",
  },
  {
    name: "Durable Monitor 55",
    price: 320.0,
    description:
      "This is a high-quality durable monitor 55 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Smart Home",
    "sub-category": "Security Cameras",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Durable+Monitor+55+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Durable+Monitor+55+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Durable+Monitor+55+View3",
  },
  {
    name: "High-Performance Speaker 56",
    price: 190.0,
    description:
      "This is a high-quality high-performance speaker 56 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Wearables",
    "sub-category": "Smartwatches",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=High-Performance+Speaker+56+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=High-Performance+Speaker+56+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=High-Performance+Speaker+56+View3",
  },
  {
    name: "Compact Headphones 57",
    price: 100.0,
    description:
      "This is a high-quality compact headphones 57 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Storage",
    "sub-category": "HDDs",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Compact+Headphones+57+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Compact+Headphones+57+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Compact+Headphones+57+View3",
  },
  {
    name: "Stylish Webcam 58",
    price: 70.0,
    description:
      "This is a high-quality stylish webcam 58 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Electronics",
    "sub-category": "Peripherals",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Stylish+Webcam+58+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Stylish+Webcam+58+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Stylish+Webcam+58+View3",
  },
  {
    name: "Eco-Friendly Charger 59",
    price: 55.0,
    description:
      "This is a high-quality eco-friendly charger 59 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Home Appliances",
    "sub-category": "Laundry",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Eco-Friendly+Charger+59+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Eco-Friendly+Charger+59+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Eco-Friendly+Charger+59+View3",
  },
  {
    name: "Advanced Router 60",
    price: 330.0,
    description:
      "This is a high-quality advanced router 60 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Office Supplies",
    "sub-category": "Printers",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Advanced+Router+60+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Advanced+Router+60+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Advanced+Router+60+View3",
  },
  {
    name: "Wireless Drone 61",
    price: 650.0,
    description:
      "This is a high-quality wireless drone 61 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Gaming",
    "sub-category": "PC Games",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Wireless+Drone+61+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Wireless+Drone+61+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Wireless+Drone+61+View3",
  },
  {
    name: "Smart Tablet 62",
    price: 420.0,
    description:
      "This is a high-quality smart tablet 62 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Photography",
    "sub-category": "Tripods",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Smart+Tablet+62+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Smart+Tablet+62+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Smart+Tablet+62+View3",
  },
  {
    name: "Ergonomic Camera 63",
    price: 850.0,
    description:
      "This is a high-quality ergonomic camera 63 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Audio",
    "sub-category": "Soundbars",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Ergonomic+Camera+63+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Ergonomic+Camera+63+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Ergonomic+Camera+63+View3",
  },
  {
    name: "Portable Watch 64",
    price: 210.0,
    description:
      "This is a high-quality portable watch 64 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Computing",
    "sub-category": "RAM",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Portable+Watch+64+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Portable+Watch+64+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Portable+Watch+64+View3",
  },
  {
    name: "Durable Drive 65",
    price: 160.0,
    description:
      "This is a high-quality durable drive 65 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Smart Home",
    "sub-category": "Thermostats",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Durable+Drive+65+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Durable+Drive+65+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Durable+Drive+65+View3",
  },
  {
    name: "High-Performance Printer 66",
    price: 420.0,
    description:
      "This is a high-quality high-performance printer 66 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Wearables",
    "sub-category": "Smartwatches",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=High-Performance+Printer+66+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=High-Performance+Printer+66+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=High-Performance+Printer+66+View3",
  },
  {
    name: "Compact Projector 67",
    price: 1150.0,
    description:
      "This is a high-quality compact projector 67 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Storage",
    "sub-category": "USB Drives",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Compact+Projector+67+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Compact+Projector+67+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Compact+Projector+67+View3",
  },
  {
    name: "Stylish Mouse 68",
    price: 60.0,
    description:
      "This is a high-quality stylish mouse 68 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Electronics",
    "sub-category": "Desktops",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Stylish+Mouse+68+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Stylish+Mouse+68+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Stylish+Mouse+68+View3",
  },
  {
    name: "Eco-Friendly Keyboard 69",
    price: 105.0,
    description:
      "This is a high-quality eco-friendly keyboard 69 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Home Appliances",
    "sub-category": "Heating & Cooling",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Eco-Friendly+Keyboard+69+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Eco-Friendly+Keyboard+69+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Eco-Friendly+Keyboard+69+View3",
  },
  {
    name: "Advanced Monitor 70",
    price: 380.0,
    description:
      "This is a high-quality advanced monitor 70 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Office Supplies",
    "sub-category": "Paper",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Advanced+Monitor+70+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Advanced+Monitor+70+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Advanced+Monitor+70+View3",
  },
  {
    name: "Wireless Speaker 71",
    price: 160.0,
    description:
      "This is a high-quality wireless speaker 71 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Gaming",
    "sub-category": "Accessories",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Wireless+Speaker+71+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Wireless+Speaker+71+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Wireless+Speaker+71+View3",
  },
  {
    name: "Smart Headphones 72",
    price: 140.0,
    description:
      "This is a high-quality smart headphones 72 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Photography",
    "sub-category": "DSLRs",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Smart+Headphones+72+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Smart+Headphones+72+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Smart+Headphones+72+View3",
  },
  {
    name: "Ergonomic Webcam 73",
    price: 80.0,
    description:
      "This is a high-quality ergonomic webcam 73 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Audio",
    "sub-category": "Headphones",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Ergonomic+Webcam+73+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Ergonomic+Webcam+73+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Ergonomic+Webcam+73+View3",
  },
  {
    name: "Portable Charger 74",
    price: 60.0,
    description:
      "This is a high-quality portable charger 74 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Computing",
    "sub-category": "SSDs",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Portable+Charger+74+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Portable+Charger+74+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Portable+Charger+74+View3",
  },
  {
    name: "Durable Router 75",
    price: 220.0,
    description:
      "This is a high-quality durable router 75 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Smart Home",
    "sub-category": "Voice Assistants",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Durable+Router+75+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Durable+Router+75+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Durable+Router+75+View3",
  },
  {
    name: "High-Performance Drone 76",
    price: 800.0,
    description:
      "This is a high-quality high-performance drone 76 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Wearables",
    "sub-category": "Fitness Trackers",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=High-Performance+Drone+76+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=High-Performance+Drone+76+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=High-Performance+Drone+76+View3",
  },
  {
    name: "Compact Tablet 77",
    price: 650.0,
    description:
      "This is a high-quality compact tablet 77 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Storage",
    "sub-category": "HDDs",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Compact+Tablet+77+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Compact+Tablet+77+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Compact+Tablet+77+View3",
  },
  {
    name: "Stylish Camera 78",
    price: 1050.0,
    description:
      "This is a high-quality stylish camera 78 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Electronics",
    "sub-category": "Laptops",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Stylish+Camera+78+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Stylish+Camera+78+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Stylish+Camera+78+View3",
  },
  {
    name: "Eco-Friendly Watch 79",
    price: 190.0,
    description:
      "This is a high-quality eco-friendly watch 79 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Home Appliances",
    "sub-category": "Kitchen",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Eco-Friendly+Watch+79+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Eco-Friendly+Watch+79+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Eco-Friendly+Watch+79+View3",
  },
  {
    name: "Advanced Drive 80",
    price: 230.0,
    description:
      "This is a high-quality advanced drive 80 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Office Supplies",
    "sub-category": "Scanners",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Advanced+Drive+80+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Advanced+Drive+80+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Advanced+Drive+80+View3",
  },
  {
    name: "Wireless Printer 81",
    price: 400.0,
    description:
      "This is a high-quality wireless printer 81 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Gaming",
    "sub-category": "Consoles",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Wireless+Printer+81+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Wireless+Printer+81+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Wireless+Printer+81+View3",
  },
  {
    name: "Smart Projector 82",
    price: 1250.0,
    description:
      "This is a high-quality smart projector 82 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Photography",
    "sub-category": "Mirrorless",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Smart+Projector+82+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Smart+Projector+82+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Smart+Projector+82+View3",
  },
  {
    name: "Ergonomic Mouse 83",
    price: 70.0,
    description:
      "This is a high-quality ergonomic mouse 83 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Audio",
    "sub-category": "Speakers",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Ergonomic+Mouse+83+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Ergonomic+Mouse+83+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Ergonomic+Mouse+83+View3",
  },
  {
    name: "Portable Keyboard 84",
    price: 120.0,
    description:
      "This is a high-quality portable keyboard 84 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Computing",
    "sub-category": "GPUs",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Portable+Keyboard+84+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Portable+Keyboard+84+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Portable+Keyboard+84+View3",
  },
  {
    name: "Durable Monitor 85",
    price: 350.0,
    description:
      "This is a high-quality durable monitor 85 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Smart Home",
    "sub-category": "Lighting",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Durable+Monitor+85+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Durable+Monitor+85+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Durable+Monitor+85+View3",
  },
  {
    name: "High-Performance Speaker 86",
    price: 200.0,
    description:
      "This is a high-quality high-performance speaker 86 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Wearables",
    "sub-category": "Smartwatches",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=High-Performance+Speaker+86+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=High-Performance+Speaker+86+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=High-Performance+Speaker+86+View3",
  },
  {
    name: "Compact Headphones 87",
    price: 110.0,
    description:
      "This is a high-quality compact headphones 87 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Storage",
    "sub-category": "USB Drives",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Compact+Headphones+87+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Compact+Headphones+87+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Compact+Headphones+87+View3",
  },
  {
    name: "Stylish Webcam 88",
    price: 80.0,
    description:
      "This is a high-quality stylish webcam 88 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Electronics",
    "sub-category": "Smartphones",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Stylish+Webcam+88+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Stylish+Webcam+88+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Stylish+Webcam+88+View3",
  },
  {
    name: "Eco-Friendly Charger 89",
    price: 65.0,
    description:
      "This is a high-quality eco-friendly charger 89 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Home Appliances",
    "sub-category": "Cleaning",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Eco-Friendly+Charger+89+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Eco-Friendly+Charger+89+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Eco-Friendly+Charger+89+View3",
  },
  {
    name: "Advanced Router 90",
    price: 360.0,
    description:
      "This is a high-quality advanced router 90 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Office Supplies",
    "sub-category": "Ink & Toner",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Advanced+Router+90+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Advanced+Router+90+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Advanced+Router+90+View3",
  },
  {
    name: "Wireless Drone 91",
    price: 700.0,
    description:
      "This is a high-quality wireless drone 91 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Gaming",
    "sub-category": "VR Headsets",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Wireless+Drone+91+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Wireless+Drone+91+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Wireless+Drone+91+View3",
  },
  {
    name: "Smart Tablet 92",
    price: 450.0,
    description:
      "This is a high-quality smart tablet 92 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Photography",
    "sub-category": "Tripods",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Smart+Tablet+92+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Smart+Tablet+92+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Smart+Tablet+92+View3",
  },
  {
    name: "Ergonomic Camera 93",
    price: 900.0,
    description:
      "This is a high-quality ergonomic camera 93 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Audio",
    "sub-category": "Soundbars",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Ergonomic+Camera+93+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Ergonomic+Camera+93+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Ergonomic+Camera+93+View3",
  },
  {
    name: "Portable Watch 94",
    price: 220.0,
    description:
      "This is a high-quality portable watch 94 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Computing",
    "sub-category": "RAM",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Portable+Watch+94+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Portable+Watch+94+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Portable+Watch+94+View3",
  },
  {
    name: "Durable Drive 95",
    price: 170.0,
    description:
      "This is a high-quality durable drive 95 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Smart Home",
    "sub-category": "Thermostats",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Durable+Drive+95+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Durable+Drive+95+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Durable+Drive+95+View3",
  },
  {
    name: "High-Performance Printer 96",
    price: 450.0,
    description:
      "This is a high-quality high-performance printer 96 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Wearables",
    "sub-category": "Fitness Trackers",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=High-Performance+Printer+96+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=High-Performance+Printer+96+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=High-Performance+Printer+96+View3",
  },
  {
    name: "Compact Projector 97",
    price: 1200.0,
    description:
      "This is a high-quality compact projector 97 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Storage",
    "sub-category": "Network Storage",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Compact+Projector+97+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Compact+Projector+97+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Compact+Projector+97+View3",
  },
  {
    name: "Stylish Mouse 98",
    price: 70.0,
    description:
      "This is a high-quality stylish mouse 98 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Electronics",
    "sub-category": "Peripherals",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Stylish+Mouse+98+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Stylish+Mouse+98+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Stylish+Mouse+98+View3",
  },
  {
    name: "Eco-Friendly Keyboard 99",
    price: 115.0,
    description:
      "This is a high-quality eco-friendly keyboard 99 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Home Appliances",
    "sub-category": "Laundry",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Eco-Friendly+Keyboard+99+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Eco-Friendly+Keyboard+99+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Eco-Friendly+Keyboard+99+View3",
  },
  {
    name: "Advanced Monitor 100",
    price: 400.0,
    description:
      "This is a high-quality advanced monitor 100 designed for optimal performance and user satisfaction. It features advanced technology and a sleek, modern design.",
    category: "Office Supplies",
    "sub-category": "Printers",
    image:
      "https://placehold.co/400x300/B2D5D8/333333?text=Advanced+Monitor+100+Main",
    image2:
      "https://placehold.co/400x300/C0E0E3/333333?text=Advanced+Monitor+100+View2",
    image3:
      "https://placehold.co/400x300/DFF4F6/333333?text=Advanced+Monitor+100+View3",
  },
];

function addProductIds(products) {
  return products.map((product, index) => ({
    id: `${index + 1}`,
    ...product,
  }));
}

const productList = addProductIds(products);

export default productList;
