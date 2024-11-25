"use client"

import Navbar from "@/components/navbar";
import { Button, Input, Select, SelectItem } from "@nextui-org/react"
import Link from "next/link"
import React, { useState } from "react"

export default function Page() {
    const gravitations = [
        { key: "9,8", label: "9,8 m/s²" },
        { key: "10", label: "10 m/s²" },
    ]

    const [massa, setMassa] = useState(null)
    const [gravitasi, setGravitasi] = useState(null)
    const [hasil, setHasil] = useState(null)

    const hitungNewton1 = () => {
        if (massa !== null && gravitasi !== null) {
            const hasil = massa * parseFloat(gravitasi)
            setHasil(hasil)
        }
    }

    return (
        <main className="flex flex-col items-center">
            <Navbar />
            <div className="flex flex-col items-center w-full justify-center min-h-[85dvh] p-10 gap-y-5 max-w-5xl">
                <div className="flex w-full gap-x-5">
                    <div className="flex w-full py-5 pl-8 text-xl font-bold bg-gray-200 rounded-xl">Hukum Newton 1</div>
                    <div className="flex items-center justify-center w-56 px-5 italic bg-gray-200 rounded-xl">
                        <Link href="/kalkulator/newton-2">Hukum Newton 2 &gt;</Link>
                    </div>
                </div>
                <div className="flex w-full gap-x-5">
                    <div className="flex flex-col w-2/3 px-8 py-5 text-lg font-semibold bg-gray-200 gap-y-8 rounded-xl">
                        <p>Isi Sendiri Ya Ndes!!</p>
                        <div className="flex flex-col max-w-full gap-y-5">
                            <Input
                                label="m (Massa)"
                                type="number"
                                onChange={(e) => setMassa(parseFloat(e.target.value))}
                                endContent={<p className="text-sm text-gray-400">kg</p>}
                            />
                            <Select label="Mo gravitasi brapa?" onChange={(e) => setGravitasi(e.target.value)}>
                                {gravitations.map((gravitation) => (
                                    <SelectItem key={gravitation.key}>{gravitation.label}</SelectItem>
                                ))}
                            </Select>
                        </div>
                        <div className="flex justify-end">
                            <Button color="primary" className="bg-black" onClick={hitungNewton1}>
                                <p className="font-bold">Wess</p>
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-1/3 bg-gray-200 rounded-xl">
                        {hasil ? (
                            <>
                                <p className="text-5xl font-bold">{hasil ? `${hasil} N` : ""}</p>
                            </>
                        ) : (
                            <p className="text-xl font-semibold">Hasil ntar disini</p>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}