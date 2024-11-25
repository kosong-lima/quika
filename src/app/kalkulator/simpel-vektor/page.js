import Navbar from "@/components/navbar"
import { Input } from "@nextui-org/react"
import Link from "next/link"
import React from "react"

export default function page() {
    return (
        <main className="flex flex-col">
            <Navbar />
            <div className="flex flex-col min-h-[90dvh] p-10 gap-y-5">
                <div className="flex gap-x-5">
                    <div className="flex w-full py-5 pl-8 text-xl font-bold bg-gray-200 rounded-xl">Simpel Vektor</div>
                    <div className="flex items-center justify-end w-56 pr-8 italic bg-gray-200 rounded-xl">
                        {/* <Link href="/kalkulator/newton-1">Hukum Newton 1 &gt;</Link> */}
                        <p>Hukum Newton 1 &gt;</p>
                    </div>
                </div>
                <div className="flex gap-x-5 min-h-[70dvh]">
                    <div className="flex w-2/3 py-5 pl-8 text-lg font-semibold bg-gray-200 rounded-xl">
                        Masukkan Nilai Dibawah!!
                    </div>
                    <div className="flex items-center justify-center w-1/3 bg-gray-200 rounded-xl">
                        <p className="text-5xl font-bold">Ini Hasil</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
