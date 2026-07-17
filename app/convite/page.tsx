"use client";

import { useRef, useState } from "react";
import Countdown from "@/app/components/Countdown";
import Image from "next/image";
import { Gift } from "lucide-react";

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

/* ─────────────── Botão de mapa ─────────────── */
function MapButton({
  href,
  type,
}: {
  href: string;
  type: "ceremony" | "reception";
}) {
  const isCeremony = type === "ceremony";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        inline-flex
        flex-col
        items-center
        justify-center
        gap-2
        mt-2
        mb-6
        text-[#35562f]
        transition-transform
        hover:scale-105
      "
    >
      <span
        className="
          flex
          items-center
          justify-center
          w-16
          h-16
          rounded-full
          border
          border-[#5e7657]/25
          text-[#5e7657]
        "
      >
        {isCeremony ? (
          <Image
            src="/igreja.png"
            alt="Cerimônia"
            width={32}
            height={32}
            className="icon-green"
          />
        ) : (
          <Image
            src="/fixar-mapa.png"
            alt="Recepção"
            width={32}
            height={32}
            className="icon-green"
          />
        )}
      </span>

      <span
        className="
          text-[0.7rem]
          uppercase
          tracking-[0.18em]
          text-[#35562f]
        "
      >
        {isCeremony ? "Cerimônia" : "Recepção"}
      </span>
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
  type,
}: {
  data: { label: string; place: string; address: string; map: string };
  type: "ceremony" | "reception";
}) {
  const isCeremony = type === "ceremony";

  return (
    <section
      className="
        relative
        w-full
        flex
        justify-center
        mb-5
      "
    >

      {/* Floral lateral */}
      <Image
        src={
          isCeremony
            ? "/photos/leaf-left.png"
            : "/photos/leaf-left.png"
        }
        alt=""
        width={110}
        height={160}
        className={`
          absolute
          opacity-60
          pointer-events-none
          select-none
          ${
            isCeremony
              ? "right-[-15px] top-60"
              : "left-[-15px] top-35"
          }
        `}
      />


      <div
        className="
          relative
          w-[90%]
          max-w-[340px]
          text-center
          rounded-3xl
          py-8
        "
      >

        {/* Título */}
        <h2
          className="
            font-script
            text-[#35562f]
            leading-none
            font-bold
            mb-5
          "
          style={{
            fontSize: "clamp(3rem, 14vw, 4rem)",
          }}
        >
          {data.label}
        </h2>


        {/* Local */}
        <p
          className="
            text-[0.82rem]
            uppercase
            tracking-[0.12em]
            text-[#35562f]
            font-semibold
            mb-3
          "
        >
          {data.place}
        </p>


        <address
          className="
            not-italic
            text-[0.72rem]
            uppercase
            tracking-wider
            text-[#5e7657]
            leading-relaxed
            mb-5
          "
        >
          {data.address}
        </address>


        <MapButton
          href={data.map}
          type={type}
        />

      </div>
    </section>
  );
}

/* ─────────────── Página principal ─────────────── */
export default function InvitationPage() {
  return (
    <main className="min-h-svh w-full flex justify-center bg-[#F9F3EA]">
      <article
        className="
          page-fade-in
          relative
          w-full
          max-w-[430px]
          bg-gradient-to-b
          from-[#F9F3EA]
          via-[#f5f7ef]
          to-[#fdfcf9]
          text-center
        "
      >
        <div className="relative flex justify-center overflow-hidden bg-[#F9F3EA]">
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-24
              bg-gradient-to-b
              via-[#eef4e8]/70
              to-[#F9F3EA]
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
        <div>

          {/* Música */}
          <MusicButton />

          {/* Versículo */}
          <blockquote
            className="
              relative
              text-[0.65rem]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-[#5e7657]
              leading-[1]
              max-w-[330px]
              mx-auto
              mb-16
              px-4
            "
          >
            <p className="mb-1">
              &ldquo;{details.verse.text}&rdquo;
            </p>

            <footer
              className="
                text-[#5e7657]
                font-semibold
                tracking-[0.18em]
                text-[0.60rem]
              "
            >
              {details.verse.ref}
            </footer>
          </blockquote>

          {/* Bênção */}
          <p className="text-[0.80rem] uppercase tracking-[0.12em] text-[#5e7657] font-semibold mb-16">
            Com a bênção de Deus e de seus pais
          </p>

          {/* Nomes */}
          <div className="relative mb-8">

            {/* Flores laterais */}
            <Image
              src="/photos/floral-smal.png"
              alt=""
              width={120}
              height={120}
              className="
                absolute
                -left-5
                top-0
                opacity-20
                pointer-events-none
                select-none
              "
            />

            <Image
              src="/photos/floral-smal.png"
              alt=""
              width={120}
              height={120}
              className="
                absolute
                -right-5
                bottom-0
                rotate-180
                opacity-20
                pointer-events-none
                select-none
              "
            />

            <h1
              className="
                relative
                z-10
                font-script
                text-[#35562f]
                leading-[0.85]
                mx-auto
                flex
                flex-col
                px-7
                mb-16
              "
              style={{
                fontSize: "clamp(3rem, 14vw, 4.5rem)",
              }}
            >
              <span className="self-start ml-5 font-script">
                {details.coupleNames[0]}
              </span>

              <span
                className="
                  self-center
                  text-[#5e7657]
                  font-body
                  text-[0.45em]
                  my-1
                "
              >
                e
              </span>

              <span className="self-end mr-5 font-script">
                {details.coupleNames[1]}
              </span>
            </h1>

          </div>


          {/* Foto / ilustração do casal */}
          <div
            className="
              relative
              w-full
              my-8
              overflow-hidden
            "
            style={{
              height: "clamp(300px, 60vw, 380px)",
            }}
          >
            <Image
              src="/galery/galery-1.jpeg"
              alt={details.couple}
              fill
              className="
                object-cover
                object-center
              "
            />

            {/* Fade superior */}
            <div
              className="
                absolute
                inset-x-0
                top-0
                h-24
                bg-gradient-to-b
                from-[#F9F3EA]
                to-transparent
              "
            />

            {/* Fade inferior */}
            <div
              className="
                absolute
                inset-x-0
                bottom-0
                h-28
                bg-gradient-to-t
                from-[#F9F3EA]
                to-transparent
              "
            />
          </div>


          {/* Convite */}
          <p
            className="
              text-[0.75rem]
              uppercase
              tracking-[0.16em]
              text-[#5e7657] 
              font-semibold
              mb-1
            "
          >
            Convidam para seu
          </p>

          <p
            className="
              font-script
              text-[1.25rem]
              text-[#5e7657]
              leading-none
              font-bold
              mb-16
            "
            style={{
              fontSize: "clamp(2.5rem, 10vw, 3.3rem)",
            }}
          >
            casamento
          </p>

          {/* Data */}
          <section
            className="
              relative
              flex
              flex-col
              items-center
              text-[#35562f]
              mb-8
            "
            aria-label="Data do casamento"
          >
            {/* Folhagem direita */}
            <Image
              src="/photos/leaf-left.png"
              alt=""
              width={140}
              height={150}
              className="
                absolute
                right-[-15px]
                top-8
                -mt-50
                opacity-60
                pointer-events-none
                select-none
              "
            />

            <strong
              className="
                font-body
                font-light
                leading-[0.72]
              "
              style={{
                fontSize: "clamp(7rem, 32vw, 10.5rem)",
              }}
            >
              {details.day}
            </strong>

            <span
              className="
                font-script
                leading-[0.9]
              "
              style={{
                fontSize: "clamp(5rem, 19vw, 7.5rem)",
              }}
            >
              {details.month}
            </span>

            <em
              className="
                not-italic
                font-body
                font-light
                leading-[0.88]
              "
              style={{
                fontSize: "clamp(4.5rem, 17vw, 6.2rem)",
              }}
            >
              {details.year}
            </em>

            <p
              className="
                text-[#5e7657]
                text-[0.75rem]
                uppercase
                tracking-[0.12em]
                mt-6
              "
            >
              Pontualmente às {details.time}
            </p>
          </section>


          {/* Confirmar Presença */}
          <div
            className="
              relative
              flex
              justify-center
              mb-14
            "
          >
            {/* Folhagem esquerda */}
            <Image
              src="/photos/leaf-left.png"
              alt=""
              width={140}
              height={150}
              className="
                absolute
                left-[-35px]
                top-0
                opacity-60
                pointer-events-none
                select-none
              "
            />

            <a
              href={details.rsvp}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                flex-col
                items-center
                gap-2.5
                text-[#5e7657]
                text-[0.6rem]
                uppercase
                tracking-[0.12em]
              "
            >
              <span
                className="
                  flex
                  items-center
                  justify-center
                  w-16
                  h-16
                  rounded-full
                  border
                  border-[#4f673f]/25
                  bg-[#f8fff3]/90
                  text-[#6f8f62]
                "
                style={{
                  boxShadow:
                    "0 10px 22px rgba(36,61,36,0.14)",
                }}
              >
                <svg
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path
                    d="M5 12.5L10 17L19 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              Confirmar <br></br>Presença
            </a>
          </div>


          {/* Foto */}
          <div
            className="
              relative
              w-[calc(100%+56px)]
              -ml-7
              h-[340px]
              overflow-hidden
              my-12
            "
          >
            <Image
              src="/galery/galery-2.jpeg"
              alt=""
              fill
              className="
                object-cover
                object-center
              "
            />

            {/* Fade superior */}
            <div
              className="
                absolute
                inset-x-0
                top-0
                h-24
                bg-gradient-to-b
                from-[#F9F3EA]
                to-transparent
              "
            />

            {/* Fade inferior */}
            <div
              className="
                absolute
                inset-x-0
                bottom-0
                h-28
                bg-gradient-to-t
                from-[#F9F3EA]
                to-transparent
              "
            />
          </div>

          {/* Localização */}
          <LocationSection 
            data={details.ceremony}
            type="ceremony"
          />

          <LocationSection
            data={details.reception}
            type="reception"
          />

          {/* Dress code */}
          <section
            className="
              relative
              w-full
              my-16
              flex
              justify-center
            "
          >

            {/* Etiqueta */}
            <div
              className="
                ticket 
                relative
                w-[90%]
                max-w-[350px]
                py-10
                px-8
                text-center
              "
            >

              {/* Fundo suave da etiqueta */}
              <div
                className="
                  absolute
                  inset-4
                  border
                  border-dashed
                  border-[#5e7657]/20
                  pointer-events-none
                "
                style={{
                  clipPath:
                    "polygon(14px 0,calc(100% - 14px) 0,100% 14px,100% calc(100% - 14px),calc(100% - 14px) 100%,14px 100%,0 calc(100% - 14px),0 14px)"
                }}
              />


              <div className="relative z-10">

                {/* Título */}
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    text-[#5e7657]
                  "
                >

                  <span
                    className="
                      font-script
                      leading-none
                    "
                    style={{
                      fontSize: "clamp(2.8rem,12vw,3.8rem)"
                    }}
                  >
                    Dress
                  </span>


                  {/* Ícone casal */}
                  <Image
                    src="/photos/couple-icon.png"
                    alt=""
                    width={65}
                    height={55}
                    className="
                      object-contain
                    "
                  />

                  <span
                    className="
                      font-script
                      leading-none
                    "
                    style={{
                      fontSize: "clamp(2.8rem,12vw,3.8rem)"
                    }}
                  >
                    Code
                  </span>

                </div>


                {/* Subtitulo */}
                <p
                  className="
                    mt-4
                    text-[#6b7864]
                    uppercase
                    tracking-[0.25em]
                    text-[0.75rem]
                    font-light
                  "
                >
                  Traje Esporte Fino
                </p>

              </div>

            </div>

          </section>

          {/* Lista de presentes */}
          <section
            className="
              relative
              mb-20
              pt-20
              text-center
              overflow-hidden
            "
          >
            {/* Floral superior direito */}
            <Image
              src="/photos/floral-smal.png"
              alt=""
              width={120}
              height={120}
              className="
                absolute
                -left-5
                top-0
                opacity-20
                pointer-events-none
                select-none
                mt-[-60px]
              "
            />

            <Image
              src="/photos/floral-smal.png"
              alt=""
              width={120}
              height={120}
              className="
                absolute
                -right-5
                top-0
                rotate-180
                opacity-20
                pointer-events-none
                select-none
                mt-[120px]
              "
            />


            {/* Título */}
            <h2
              className="
                font-script
                text-[#35562f]
                leading-[0.85]
                mb-10
                ml-12
              "
              style={{
                fontSize: "clamp(3.5rem, 16vw, 4.8rem)",
              }}
            >
              <span className="block text-left pr-6">
                Sugestões de
              </span>

              <span className="block text-left pl-6 ml-10">
                Presente
              </span>
            </h2>


            {/* Ícone clicável */}
            <a
              href={details.gifts}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                flex-col
                items-center
                justify-center
                mx-auto
                mb-6
                group
              "
            >
              <span
                className="
                  flex
                  items-center
                  justify-center
                  w-16
                  h-16
                  rounded-full
                  border
                  border-[#5e7657]/25
                  bg-[#f8fff3]/40
                  transition-transform
                  group-hover:scale-105
                "
              >
                <Gift
                  className="
                    w-8
                    h-8
                    text-[#35562f]
                  "
                  strokeWidth={1.4}
                />
              </span>

              <span
                className="
                  mt-3
                  uppercase
                  tracking-[0.18em]
                  text-[0.7rem]
                  text-[#35562f]
                "
              >
                Lista de presentes
              </span>
            </a>


            {/* Texto */}
            <div
              className="
                max-w-[290px]
                mx-auto
                text-[#4f5f48]
              "
            >
              <p
                className="
                  leading-8
                  text-[0.9rem]
                "
              >
                NOSSO MAIOR PRESENTE SERÁ A SUA PRESENÇA
                NESTE MOMENTO TÃO ESPECIAL PARA NÓS.
              </p>


              <p
                className="
                  mt-5
                  leading-8
                  text-[0.9rem]
                "
              >
                CASO QUEIRA NOS PRESENTEAR COM ALGO
                MATERIAL, SUGERIMOS A LISTA DE PRESENTES.
              </p>
            </div>

          </section>

          {/* Countdown */}
          <Countdown />

          <p
            className="
              text-[2rem]
              uppercase
              tracking-[0.16em]
              text-[#5e7657] 
              font-semibold
              mt-30
              mb-1
            "
          >
            Esperamos
          </p>

          <p
            className="
              font-script
              text-[1.25rem]
              text-[#5e7657]
              leading-none
              font-bold
              mb-30
            "
            style={{
              fontSize: "clamp(2.5rem, 10vw, 3.3rem)",
            }}
          >
            Por você!
          </p>

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
