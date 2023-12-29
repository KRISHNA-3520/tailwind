export function Sidebar({ children, isOpen, onClickClose }) {
    return (
        <div>
        <div className={`dark:bg-night overflow-y-auto p-5 z-50 right-0 w-full h-full shadow-lg md:w-[50%] lg:w-[35%] bg-white transition transform duration-300 fixed top-0 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
            <button onClick={onClickClose} className="absolute right-4 top-4 p-2 text-black font-bold dark:text-white">X</button>
            {children}
            </div>
            {isOpen  && <div className="fixed left-0 top-0 z-20 h-full w-full bg-black opacity-50"/>}
        </div>
    )
}