"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CoverPage() {
  const router = useRouter();
  const [opening, setOpening] = useState(false);

  function handleOpen() {
    if (opening) return;

    setOpening(true);

    setTimeout(() => {
      router.push("/convite");
    }, 1600);
  }

  return (
  <main
    className="
      page-fade-in-final
      min-h-svh
      w-full
      bg-[#f5eee6]
      overflow-hidden
    "
  >
    <section
      className={`
        relative
        flex
        flex-col
        h-[100dvh]
        overflow-hidden
        ${opening ? "iris-close" : ""}
      `}
    >
      {/* FOTO */}
      <div
        className="relative overflow-hidden"
        style={{
          height: "clamp(65vh, 70vh, 75vh)",
        }}
      >
        <Image
          src="/photos/foto_casal.png"
          alt="Amanda e João Gabriel"
          fill
          priority
          className="object-cover object-center"
        />

      
      </div>

      {/* LAÇO */}
      <div
        className="
          relative
          z-20
          flex
          justify-center
          -mt-10
        "
      >
        <button
          className="
            transition-transform
            active:scale-95
            focus-visible:outline-none
          "
          onClick={handleOpen}
        >
          <Image
            src="/photos/bow.png"
            alt="Laço"
            width={410}
            height={200}
            className="
              drop-shadow-2xl
              hover:scale-105
              transition-transform
            "
          />
        </button>
      </div>

      {/* PAPEL */}
      <div
        className="
          bg-[#f5eee6]
          text-center
          -mt-11
          pt-12
          pb-0
        "
      >
        {/* TEXTO */}
        <div
          className="
            flex
            flex-col
            items-center
            -mt-10
          "
        >
          <Image
            src="/clicker.png"
            alt="Clique para abrir"
            width={100}
            height={100}
            className="
              w-[5vw]
              min-w-[18px]
              max-w-[28px]
              h-auto
              mb-2
              opacity-50
              rotate-[-45deg]
              animate-hand-hint
            "
          />

          <p
            className="
              text-[#6c7b65]
              text-[8px]
              uppercase
              tracking-[0.25em]
              leading-relaxed
            "
          >
            Clique para
            <br />
            abrir
          </p>
        </div>

        {/* FLORAL */}
        <Image
          src="/photos/floral-bottom.png"
          alt=""
          width={350}
          height={150}
          className="
            w-full
            h-auto
            opacity-90
            pointer-events-none
            select-none
            -mt-4
          "
        />
      </div>
    </section>
  </main>
);
}