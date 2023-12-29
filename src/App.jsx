import { Nav } from "./components/Nav"
import { NewArrivals } from "./components/NewArrivals"
import { ShoeDetail } from "./components/ShoeDetail"
import { SHOE_LIST } from "./constant"
import { Sidebar } from "./components/Sidebar"
import { useEffect, useState } from "react"
import { Cart } from "./components/Cart"
import { BiSun, BiMoon } from "react-icons/bi"


export function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode")
    if (isDarkMode === "true") {
      window.document.documentElement.classList.add("dark")
    }
  }, [])
  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark")

    localStorage.setItem("isDarkMode", window.document.documentElement.classList.contains("dark"))

  }

  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0])
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product, qty, size) => {
    if (qty && size) {
      const updateCartItems = [...cartItems]
      const existingItemIndex = cartItems.findIndex(item => item.product.id === product.id)
      if (existingItemIndex > -1) {
        updateCartItems[existingItemIndex].qty = qty
        updateCartItems[existingItemIndex].size = size
      }else{
        updateCartItems.push({product,qty,size})
      }
      setCartItems(updateCartItems)
    }
  }

  return (
    <div className="p-10 xl:px-24 animate-fadeIn dark:bg-night">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShoeDetail shoe={currentShoe}  onclickAdd={addToCart}/>
      <NewArrivals items={SHOE_LIST} onClickCard={setCurrentShoe} />
      <Sidebar isOpen={isSidebarOpen} onClickClose={() => setIsSidebarOpen(false)}>
        <Cart cartItems={cartItems} />
      </Sidebar>
      <div className="fixed bottom-4 right-4">
        <button onClick={toggleDarkMode} className=" shadow-lg bg-night-50 px-4 py-2 rounded-full text-white dark:bg-white dark:text-night">
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </div>
  )

}


