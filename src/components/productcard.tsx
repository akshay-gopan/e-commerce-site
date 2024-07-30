import React, { useState } from "react";
import useLocalStorage from "../hooks/localstorage";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("cart", []);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const addToCart = () => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
  };

  return (
    <div>
      <Card className="text-center">
        <CardHeader className="flex gap-4">
          <CardTitle>{product.title}</CardTitle>
          <img
            src={product.image}
            alt="Product Image"
            style={{ width: "250px", height: "200px" }}
            className=" rounded-md self-center"
          />
        </CardHeader>
        <CardContent>
          <p className="font-bold text-xl">Price: ${product.price} </p>
          <div className="flex justify-evenly gap-5">
            <button
              onClick={decrement}
              className="px-3 bg-slate-500 rounded-lg text-white font-bold text-2xl"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <button
              onClick={increment}
              className="px-2 bg-slate-500 rounded-lg text-white font-bold text-2xl"
            >
              +
            </button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <button
            onClick={addToCart}
            className="p-2 border border-slate-500 rounded-md hover:bg-slate-500 hover:text-white"
          >
            Add To Cart
          </button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
