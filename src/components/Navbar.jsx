const Nabvar = () => {
    return <>

        <nav className="bg-gray-800 p-5 font-jetbrains">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#" className="text-white font-bold text-2xl">Portofolio</a>
                <div className="flex items-center gap-x-8">
                    <a href="#" className="text-white hover:bg-blue-500 rounded px-2 py-1 transition duration-200">Home</a>
                    <a href="#" className="text-white hover:bg-blue-500 rounded px-2 py-1 transition duration-200">About</a>
                    <a href="#" className="text-white hover:bg-blue-500 rounded px-2 py-1 transition duration-200">Project</a>
                    <a href="#" className="text-white hover:bg-blue-500 rounded px-2 py-1 transition duration-200">Blog</a>
                    <a href="#" className="text-white hover:bg-blue-500 rounded px-2 py-1 transition duration-200">Contact</a>
                </div>
            </div>
        </nav>

    </>   
}

export default Nabvar;