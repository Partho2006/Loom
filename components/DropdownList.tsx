"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const DropdownList = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <div className="filter-trigger">
                    <figure>
                        <Image src="/assets/icons/hamburger.svg" alt="menu" width={14} height={14} />
                        Most Recent
                    </figure>
                    <Image src="/assets/icons/arrow-down.svg" alt="arroww-down" width={20} height={20} />
                </div>
            </div>

            {isOpen && (
                <ul className="absolute bg-white shadow-lg rounded-lg flex flex-col gap-2 w-full z-10 top-12">
                    {['Most recent', 'Most liked'].map((option) => (
                        <li
                            key={option}
                            className="px-3 py-2.5 text-sm font-medium relative cursor-pointer hover:bg-pink-100 hover:text-white transition rounded-md"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default DropdownList