"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

/* ─────────────── Dados do casal ─────────────── */
const WEDDING_DATE = new Date("2027-06-05T10:00:00-03:00");

const details = {
  couple: "Amanda & João Gabriel",
  coupleNames: ["Amanda", "João Gabriel"],
  day: "05",
  month: "Junho",
  year: "2027",
  time: "10:00h",
  verse: {
    text: "Assim, permanecem agora estes três: a fé, a esperança e o amor. O maior deles, porém, é o amor.",
    ref: "1 Coríntios 13:13",
  },
  ceremony: {
    label: "Cerimônia",
    place: "Igreja Matriz de Nossa Senhora do Bom Sucesso",
    address: "R. Dep. Claro César, s/n - Centro, Pindamonhangaba - SP, 12400-220",
    map: "https://www.google.com/maps/place/Igreja+Matriz+de+Nossa+Senhora+do+Bom+Sucesso/@-22.9237305,-45.4620395,17z/data=!3m1!4b1!4m6!3m5!1s0x94ccf03bba8f8315:0x2b937b280d7724c4!8m2!3d-22.9237305!4d-45.4620395!16s%2Fg%2F122rd8sf?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D",
  },
  reception: {
    label: "Recepção",
    place: "Shekinah",
    address: "",
    map: "https://www.google.com/maps/place/Espa%C3%A7o+Shekinah/@-22.8898772,-45.5048244,17z/data=!3m1!4b1!4m6!3m5!1s0x94ccf16038c66d4d:0x7e3abd81531aefc5!8m2!3d-22.8898772!4d-45.5048244!16s%2Fg%2F11gfjry0ds?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D",
  },
  rsvp: "https://wa.me/5541998798618?text=Ol%C3%A1!%20Quero%20confirmar%20presen%C3%A7a!%20Nome%20dos%20confirmados%3A",
  gifts: "https://casar.com/criativaprodutora",
  music: "/music/wedding-song.mp3",
};

/* ─────────────── Countdown ─────────────── */
function getTimeLeft() {
  const diff = Math.max(WEDDING_DATE.getTime() - Date.now(), 0);
  return {
    days:    Math.floor(diff / 864e5),
    hours:   Math.floor((diff / 36e5) % 24),
    minutes: Math.floor((diff / 6e4) % 60),
    seconds: Math.floor((diff / 1e3) % 60),
  };
}

