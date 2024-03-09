import logo from './e-commerce/logo.png'

const Header = () => {
    return (
        <>
            <header className="p-6 bg-neutral-200 shadow-md fixed w-full top-0">
                <nav className="md:px-4 flex justify-between items-center">
                    <div className='flex gap-2'>
                    <img src={logo} alt="Logo" className='w-8'/>
                    <p className="font-bold text-2xl uppercase text-slate-900">Eyefinity</p>
                    </div>
                    <div className="flex items-center space-x-5">
                        <p className="header-list">New Arrival</p>
                        <p className="header-list">Orders</p>
                        <button className="bg-black hover:bg-black/90 py-1 px-3 rounded-2xl text-white transition-all duration-200ms font-semibold flex items-center gap-1">
                            Cart
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </button>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header