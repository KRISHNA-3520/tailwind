import { CardItem } from "./CardItem"

export function Cart({cartItems}){
    return(
        <div>
            <h2 className="dark:text-white mb-5 text-4xl font-bold">Cart</h2>
            <ul>
                {cartItems.map((cartItem)=>(
                    <li key={cartItem.product.id}>
                        <CardItem item={cartItem}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}