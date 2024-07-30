import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CartItemProps {
  item: {
    id: number;
    title: string;
    price: number;
    quantity: number;
  };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{item.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="font-semibold">Price: ${item.price}</p>
        </CardContent>
        <CardFooter>
          <p className="font-semibold">Quantity: {item.quantity}</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CartItem;
