import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}

