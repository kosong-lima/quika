import React from "react";
import MenuHeader from "./MenuHeader";

export default function Navbar() {
    return (
        <header className="flex px-28 py-4 justify-between items-center bg-transparent">
                <div className="flex items-center justify-between ">
                    <p className="font-bold pr-10">QUIKA</p>
                <nav className="flex font-semibold ">
                    <MenuHeader href="/home">Home</MenuHeader>
                    <MenuHeader>Quizz</MenuHeader>
                    <MenuHeader>Support</MenuHeader>
                </nav>
                </div>
                <p className="font-bold">KALSIKA</p>
        </header>
    );
}