function Countdown() {
  const [t, setT] = useState(getTimeLeft);
  useEffect(() => {
    const id = setInterval(() => setT(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const items = useMemo(() => [
    ["Dias",   t.days],
    ["Horas",  t.hours],
    ["Min.",   t.minutes],
    ["Seg.",   t.seconds],
  ], [t]);

  return (
    <div className="grid grid-cols-4 gap-2 w-full my-6" aria-label="Contagem regressiva">
      {items.map(([label, value]) => (
        <div
          key={label as string}
          className="
            flex flex-col
            items-center
            justify-center
            py-5
            rounded-xl
            border border-[#4f673f]/10
            bg-white/70
            backdrop-blur-sm
          "
        >
          <strong className="font-body text-[#35562f] text-2xl font-light leading-none">
            {String(value).padStart(2, "0")}
          </strong>
          <span className="text-[0.62rem] uppercase tracking-wider text-[#5e7657]">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ─────────────── Botão de mapa ─────────────── */
function MapButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        inline-flex items-center gap-2 px-5 py-2.5 mt-1 mb-6
        border border-[#4f673f]/25 text-[#35562f] text-[0.75rem]
        uppercase tracking-[0.14em] transition-colors
        hover:bg-[#35562f] hover:text-[#f8fff3]
      "
    >
      <span className="text-base">🗺</span>
      {label}
    </a>
  );
}

/* ─────────────── Botão de música ─────────────── */
function MusicButton() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  function toggle() {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying((v) => !v);
  }

  return (
    <>
      <audio ref={audioRef} src={details.music} loop />
      <div className="flex flex-col items-center mb-10">
        <span
          className="text-[#5e7657] font-script text-sm mb-2"
          style={{ transform: "rotate(-8deg)", display: "block" }}
        >
          toque a música
        </span>
        <button
          type="button"
          onClick={toggle}
          aria-pressed={playing}
          className={`
            relative flex items-center justify-center w-14 h-14
            rounded-full border border-[#4f673f]/25
            bg-[#f8fff3]/90 text-[#35562f]
            transition-all
            ${playing ? "animate-ring" : ""}
          `}
          style={{ boxShadow: "0 0 0 9px rgba(111,143,98,0.10)" }}
        >
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#6f8f62] text-white">
            {playing ? (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            ) : (
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5.14v14l11-7-11-7z" />
              </svg>
            )}
          </span>
        </button>
      </div>
    </>
  );
}

/* ─────────────── Seção de localização ─────────────── */
function LocationSection({
  data,
}: {
  data: { label: string; place: string; address: string; map: string };
}) {
  return (
    <section className="w-full text-center mb-10">
      <h2
        className="font-script text-[#35562f] leading-none mb-5"
        style={{ fontSize: "clamp(2.4rem, 10vw, 3rem)" }}
      >
        {data.label}
      </h2>
      <p className="text-[0.85rem] uppercase tracking-[0.12em] text-[#31462e] mb-2">
        {data.place}
      </p>
      <address
        className="not-italic text-[0.78rem] uppercase tracking-wider text-[#5e7657] leading-relaxed mb-3"
        style={{ whiteSpace: "pre-line" }}
      >
        {data.address}
      </address>
      <MapButton href={data.map} label={`Ver ${data.label}`} />
    </section>
  );
}

/* ─────────────── Página principal ─────────────── */
export default function InvitationPage() {
  return (
    <main className="min-h-svh w-full flex justify-center bg-[#f7f5ef]">
      <article
        className="relative w-full max-w-[430px] bg-[#fdfcf9] text-center"
        style={{
          boxShadow: "0 0 60px rgba(8,25,11,0.45)",
        }}
      >

        <div className="relative flex justify-center overflow-hidden">
          <div
            className="
              absolute inset-0
              bg-gradient-to-b
              from-transparent
              to-[#f8fff3]
              z-10
            "
          />

          <Image
            src="/photos/floral-header.png"
            alt=""
            width={480}
            height={180}
            className="
              w-full
              opacity-80
              pointer-events-none
              select-none
            "
            priority
          />
        </div>

        {/* ── Conteúdo ── */}
        <div className="px-7 pt-24 pb-4">

          {/* Música */}
          <MusicButton />

          {/* Versículo */}
          <blockquote className="text-[0.73rem] uppercase tracking-wide text-[#31462e] leading-relaxed max-w-[260px] mx-auto mb-16">
            <p className="mb-1">{details.verse.text}</p>
            <footer className="text-[#5e7657] font-semibold tracking-[0.1em]">
              {details.verse.ref}
            </footer>
          </blockquote>

          {/* Bênção */}
          <p className="text-[0.85rem] uppercase tracking-[0.12em] text-[#31462e] mb-5">
            Com a bênção de Deus e de seus pais
          </p>

          {/* Nomes */}
          <h1
            className="font-script text-[#35562f] leading-[0.88] mx-auto mb-0"
            style={{ fontSize: "clamp(3.6rem, 17vw, 5rem)", maxWidth: 340 }}
          >
            {details.coupleNames[0]}
            <br />
            <span className="text-[#5e7657]" style={{ fontSize: "0.55em" }}>
              &amp;
            </span>
            <br />
            {details.coupleNames[1]}
          </h1>

          {/* Foto / ilustração do casal */}
          <div
            className="
              relative
              w-[calc(100%+32px)]
              -ml-4
              my-10
              overflow-hidden
              shadow-2xl
            "
            style={{
              height: 500,
              borderRadius: 24,
            }}
          >
            <Image
              src="/galery/galery-1.jpeg"
              alt={details.couple}
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Convite */}
          <p className="text-[0.85rem] uppercase tracking-[0.12em] text-[#31462e] mb-1">
            Convidam para seu
          </p>
          <p
            className="font-script text-[#35562f] leading-none mb-10"
            style={{ fontSize: "clamp(2.8rem, 12vw, 3.6rem)" }}
          >
            casamento
          </p>

          {/* Data */}
          <section className="flex flex-col items-center text-[#35562f] mb-8" aria-label="Data do casamento">
            <strong className="font-body font-light text-[8rem] leading-[0.72]">
              {details.day}
            </strong>
            <span
              className="font-script leading-[0.9]"
              style={{ fontSize: "clamp(3.8rem, 14vw, 4.8rem)" }}
            >
              {details.month}
            </span>
            <em
              className="not-italic font-body font-light leading-[0.88]"
              style={{ fontSize: "clamp(3.4rem, 12vw, 4.2rem)" }}
            >
              {details.year}
            </em>
            <p className="text-[#31462e] text-[0.82rem] uppercase tracking-[0.1em] mt-7">
              Pontualmente às {details.time}
            </p>
          </section>

          {/* RSVP */}
          <a
            href={details.rsvp}
            target="_blank"
            rel="noreferrer"
            className="
              inline-flex flex-col items-center gap-2.5 mb-14
              text-[#31462e] text-[0.8rem] uppercase tracking-[0.12em]
            "
          >
            <span
              className="flex items-center justify-center w-16 h-16 rounded-full border border-[#4f673f]/25 bg-[#f8fff3]/90 text-xl"
              style={{ boxShadow: "0 10px 22px rgba(36,61,36,0.14)" }}
            >
              🤍
            </span>
            Confirmar Presença
          </a>

          <div
            className="
              relative
              h-[380px]
              rounded-[30px]
              overflow-hidden
              my-12
            "
          >
            <Image
              src="/galery/galery-2.jpeg"
              alt=""
              fill
              className="object-cover"
            />

            <div
              className="
                absolute
                inset-x-0
                bottom-0
                h-28
                bg-gradient-to-b
                from-transparent
                to-[#fdfcf9]
              "
            />
          </div>

          {/* Localização */}
          <LocationSection data={details.ceremony} />
          <LocationSection data={details.reception} />

          {/* Dress code */}
          <div
            className="
              w-[min(280px,88%)]
              mx-auto
              my-4
              mb-10
              p-8
              border
              border-[#4f673f]/10
              bg-white/70
              rounded-2xl
            "
            style={{ boxShadow: "inset 0 0 0 7px rgba(255,255,255,0.3)" }}
          >
            <span className="block text-[#6f8f62] text-3xl leading-none mb-2">✨</span>
            <p className="text-[0.8rem] uppercase tracking-[0.12em] text-[#31462e] mb-2">
              Dress code
            </p>
            <strong className="block text-[#35562f] text-[0.9rem] uppercase tracking-[0.1em]">
              Social Elegante
            </strong>
          </div>

          {/* Lista de presentes */}
          <section className="mb-16">
            <div
              className="
                w-20 h-20
                rounded-full
                bg-[#6f8f62]
                text-white
                flex items-center justify-center
                text-3xl
                mx-auto
                mb-4
              "
            >
              🎁
            </div>

            <h2
              className="
                uppercase
                tracking-[0.25em]
                text-xs
                text-[#35562f]
                mb-8
              "
            >
              Sugestões de Presente
            </h2>

            <p className="text-[#4f5f48] leading-8 text-[0.95rem]">
              NOSSO MAIOR PRESENTE SERÁ A SUA PRESENÇA
              NESTE MOMENTO TÃO ESPECIAL PARA NÓS.
            </p>

            <p className="mt-6 text-[#4f5f48] leading-8 text-[0.95rem]">
              CASO QUEIRA NOS PRESENTEAR COM ALGO
              MATERIAL, SUGERIMOS A LISTA DE PRESENTES
              OU UMA CONTRIBUIÇÃO VIA PIX.
            </p>

            <a
              href={details.gifts}
              target="_blank"
              rel="noreferrer"
              className="
                inline-block
                mt-8
                px-6 py-3
                rounded-full
                bg-[#6f8f62]
                text-white
              "
            >
              Ver Lista de Presentes
            </a>
          </section>

          {/* Countdown */}
          <Countdown />

          <Image
            src="/photos/logo.png"
            alt=""
            width={170}
            height={170}
            className="mx-auto mb-8"
          />

          {/* Assinatura final */}
          <div className="mb-6">
            <p
              className="font-script text-[#35562f]"
              style={{ fontSize: "clamp(1.8rem, 8vw, 2.2rem)" }}
            >
              Amanda &amp; João Gabriel
            </p>
          </div>

        </div>

        <div className="relative mt-12">
          <div
            className="
              absolute
              inset-x-0
              top-0
              h-16
              bg-gradient-to-b
              from-transparent
              to-transparent
              z-10
            "
          />

          <div
            className="
              relative
              h-[500px]
              rounded-t-[40px]
              overflow-hidden
              mt-10
            "
          >
            <Image
              src="/galery/galery-3.jpeg"
              alt={details.couple}
              fill
              className="object-cover"
            />

            <div
              className="
                absolute
                inset-x-0
                top-0
                h-24
                bg-gradient-to-b
                from-[#fdfcf9]
                to-transparent
              "
            />
          </div>
        </div>
      </article>
    </main>
  );
}
