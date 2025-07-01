import { jsx, jsxs } from 'react/jsx-runtime';

const items = [
  {
    name: "cdSkin1004 Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++",
    id: 1,
    img: "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fccb63ebb-e65d-4d46-97c2-71cd48923a50.webp&w=1920&q=100",
    showImg: [
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F90cc6195-b021-4a02-8399-32ecde1f1748.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe8c291ef-9027-44d4-aea7-e089ba462da1.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Ff09171b7-74b6-4ac6-9946-87df8946af4a.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F90cc6195-b021-4a02-8399-32ecde1f1748.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe8c291ef-9027-44d4-aea7-e089ba462da1.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Ff09171b7-74b6-4ac6-9946-87df8946af4a.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100"
    ],
    Category: ["Sunscreens", "midyearsale"],
    Special: "Sunscreens",
    skin: ["Broken Skin Barrier"],
    volume: [
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 50ml",
        price: {
          Normal: 19,
          Promotion: 15
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 }
        ]
      },
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 100ml",
        price: {
          Normal: 9,
          Promotion: 10
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 }
        ]
      }
    ],
    sellAmount: 100,
    price: {
      Normal: 19,
      Promotion: 15
    },
    mostSell: { En: "Best Sellers", Kh: "លក់ដាច់ជាងគេ" },
    brand: "SKIN1004",
    arrival: { year: 2025, month: 3, day: 4 },
    solution: "Serum"
  },
  {
    name: "cdSkin1004 Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++",
    id: 2,
    img: "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fccb63ebb-e65d-4d46-97c2-71cd48923a50.webp&w=1920&q=100",
    showImg: [
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F90cc6195-b021-4a02-8399-32ecde1f1748.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe8c291ef-9027-44d4-aea7-e089ba462da1.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Ff09171b7-74b6-4ac6-9946-87df8946af4a.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F90cc6195-b021-4a02-8399-32ecde1f1748.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe8c291ef-9027-44d4-aea7-e089ba462da1.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Ff09171b7-74b6-4ac6-9946-87df8946af4a.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100"
    ],
    Category: ["Sunscreens", "midyearsale"],
    Special: "Sunscreens",
    skin: ["Broken Skin Barrier"],
    volume: [
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 50ml",
        price: {
          Normal: 19,
          Promotion: 15
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 }
        ]
      },
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 100ml",
        price: {
          Normal: 9,
          Promotion: 10
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 }
        ]
      }
    ],
    sellAmount: 100,
    price: {
      Normal: 19,
      Promotion: 15
    },
    mostSell: { En: "Best Sellers", Kh: "លក់ដាច់ជាងគេ" },
    brand: "SKIN1004",
    arrival: { year: 2025, month: 3, day: 4 },
    solution: "Serum"
  },
  {
    name: "cdSkin1004 Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++",
    id: 3,
    img: "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fccb63ebb-e65d-4d46-97c2-71cd48923a50.webp&w=1920&q=100",
    showImg: [
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F90cc6195-b021-4a02-8399-32ecde1f1748.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe8c291ef-9027-44d4-aea7-e089ba462da1.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Ff09171b7-74b6-4ac6-9946-87df8946af4a.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F90cc6195-b021-4a02-8399-32ecde1f1748.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe8c291ef-9027-44d4-aea7-e089ba462da1.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Ff09171b7-74b6-4ac6-9946-87df8946af4a.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100"
    ],
    Category: ["Sunscreens", "midyearsale"],
    Special: "Sunscreens",
    skin: ["Broken Skin Barrier"],
    volume: [
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 50ml",
        price: {
          Normal: 19,
          Promotion: 15
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 }
        ]
      },
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 100ml",
        price: {
          Normal: 9,
          Promotion: 10
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 }
        ]
      }
    ],
    sellAmount: 100,
    price: {
      Normal: 19,
      Promotion: 15
    },
    mostSell: { En: "Best Sellers", Kh: "លក់ដាច់ជាងគេ" },
    brand: "SKIN1004",
    arrival: { year: 2025, month: 3, day: 4 },
    solution: "Serum"
  },
  {
    name: "cdSkin1004 Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++",
    id: 4,
    img: "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fccb63ebb-e65d-4d46-97c2-71cd48923a50.webp&w=1920&q=100",
    showImg: [
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F90cc6195-b021-4a02-8399-32ecde1f1748.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe8c291ef-9027-44d4-aea7-e089ba462da1.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Ff09171b7-74b6-4ac6-9946-87df8946af4a.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F90cc6195-b021-4a02-8399-32ecde1f1748.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe8c291ef-9027-44d4-aea7-e089ba462da1.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Ff09171b7-74b6-4ac6-9946-87df8946af4a.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100"
    ],
    Category: ["Sunscreens", "midyearsale"],
    Special: "Sunscreens",
    skin: ["Broken Skin Barrier"],
    volume: [
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 50ml",
        price: {
          Normal: 19,
          Promotion: 15
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 }
        ]
      },
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 100ml",
        price: {
          Normal: 9,
          Promotion: 10
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 }
        ]
      }
    ],
    sellAmount: 100,
    price: {
      Normal: 19,
      Promotion: 15
    },
    mostSell: { En: "Best Sellers", Kh: "លក់ដាច់ជាងគេ" },
    brand: "SKIN1004",
    arrival: { year: 2025, month: 3, day: 4 },
    solution: "Serum"
  },
  {
    name: "cdSkin1004 Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++",
    id: 5,
    img: "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fccb63ebb-e65d-4d46-97c2-71cd48923a50.webp&w=1920&q=100",
    showImg: [
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F90cc6195-b021-4a02-8399-32ecde1f1748.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe8c291ef-9027-44d4-aea7-e089ba462da1.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Ff09171b7-74b6-4ac6-9946-87df8946af4a.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F90cc6195-b021-4a02-8399-32ecde1f1748.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe8c291ef-9027-44d4-aea7-e089ba462da1.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Ff09171b7-74b6-4ac6-9946-87df8946af4a.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100"
    ],
    Category: ["Sunscreens", "midyearsale"],
    Special: "Sunscreens",
    skin: ["Broken Skin Barrier"],
    volume: [
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 50ml",
        price: {
          Normal: 19,
          Promotion: 15
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 }
        ]
      },
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 100ml",
        price: {
          Normal: 9,
          Promotion: 10
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 }
        ]
      }
    ],
    sellAmount: 100,
    price: {
      Normal: 19,
      Promotion: 15
    },
    mostSell: { En: "Best Sellers", Kh: "លក់ដាច់ជាងគេ" },
    brand: "SKIN1004",
    arrival: { year: 2025, month: 3, day: 4 },
    solution: "Serum"
  },
  {
    name: "cdSkin1004 Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++",
    id: 6,
    img: "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fccb63ebb-e65d-4d46-97c2-71cd48923a50.webp&w=1920&q=100",
    showImg: [
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F90cc6195-b021-4a02-8399-32ecde1f1748.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe8c291ef-9027-44d4-aea7-e089ba462da1.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Ff09171b7-74b6-4ac6-9946-87df8946af4a.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F90cc6195-b021-4a02-8399-32ecde1f1748.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe8c291ef-9027-44d4-aea7-e089ba462da1.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Ff09171b7-74b6-4ac6-9946-87df8946af4a.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100"
    ],
    Category: ["Sunscreens", "midyearsale"],
    Special: "Sunscreens",
    skin: ["Broken Skin Barrier"],
    volume: [
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 50ml",
        price: {
          Normal: 19,
          Promotion: 15
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 }
        ]
      },
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 100ml",
        price: {
          Normal: 9,
          Promotion: 10
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 }
        ]
      }
    ],
    sellAmount: 100,
    price: {
      Normal: 19,
      Promotion: 15
    },
    mostSell: { En: "Best Sellers", Kh: "លក់ដាច់ជាងគេ" },
    brand: "SKIN1004",
    arrival: { year: 2025, month: 3, day: 4 },
    solution: "Serum"
  },
  {
    name: "cdSkin1004 Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++",
    id: 7,
    img: "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fccb63ebb-e65d-4d46-97c2-71cd48923a50.webp&w=1920&q=100",
    showImg: [
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F90cc6195-b021-4a02-8399-32ecde1f1748.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe8c291ef-9027-44d4-aea7-e089ba462da1.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Ff09171b7-74b6-4ac6-9946-87df8946af4a.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F90cc6195-b021-4a02-8399-32ecde1f1748.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe8c291ef-9027-44d4-aea7-e089ba462da1.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Ff09171b7-74b6-4ac6-9946-87df8946af4a.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100"
    ],
    Category: ["Sunscreens", "midyearsale"],
    Special: "Sunscreens",
    skin: ["Broken Skin Barrier"],
    volume: [
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 50ml",
        price: {
          Normal: 19,
          Promotion: 15
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 }
        ]
      },
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 100ml",
        price: {
          Normal: 9,
          Promotion: 10
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 }
        ]
      }
    ],
    sellAmount: 100,
    price: {
      Normal: 19,
      Promotion: 15
    },
    mostSell: { En: "Best Sellers", Kh: "លក់ដាច់ជាងគេ" },
    brand: "SKIN1004",
    arrival: { year: 2025, month: 3, day: 4 },
    solution: "Serum"
  },
  {
    name: "cdSkin1004 Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++",
    id: 8,
    img: "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fccb63ebb-e65d-4d46-97c2-71cd48923a50.webp&w=1920&q=100",
    showImg: [
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F90cc6195-b021-4a02-8399-32ecde1f1748.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe8c291ef-9027-44d4-aea7-e089ba462da1.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Ff09171b7-74b6-4ac6-9946-87df8946af4a.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F90cc6195-b021-4a02-8399-32ecde1f1748.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe8c291ef-9027-44d4-aea7-e089ba462da1.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Ff09171b7-74b6-4ac6-9946-87df8946af4a.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100"
    ],
    Category: ["Sunscreens", "midyearsale"],
    Special: "Sunscreens",
    skin: ["Broken Skin Barrier"],
    volume: [
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 50ml",
        price: {
          Normal: 19,
          Promotion: 15
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 }
        ]
      },
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 100ml",
        price: {
          Normal: 9,
          Promotion: 10
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 }
        ]
      }
    ],
    sellAmount: 100,
    price: {
      Normal: 19,
      Promotion: 15
    },
    mostSell: { En: "Best Sellers", Kh: "លក់ដាច់ជាងគេ" },
    brand: "SKIN1004",
    arrival: { year: 2025, month: 3, day: 4 },
    solution: "Serum"
  },
  {
    name: "cdSkin1004 Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++",
    id: 9,
    img: "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fccb63ebb-e65d-4d46-97c2-71cd48923a50.webp&w=1920&q=100",
    showImg: [
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F90cc6195-b021-4a02-8399-32ecde1f1748.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe8c291ef-9027-44d4-aea7-e089ba462da1.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Ff09171b7-74b6-4ac6-9946-87df8946af4a.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F90cc6195-b021-4a02-8399-32ecde1f1748.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe8c291ef-9027-44d4-aea7-e089ba462da1.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Ff09171b7-74b6-4ac6-9946-87df8946af4a.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100"
    ],
    Category: ["Sunscreens", "midyearsale"],
    Special: "Sunscreens",
    skin: ["Broken Skin Barrier"],
    volume: [
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 50ml",
        price: {
          Normal: 19,
          Promotion: 15
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 }
        ]
      },
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 100ml",
        price: {
          Normal: 9,
          Promotion: 10
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 }
        ]
      }
    ],
    sellAmount: 100,
    price: {
      Normal: 19,
      Promotion: 15
    },
    mostSell: { En: "Best Sellers", Kh: "លក់ដាច់ជាងគេ" },
    brand: "SKIN1004",
    arrival: { year: 2025, month: 3, day: 4 },
    solution: "Serum"
  },
  {
    name: "cdSkin1004 Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++",
    id: 10,
    img: "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fccb63ebb-e65d-4d46-97c2-71cd48923a50.webp&w=1920&q=100",
    showImg: [
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F90cc6195-b021-4a02-8399-32ecde1f1748.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe8c291ef-9027-44d4-aea7-e089ba462da1.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Ff09171b7-74b6-4ac6-9946-87df8946af4a.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F90cc6195-b021-4a02-8399-32ecde1f1748.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe8c291ef-9027-44d4-aea7-e089ba462da1.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Ff09171b7-74b6-4ac6-9946-87df8946af4a.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100"
    ],
    Category: ["Sunscreens", "midyearsale"],
    Special: "Sunscreens",
    skin: ["Broken Skin Barrier"],
    volume: [
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 50ml",
        price: {
          Normal: 19,
          Promotion: 15
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 }
        ]
      },
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 100ml",
        price: {
          Normal: 9,
          Promotion: 10
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 }
        ]
      }
    ],
    sellAmount: 100,
    price: {
      Normal: 19,
      Promotion: 15
    },
    mostSell: { En: "Best Sellers", Kh: "លក់ដាច់ជាងគេ" },
    brand: "SKIN1004",
    arrival: { year: 2025, month: 3, day: 4 },
    solution: "Serum"
  },
  {
    name: "cdSkin1004 Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++",
    id: 11,
    img: "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fccb63ebb-e65d-4d46-97c2-71cd48923a50.webp&w=1920&q=100",
    showImg: [
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F90cc6195-b021-4a02-8399-32ecde1f1748.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe8c291ef-9027-44d4-aea7-e089ba462da1.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Ff09171b7-74b6-4ac6-9946-87df8946af4a.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F90cc6195-b021-4a02-8399-32ecde1f1748.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe8c291ef-9027-44d4-aea7-e089ba462da1.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Ff09171b7-74b6-4ac6-9946-87df8946af4a.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100"
    ],
    Category: ["Sunscreens", "midyearsale"],
    Special: "Sunscreens",
    skin: ["Broken Skin Barrier"],
    volume: [
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 50ml",
        price: {
          Normal: 19,
          Promotion: 15
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 }
        ]
      },
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 100ml",
        price: {
          Normal: 9,
          Promotion: 10
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 }
        ]
      }
    ],
    sellAmount: 100,
    price: {
      Normal: 19,
      Promotion: 15
    },
    mostSell: { En: "Best Sellers", Kh: "លក់ដាច់ជាងគេ" },
    brand: "SKIN1004",
    arrival: { year: 2025, month: 3, day: 4 },
    solution: "Serum"
  },
  {
    name: "cdSkin1004 Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++",
    id: 12,
    img: "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fccb63ebb-e65d-4d46-97c2-71cd48923a50.webp&w=1920&q=100",
    showImg: [
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F90cc6195-b021-4a02-8399-32ecde1f1748.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe8c291ef-9027-44d4-aea7-e089ba462da1.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Ff09171b7-74b6-4ac6-9946-87df8946af4a.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F90cc6195-b021-4a02-8399-32ecde1f1748.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Fe8c291ef-9027-44d4-aea7-e089ba462da1.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2Ff09171b7-74b6-4ac6-9946-87df8946af4a.webp&w=1920&q=100",
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100"
    ],
    Category: ["Sunscreens", "midyearsale"],
    Special: "Sunscreens",
    skin: ["Broken Skin Barrier"],
    volume: [
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 50ml",
        price: {
          Normal: 19,
          Promotion: 15
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 }
        ]
      },
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 100ml",
        price: {
          Normal: 9,
          Promotion: 10
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 }
        ]
      }
    ],
    sellAmount: 100,
    price: {
      Normal: 19,
      Promotion: 15
    },
    mostSell: { En: "Best Sellers", Kh: "លក់ដាច់ជាងគេ" },
    brand: "SKIN1004",
    arrival: { year: 2025, month: 3, day: 4 },
    solution: "Serum"
  }
];

