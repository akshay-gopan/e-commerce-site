import ProductCard from "@/components/productcard"

function ShopPage() {

  const products = [
    { id: 1, title: 'Product 1', price: 100, image: 'images/product.jpg' },
    { id: 2, title: 'Product 2', price: 200, image: 'images/product.jpg' },
    { id: 3, title: 'Product 3', price: 300, image: 'images/product.jpg' },
    { id: 4, title: 'Product 4', price: 400, image: 'images/product.jpg' },
    { id: 5, title: 'Product 5', price: 500, image: 'images/product.jpg' },
    { id: 6, title: 'Product 6', price: 600, image: 'images/product.jpg' },
    { id: 7, title: 'Product 7', price: 700, image: 'images/product.jpg' }
  ];

  return (
    <div className="flex flex-col gap-4 px-5">
      <h1 className="font-semibold text-2xl">Shop Page</h1>
      <div className="flex flex-wrap justify-center align-middle gap-10">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ShopPage