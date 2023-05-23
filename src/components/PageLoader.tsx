export const PageLoader = () => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-10 w-10 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" stroke="currentColor" stroke-width="4" cx="12" cy="12" r="10"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>           
            <h2 className="text-center text-white text-xl font-semibold pt-10">Loading...</h2>
            <p className="w-1/3 text-center text-white">This may take a few seconds, please don't close this page.</p>
        </div>
    )
}