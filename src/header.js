const Header = () => {
    return (
        <>
            <header className="p-6 bg-neutral-200 shadow-md fixed w-full top-0">
                <nav className="container mx-auto flex justify-between items-center">
                    <p className="font-bold text-2xl uppercase text-slate-900">Eyefinity</p>
                    <div className="flex items-center space-x-5">
                        <p className="header-list">New Arrival</p>
                        <p className="header-list">Orders</p>
                        <button className="bg-slate-900 hover:bg-slate-700 py-1 px-3 rounded-2xl text-slate-400 transition-all duration-200ms font-semibold">Cart</button>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header