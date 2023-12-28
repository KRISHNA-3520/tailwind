import { Nav } from "./components/Nav"
import { NewArrivals } from "./components/NewArrivals"
import { ShoeDetail } from "./components/ShoeDetail"
import { SHOE_LIST } from "./constant"
import { Sidebar } from "./components/Sidebar"
import { useState } from "react"
import { Cart } from "./components/Cart"

const FAKE_CART_ITEMS = SHOE_LIST.map((shoe) => {
  return {
    product: shoe,
    qty: 1,
    size: 44
  }
})
export function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="p-10 xl:px-24 animate-fadeIn">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShoeDetail />
      <NewArrivals items={SHOE_LIST} />
      <Sidebar isOpen={isSidebarOpen} onClickClose={() => setIsSidebarOpen(false)}>
        <Cart cartItems={FAKE_CART_ITEMS}/>
      </Sidebar>
    </div>
  )

}


