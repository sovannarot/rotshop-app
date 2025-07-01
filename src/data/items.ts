type Product = {
  name: string;
  id: number;
  img: string;
  showImg: string[];
  Category: string[];
  Special: string;
  skin: string[];
  volume: {
    text: string;
    price: {
      Normal: number;
      Promotion: number;
    };
    color: {
      En: string;
      Kh: string;
      StockAmount: number;
    }[];
  }[];
  sellAmount: number;
  price: {
    Normal: number;
    Promotion: number;
  };
  mostSell?: {
    En: string;
    Kh: string;
  };
  brand: string;
  arrival: { year: number; month: number; day: number };
  solution: string;
  Description?: {
    title: string;
    text: string;
  };
  Description2?: {
    title: string;
    text: string;
  };
};
export const items: Product[] = [
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
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100",
    ],
    Category: ["Sunscreens", "midyearsale"],
    Special: "Sunscreens",
    skin: ["Broken Skin Barrier"],
    volume: [
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 50ml",
        price: {
          Normal: 19,
          Promotion: 15,
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 },
        ],
      },
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 100ml",
        price: {
          Normal: 9,
          Promotion: 10,
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 },
        ],
      },
    ],
    sellAmount: 100,
    price: {
      Normal: 19,
      Promotion: 15,
    },
    mostSell: { En: "Best Sellers", Kh: "លក់ដាច់ជាងគេ" },
    brand: "SKIN1004",
    arrival: { year: 2025, month: 3, day: 4 },
    solution: "Serum",
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
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100",
    ],
    Category: ["Sunscreens", "midyearsale"],
    Special: "Sunscreens",
    skin: ["Broken Skin Barrier"],
    volume: [
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 50ml",
        price: {
          Normal: 19,
          Promotion: 15,
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 },
        ],
      },
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 100ml",
        price: {
          Normal: 9,
          Promotion: 10,
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 },
        ],
      },
    ],
    sellAmount: 100,
    price: {
      Normal: 19,
      Promotion: 15,
    },
    mostSell: { En: "Best Sellers", Kh: "លក់ដាច់ជាងគេ" },
    brand: "SKIN1004",
    arrival: { year: 2025, month: 3, day: 4 },
    solution: "Serum",
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
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100",
    ],
    Category: ["Sunscreens", "midyearsale"],
    Special: "Sunscreens",
    skin: ["Broken Skin Barrier"],
    volume: [
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 50ml",
        price: {
          Normal: 19,
          Promotion: 15,
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 },
        ],
      },
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 100ml",
        price: {
          Normal: 9,
          Promotion: 10,
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 },
        ],
      },
    ],
    sellAmount: 100,
    price: {
      Normal: 19,
      Promotion: 15,
    },
    mostSell: { En: "Best Sellers", Kh: "លក់ដាច់ជាងគេ" },
    brand: "SKIN1004",
    arrival: { year: 2025, month: 3, day: 4 },
    solution: "Serum",
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
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100",
    ],
    Category: ["Sunscreens", "midyearsale"],
    Special: "Sunscreens",
    skin: ["Broken Skin Barrier"],
    volume: [
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 50ml",
        price: {
          Normal: 19,
          Promotion: 15,
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 },
        ],
      },
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 100ml",
        price: {
          Normal: 9,
          Promotion: 10,
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 },
        ],
      },
    ],
    sellAmount: 100,
    price: {
      Normal: 19,
      Promotion: 15,
    },
    mostSell: { En: "Best Sellers", Kh: "លក់ដាច់ជាងគេ" },
    brand: "SKIN1004",
    arrival: { year: 2025, month: 3, day: 4 },
    solution: "Serum",
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
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100",
    ],
    Category: ["Sunscreens", "midyearsale"],
    Special: "Sunscreens",
    skin: ["Broken Skin Barrier"],
    volume: [
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 50ml",
        price: {
          Normal: 19,
          Promotion: 15,
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 },
        ],
      },
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 100ml",
        price: {
          Normal: 9,
          Promotion: 10,
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 },
        ],
      },
    ],
    sellAmount: 100,
    price: {
      Normal: 19,
      Promotion: 15,
    },
    mostSell: { En: "Best Sellers", Kh: "លក់ដាច់ជាងគេ" },
    brand: "SKIN1004",
    arrival: { year: 2025, month: 3, day: 4 },
    solution: "Serum",
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
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100",
    ],
    Category: ["Sunscreens", "midyearsale"],
    Special: "Sunscreens",
    skin: ["Broken Skin Barrier"],
    volume: [
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 50ml",
        price: {
          Normal: 19,
          Promotion: 15,
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 },
        ],
      },
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 100ml",
        price: {
          Normal: 9,
          Promotion: 10,
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 },
        ],
      },
    ],
    sellAmount: 100,
    price: {
      Normal: 19,
      Promotion: 15,
    },
    mostSell: { En: "Best Sellers", Kh: "លក់ដាច់ជាងគេ" },
    brand: "SKIN1004",
    arrival: { year: 2025, month: 3, day: 4 },
    solution: "Serum",
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
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100",
    ],
    Category: ["Sunscreens", "midyearsale"],
    Special: "Sunscreens",
    skin: ["Broken Skin Barrier"],
    volume: [
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 50ml",
        price: {
          Normal: 19,
          Promotion: 15,
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 },
        ],
      },
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 100ml",
        price: {
          Normal: 9,
          Promotion: 10,
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 },
        ],
      },
    ],
    sellAmount: 100,
    price: {
      Normal: 19,
      Promotion: 15,
    },
    mostSell: { En: "Best Sellers", Kh: "លក់ដាច់ជាងគេ" },
    brand: "SKIN1004",
    arrival: { year: 2025, month: 3, day: 4 },
    solution: "Serum",
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
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100",
    ],
    Category: ["Sunscreens", "midyearsale"],
    Special: "Sunscreens",
    skin: ["Broken Skin Barrier"],
    volume: [
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 50ml",
        price: {
          Normal: 19,
          Promotion: 15,
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 },
        ],
      },
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 100ml",
        price: {
          Normal: 9,
          Promotion: 10,
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 },
        ],
      },
    ],
    sellAmount: 100,
    price: {
      Normal: 19,
      Promotion: 15,
    },
    mostSell: { En: "Best Sellers", Kh: "លក់ដាច់ជាងគេ" },
    brand: "SKIN1004",
    arrival: { year: 2025, month: 3, day: 4 },
    solution: "Serum",
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
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100",
    ],
    Category: ["Sunscreens", "midyearsale"],
    Special: "Sunscreens",
    skin: ["Broken Skin Barrier"],
    volume: [
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 50ml",
        price: {
          Normal: 19,
          Promotion: 15,
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 },
        ],
      },
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 100ml",
        price: {
          Normal: 9,
          Promotion: 10,
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 },
        ],
      },
    ],
    sellAmount: 100,
    price: {
      Normal: 19,
      Promotion: 15,
    },
    mostSell: { En: "Best Sellers", Kh: "លក់ដាច់ជាងគេ" },
    brand: "SKIN1004",
    arrival: { year: 2025, month: 3, day: 4 },
    solution: "Serum",
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
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100",
    ],
    Category: ["Sunscreens", "midyearsale"],
    Special: "Sunscreens",
    skin: ["Broken Skin Barrier"],
    volume: [
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 50ml",
        price: {
          Normal: 19,
          Promotion: 15,
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 },
        ],
      },
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 100ml",
        price: {
          Normal: 9,
          Promotion: 10,
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 },
        ],
      },
    ],
    sellAmount: 100,
    price: {
      Normal: 19,
      Promotion: 15,
    },
    mostSell: { En: "Best Sellers", Kh: "លក់ដាច់ជាងគេ" },
    brand: "SKIN1004",
    arrival: { year: 2025, month: 3, day: 4 },
    solution: "Serum",
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
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100",
    ],
    Category: ["Sunscreens", "midyearsale"],
    Special: "Sunscreens",
    skin: ["Broken Skin Barrier"],
    volume: [
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 50ml",
        price: {
          Normal: 19,
          Promotion: 15,
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 },
        ],
      },
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 100ml",
        price: {
          Normal: 9,
          Promotion: 10,
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 },
        ],
      },
    ],
    sellAmount: 100,
    price: {
      Normal: 19,
      Promotion: 15,
    },
    mostSell: { En: "Best Sellers", Kh: "លក់ដាច់ជាងគេ" },
    brand: "SKIN1004",
    arrival: { year: 2025, month: 3, day: 4 },
    solution: "Serum",
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
      "https://glistenblossom.com/_next/image?url=https%3A%2F%2Fapi.krubkrong.com%2Fcdn%2Fimage%2F1b22b918-0735-4e0f-901d-41f3560abc9e.webp&w=1920&q=100",
    ],
    Category: ["Sunscreens", "midyearsale"],
    Special: "Sunscreens",
    skin: ["Broken Skin Barrier"],
    volume: [
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 50ml",
        price: {
          Normal: 19,
          Promotion: 15,
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 },
        ],
      },
      {
        text: "Hyalu-Cica Water-Fit Sun Serum Spf50+ Pa++++ 100ml",
        price: {
          Normal: 9,
          Promotion: 10,
        },
        color: [
          { En: "Red", Kh: "ក្រហម", StockAmount: 10 },
          { En: "Blue", Kh: "ខៀវ", StockAmount: 5 },
        ],
      },
    ],
    sellAmount: 100,
    price: {
      Normal: 19,
      Promotion: 15,
    },
    mostSell: { En: "Best Sellers", Kh: "លក់ដាច់ជាងគេ" },
    brand: "SKIN1004",
    arrival: { year: 2025, month: 3, day: 4 },
    solution: "Serum",
  },
];