const Cardpost = ({ item, mostSell, lang }) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "flex flex-col justify-start items-start w-full max-w-[200px] sm:max-w-[200px] max-[500px]:max-w-[95vw] h-auto rounded-[10px] hover:translate-y-[-8px] bg-white indicator transition-all duration-300",
      style: {
        boxShadow: "0 4px 16px 0 rgba(0,0,0,0.08)"
      },
      children: /* @__PURE__ */ jsxs(
        "a",
        {
          className: "flex flex-col justify-start items-start w-full max-w-[200px] sm:max-w-[200px] max-[500px]:max-w-[95vw] h-auto rounded-[10px] hover:translate-y-[-8px] indicator transition-all duration-300",
          href: "/" + lang + "/Product/" + item.id,
          children: [
            /* @__PURE__ */ jsx(
              "img",
              {
                src: item.img,
                className: "aspect-square rounded-[10px] w-full object-cover",
                alt: item.name,
                loading: "lazy",
                decoding: "async"
              }
            ),
            mostSell ? lang === "En" ? /* @__PURE__ */ jsx("span", { className: "indicator-item indicator-center badge badge-secondary text-xs sm:text-sm", children: mostSell.En }) : /* @__PURE__ */ jsx("span", { className: "indicator-item indicator-center badge badge-secondary text-xs sm:text-sm", children: mostSell.Kh }) : null,
            /* @__PURE__ */ jsxs("div", { className: "h-auto w-full flex flex-col justify-start items-start px-2 pb-2", children: [
              /* @__PURE__ */ jsx("h2", { className: "w-full font-bold text-[15px] sm:text-base text-start line-clamp-2 dark:text-blue-400", children: item.name }),
              item.brand ? /* @__PURE__ */ jsx("h2", { className: "w-full text-start text-gray-500 text-[10px] sm:text-xs", children: "By " + item.brand }) : null,
              /* @__PURE__ */ jsx("div", { className: "w-full flexrows", children: item.solution ? /* @__PURE__ */ jsx("div", { className: "h-[25px] text-[13px] sm:text-sm text-center bg-[#283542] rounded-[5px] text-white flexrowc w-fit px-3", children: item.solution }) : /* @__PURE__ */ jsx("div", { className: "h-[25px] text-[13px] sm:text-sm text-center bg-[#283542] rounded-[5px] text-white flexrowc w-fit px-3", children: lang == "En" ? "Not Set" : "មិនកំណត់" }) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "w-full flexrowc ml-1.5 -translate-y-2", children: item.price?.Promotion !== 0 ? /* @__PURE__ */ jsxs("h2", { className: "font-bold text-2xl text-red-600 text-start w-full h-[40px] flex items-center gap-1 max-[578px]:text-[17px]", children: [
              item.price?.Promotion ? "$" + item.price.Promotion : "",
              /* @__PURE__ */ jsx("span", { className: "text-[15px] max-[578px]:text-[10px] text-gray-500 line-through", children: item.price?.Normal ? "$" + item.price.Normal : "" })
            ] }) : /* @__PURE__ */ jsxs("h2", { className: "font-bold text-2xl text-red-600 text-start w-full h-[40px] flex items-center gap-1 max-[578px]:text-[17px]", children: [
              item.price?.Normal ? item.price?.Normal + "$" : "",
              /* @__PURE__ */ jsx("span", { className: "text-[15px] max-[578px]:text-[10px] text-gray-500 line-through" })
            ] }) })
          ]
        }
      )
    }
  );
};

export { Cardpost as C, items as i };
