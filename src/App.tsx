import Header from "./components/header"
import { BrowserRouter } from "react-router-dom"
import Navigator from "./routers"

function App() {
  

  return (
    <>
      <Header />
      <BrowserRouter>
        <Navigator />
      </BrowserRouter>
      
    </>
  )
}

export default App
