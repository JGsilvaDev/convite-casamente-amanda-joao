"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CoverPage() {
  const router = useRouter();
  const [opening, setOpening] = useState(false);

  async function handleOpen() {
    if (opening) return;

    setOpening(true);

    try {
      if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      }
    } catch (error) {
      console.log("Fullscreen não permitido:", error);
    }

    setTimeout(() => {
      router.push("/convite");
    }, 1600);
  }

  return (
    <main
      className="
        page-fade-in-final
        h-[100dvh]
        w-full
        overflow-hidden
        bg-[#F9F3EA]
      "
    >
      <section
        className={`
          relative
          flex
          flex-col
          h-full
          overflow-visible
          ${opening ? "iris-close" : ""}
        `}
      >
        {/* FOTO - 88% */}
        <div className="relative flex-[88] overflow-hidden">
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
            absolute
            left-1/2
            top-[88%]
            -translate-x-1/2
            -translate-y-1/2
            z-30
          "
        >
          <button
            onClick={handleOpen}
            className="
              transition-transform
              active:scale-95
              focus-visible:outline-none
            "
          >
            <div className="w-[450px] lg:w-[760px] xl:w-[850px] -mt-60">
              <Image
                src="/photos/bow.png"
                alt="Laço"
                width={850}
                height={420}
                className="
                  w-full
                  h-auto
                  drop-shadow-2xl
                  hover:scale-105
                  transition-transform
                "
              />
            </div>
          </button>
        </div>

        {/* PAPEL - 12% */}
        <div className="relative flex-[12] bg-[#F9F3EA]">
          {/* CONTEÚDO */}
          <div
            className="
              flex
              flex-col
              items-center
              justify-end
              h-full
            "
          >
            {/* TEXTO */}
            <div className="flex flex-col items-center mb-2 translate-y-25">
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
                  text-center
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
              "
            />
          </div>
        </div>
      </section>
    </main>
  );
}