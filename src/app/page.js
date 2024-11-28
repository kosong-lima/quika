import { Button } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col items-center row-start-2 gap-8 sm:items-start">
                <Button isIconOnly className="bg-white border border-black" href="/home" as={Link}>
                    <Image src={"images/Logo.svg"} width={500} height={500} alt="logo" />
                </Button>
            </main>
        </div>
    )
}