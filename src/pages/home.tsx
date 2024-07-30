import { useNavigate } from "react-router-dom"


function HomePage() {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/shop")
  }
  return (
    <>
        <div className="w-full h-screen bg-cover bg-[url('images/home-bg.jpg')] text-white">
            <div className="flex flex-col items-center justify-center gap-5 h-full text-center ">
                <h1 className="text-5xl font-bold  ">Welcome to E-Store</h1>
                <p className="text-lg font-medium">Discover the latest trends and products</p>
                <button className="px-3 py-2 border border-white rounded-md font-medium" onClick={handleClick}>Shop Items</button>
            </div>
        </div>
    </>
  )
}

export default HomePage