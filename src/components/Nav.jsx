import { TbShoppingBag } from "react-icons/tb"; 
import NikeLogo from '../assets/nike-logo.svg?react'
import {RxHamburgerMenu} from 'react-icons/rx'
import { useState } from "react";

const ROUTES = ["Home","About","Services","Pricing","Contact"]
export function Nav({onClickShoppingBtn}){
    const[isMobileMenuShown,setIsMobileMenuShown] = useState(false)
    return(
         <nav className='z-10 relative flex flex-wrap justify-between items-center'>
        {/*logo */}
        <a href="#">
        <NikeLogo className="h-20 w-20 dark:fill-white"/>
        </a>
        {/*burger button */}
        <button onClick={()=>setIsMobileMenuShown(!isMobileMenuShown)} className='lg:hidden focus:ring-2 focus:ring-gray-200 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700'>
            <RxHamburgerMenu size={25}/>
        </button>

        {/*Menu List */}
        <div className={`${!isMobileMenuShown && "hidden"} w-full lg:block lg:w-auto`}>
            <ul className='lg:space-x-8 flex flex-col lg:flex-row bg-gray-50 lg:bg-transparent text-lg border border-gray-100 lg:border-none rounded-lg p-4 lg:dark:text-white'>
                {ROUTES.map((route,i)=>{
                    return <li key={route} className={`lg:hover:bg-transparent lg:hover:text-blue-500 py-2 px-3 cursor-pointer rounded ${i===0 ? "bg-blue-500 lg:bg-transparent lg:text-blue-500 text-white":"hover:bg-gray-100"} ${(i==3 || i==4) && "lg:text-white"}`}>{route}</li>
                })}
            </ul>
        </div>
        {/*Cart button*/}
        <div onClick={onClickShoppingBtn} className="fixed left-4 bottom-4 lg:static lg:mr-8">
        <div className="btn-press-anim cursor-pointer flex-center h-12 w-12 rounded-full shadow-md bg-white"> <TbShoppingBag /></div>
        </div>
    </nav>
    )
}