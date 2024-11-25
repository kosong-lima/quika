"use client"

import React from "react"
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react"
import Link from "next/link"

export default function ModalSelectMenu() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    return (
        <>
            <Button onPress={onOpen} className="font-semibold bg-black" color="primary" size="lg">
                Kalkulator
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="2xl">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Mau make apa?</ModalHeader>
                            <ModalBody>
                                <div className="grid grid-cols-4 gap-4">
                                    <Button href="/kalkulator/simpel-vektor" as={Link} className="bg-gray-200">
                                        Simpel Vektor
                                    </Button>
                                    <Button className="bg-gray-200">Hukum Newton 1</Button>
                                    <Button className="bg-gray-200">Hukum Newton 2</Button>
                                    <Button className="bg-gray-200">Hukum Newton 3</Button>
                                    <Button className="bg-gray-200">Gaya Pegas</Button>
                                    <Button className="bg-gray-200">Gaya Gesek</Button>
                                    <Button className="bg-gray-200">Gaya Potensial</Button>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Ga Jadi
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
