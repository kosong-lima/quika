import Link from "next/link"
import React from "react"

export default function menuHeader({
    href,
    children,
    className = "flex items-center justify-center h-full transition-all duration-75 cursor-pointer w-36 hover:text-gray-400 ",
}) {
    return (
        <Link href={`${href}`}>
            <p className={`${className}`}>{children}</p>
        </Link>
    )
}
