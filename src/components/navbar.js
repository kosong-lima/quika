import React from "react"
import MenuHeader from "./MenuHeader"
import Link from "next/link"

export default function Navbar() {
    return (
        <header className="flex items-center justify-between py-4 bg-transparent">
            <div className="flex items-center justify-between ">
                <p className="pr-10 font-bold">QUIKA</p>
                <nav className="flex font-semibold ">
                    <MenuHeader href="/home">Home</MenuHeader>
                    <MenuHeader href="/quizz">Quizz</MenuHeader>
                    <MenuHeader href="">Support</MenuHeader>
                </nav>
            </div>
            <Link href="https://kalsika.vercel.app" target="_blank" rel="noopener noreferrer">
                <p className="font-bold">KALSIKA</p>
            </Link>
        </header>
    )
}
