
'use client'

    import Link from 'next/link'

    const NotFound = () => {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-12 text-center">
        
        <h1 className="mb-4 text-[120px] font-bold leading-none text-[#FF782D] max-sm:text-[80px]">
            404
        </h1>

        <h2 className="mb-4 text-3xl font-semibold text-[#222222] max-sm:text-2xl">
            Oops! Page Not Found
        </h2>

        <p className="mb-8 max-w-[500px] text-lg text-[#555555] max-sm:text-base">
            The page you are looking for might have been removed,
            had its name changed, or is temporarily unavailable.
        </p>

        <Link
            href="/"
            className="flex h-[48px] items-center justify-center rounded-full bg-[#FF782D] px-8 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#e9651b] hover:shadow-lg"
        >
            Back to Home
        </Link>

        </div>
    )
    }

export default NotFound

