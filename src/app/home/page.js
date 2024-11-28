import React from "react";
import Navbar from "@/components/navbar";
import "../globals.css";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen mx-24">
      <Navbar />
      <div className="flex-1 flex items-center justify-center min-h-[93dvh]">
        <div className="flex w-full max-w-6xl ">
          {/* Gambar di Kiri */}
          <div className="w-1/2 p-4">
            <img
              src="/images/belajar2.png"
              alt="QUIKA logo"
              className="rounded-lg object-cover"
            />
          </div>
          {/* Teks di Kanan */}
          <div className="w-1/2 p-8">
            <h1 className="text-3xl font-bold">QUIKA</h1>
            <p className="mt-4 text-lg leading-relaxed">
              Selamat datang di QUIKA, platform quiz interaktif yang dirancang untuk menguji dan meningkatkan pemahaman 
              Anda tentang fisika. Temukan berbagai soal menarik yang dirancang untuk memperdalam konsep, melatih logika, dan 
              mempersiapkan Anda menghadapi berbagai tantangan akademis maupun profesional dalam bidang fisika.”
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
