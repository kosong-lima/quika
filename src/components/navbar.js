import React from "react"
import MenuHeader from "./MenuHeader"

export default function Navbar() {
    return (
        <header className="flex items-center justify-between py-4 bg-transparent px-28">
            <div className="flex items-center justify-between ">
                <p className="pr-10 font-bold">QUIKA</p>
                <nav className="flex font-semibold ">
                    <MenuHeader href="/home">Home</MenuHeader>
                    <MenuHeader href="/quizz">Quizz</MenuHeader>
                    <MenuHeader>Support</MenuHeader>
                </nav>
            </div>
            <p className="font-bold">KALSIKA</p>
        </header>
    )
}
