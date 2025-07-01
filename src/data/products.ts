import type { APIRoute } from "astro";
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
export const GET: APIRoute = async () => {
  const products = [
    { id: 1, title: "T-Shirt", price: 19.99 },
    { id: 2, title: "Sneakers", price: 49.99 },
  ];
  return new Response(JSON.stringify(products), {
    headers: { "Content-Type": "application/json" },
  });
};
