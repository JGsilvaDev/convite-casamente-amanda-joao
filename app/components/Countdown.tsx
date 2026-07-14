"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

const WEDDING_DATE = new Date("2027-06-05T10:00:00-03:00");

function getTimeLeft() {
  const diff = Math.max(WEDDING_DATE.getTime() - Date.now(), 0);

  return {
    days: Math.floor(diff / 864e5),
    hours: Math.floor((diff / 36e5) % 24),
    minutes: Math.floor((diff / 6e4) % 60),
    seconds: Math.floor((diff / 1e3) % 60),
  };
}

export default function Countdown() {
  const [t, setT] = useState(() => getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setT(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const items = useMemo(
    () => [
      ["Dias", t.days],
      ["Horas", t.hours],
      ["Min.", t.minutes],
      ["Seg.", t.seconds],
    ],
    [t]
  );

  return (
    <section
      className="
        relative
        w-full
        my-12
        px-4
        pt-14
      "
      aria-label="Contagem regressiva"
    >
      <Image
        src="/photos/leaf-left.png"
        alt=""
        width={90}
        height={90}
        className="
          absolute
          top-0
          right-0
          opacity-80
          pointer-events-none
          select-none
        "
      />

      {/* Título */}
      <h2
        className="
          font-script
          text-[#35562f]
          mb-8
          leading-[0.85]
        "
        style={{
          fontSize: "clamp(3.5rem, 16vw, 4.8rem)",
        }}
      >
        <span className="block text-left pr-6 ml-10">
          Contagem
        </span>

        <span className="block text-right pl-6 mr-10">
          Regressiva
        </span>
      </h2>

      {/* Contador */}
      <div
        className="
          flex
          items-center
          justify-center
          w-full
          gap-1
          sm:gap-3
        "
      >
        {items.map(([label, value], index) => (
          <div
            key={label as string}
            className="
              flex
              items-center
            "
          >
            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                min-w-[55px]
                sm:min-w-[65px]
              "
            >
              <strong
                className="
                  font-body
                  font-light
                  text-[#35562f]
                  leading-none
                "
                style={{
                  fontSize: "clamp(1.8rem, 8vw, 2.8rem)",
                }}
              >
                {String(value).padStart(2, "0")}
              </strong>

              <span
                className="
                  text-[#5e7657]
                  uppercase
                  tracking-[0.15em]
                  text-[0.55rem]
                  mt-2
                "
              >
                {label}
              </span>
            </div>

            {/* Separador */}
            {index < items.length - 1 && (
              <span
                className="
                  text-[#5e7657]
                  font-light
                  mx-1
                  sm:mx-3
                  mb-4
                "
                style={{
                  fontSize: "clamp(1.4rem, 6vw, 2rem)",
                }}
              >
                :
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}