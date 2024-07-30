import useLocalStorage from '../hooks/localstorage';

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

function Header() {
  const [cartItems] = useLocalStorage<CartItem[]>('cart', []);
  return (
    <>
        <header className='flex justify-around p-4'>
            <h1 className='text-2xl font-semibold self-center'>E-Store</h1>
            <nav className='self-center'>
                <ul className='flex justify-center align-middle gap-20 '>
                    <li><a href="/">Home</a></li>
                    <li><a href="/shop">Shop</a></li>
                    <li><a href="cart">Cart ({cartItems.length})</a></li>
                    
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header