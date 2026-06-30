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
    }, 800);
  }

  return (
  <main className="min-h-svh w-full bg-[#f5eee6] overflow-hidden">
    {!opening && (
      <section className="relative min-h-svh">
        {/* FOTO */}
        <div className="relative h-[60vh] w-full overflow-hidden">
          <Image
            src="/photos/foto_casal.png"
            alt="Amanda e João Gabriel"
            fill
            priority
            className="object-cover object-center"
          />

          {/* VINHETA LEVE */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-black/5
              via-transparent
              to-transparent
            "
          />

          {/* FADE PARA O PAPEL */}
          <div
            className="
              absolute
              bottom-0
              left-0
              right-0
              h-10
              bg-gradient-to-b
              from-transparent
              via-white/70
              to-[#f5eee6]
            "
          />
        </div>

        {/* LAÇO */}
        <div
          className="
            animate-fade-slide
            opacity-0
            relative
            z-20
            flex
            justify-center
            -mt-20
          "
          style={{
            animationDelay: "0.5s",
            animationFillMode: "both",
          }}
        >
          <button
            type="button"
            onClick={handleOpen}
            aria-label="Abrir convite"
            className="
              animate-fade-slide
              opacity-0
              transition-transform
              active:scale-95
              focus-visible:outline-none
            "
            style={{
              animationDelay: "0.6s",
              animationDuration: "1s",
              animationFillMode: "forwards",
            }}
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
            -mt-10
            pt-12
            pb-0
          "
        >
          {/* TEXTO */}
          <div
            className="animate-fade-slide opacity-0 flex flex-col items-center -mt-15"
            style={{
              animationDelay: "0.8s",
              animationFillMode: "both",
            }}
          >
            <span
              className="
                text-[#7a8c73]
                text-xl
                mb-2
              "
            >
              ☝🏻
            </span>

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
    )}
  </main>
);
}