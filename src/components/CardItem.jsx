import { CiTrash } from "react-icons/ci"
import { Select } from "../components/Select"
import { SIZES, QTY } from "../constant"
export function CardItem({ item:{product,qty,size} }) {
    return (
        <div className="hover:bg-[#daffa2] p-2 cursor-pointer bg-gray-50 dark:bg-transparent dark:hover:bg-night-50 space-y-2">
            <div className="flex space-x-2">
                <img className="h-24" src={product.src} />
                <div className="space-y-2">
                    <div className="font-bold dark:text-white">{product.title}</div>
                    <div className="text-sm text-gray-400">{product.description}</div>
                </div>
                <div className="font-bold dark:text-white">{product.price}$</div>
            </div>
            <div className="flex justify-between pl-32">    
                <div className="flex space-x-6">
                    <div>
                        <div className="font-bold dark:text-white">SIZE</div>
                        <Select defaultValue={size} title="" options={SIZES} className={"w-16 p-1 pl-2"}/>
                    </div>
                    <div>
                        <div className="font-bold dark:text-white">QTY</div>
                        <Select defaultValue={qty} title="" options={QTY}  className={"w-16 p-1 pl-2"}/>
                    </div>
                </div>
                <button>
                    <CiTrash size={25} className="text-black dark:text-white" />
                </button>
            </div>
        </div>
    )
}