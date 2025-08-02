// src/componentes/AboutUs.jsx
import Image from "next/image"
import { FaBullseye, FaEye } from "react-icons/fa6"

const cards = [
  {
    Icon: FaBullseye,
    title: "Misión",
    txt: "Proporcionar datos geoespaciales de precisión centimétrica mediante drones de vanguardia, habilitando decisiones inteligentes y sostenibles para nuestros clientes.",
  },
  {
    Icon: FaEye,
    title: "Visión",
    txt: "Ser el referente en Latinoamérica en adquisición y análisis geoespacial, impulsando proyectos que transformen la ingeniería, el medio ambiente y la infraestructura con tecnología de última generación.",
  },
]

export default function AboutUs() {
  return (
    <section className="bg-black text-white w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl">
          <Image
            src="/Nosotros.webp"
            alt="About Us"
            fill
            priority
            className="object-cover"
          />
          <h2 className="absolute bottom-8 left-8 text-5xl font-semibold sm:text-6xl">
            About&nbsp;Us
          </h2>
        </div>

        <p className="mx-auto mt-14 max-w-3xl text-lg leading-relaxed text-gray-300">
          MAPTERRA es una empresa especializada en brindar soluciones integrales mediante drones
          profesionales de última generación. Capturamos, procesamos y entregamos datos geoespaciales
          con precisión centimétrica gracias a tecnologías RTK y LiDAR. Nuestro compromiso es aportar
          valor real a proyectos de ingeniería, urbanismo, medio ambiente, agricultura, minería e
          infraestructura en toda la región.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {cards.map(({ Icon, title, txt }) => (
            <div
              key={title}
              className="flex items-start space-x-4 rounded-2xl border border-neutral-800 bg-neutral-900 p-6 transition hover:bg-neutral-800"
            >
              <Icon size={28} className="shrink-0 text-white" />
              <div>
                <h3 className="font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-gray-400">{txt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
