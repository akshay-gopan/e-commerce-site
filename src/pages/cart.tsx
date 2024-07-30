import useLocalStorage from "@/hooks/localstorage"
import CartItem from "@/components/cart-item"

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}


function CartPage() {
  
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('cart', []);

  const clearCart = () => {
    setCartItems([]); // Clear cart items from state and local storage
  };


  return (
    <>
    <div className="flex justify-center px-5">
    <h1 className="font-semibold text-2xl self-center">Your Cart</h1>
    <div className="grow"></div>
    <button className="px-3 py-2 bg-slate-500 text-white font-semibold rounded-md self-end" onClick={clearCart}>Clear Cart</button>
    </div>
      
      
    <div className="flex flex-wrap gap-10 mt-5 px-5 ">
      
      {cartItems.length === 0 ? (
        <p className="text-lg font-medium">Your cart is empty</p>
      ) : (
        cartItems.map(item => <CartItem key={item.id} item={item} />)
      )}
    </div>
    </>
  )
}

export default CartPage