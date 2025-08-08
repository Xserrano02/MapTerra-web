// src/componentes/Industrias.js
"use client"

import {
  FiCpu,
  FiLayers,
  FiMapPin,
  FiTrendingUp,
  FiGlobe,
  FiActivity,
} from "react-icons/fi"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const industrias = [
  { Icon: FiCpu,        title: "Ingeniería & BIM", txt: "Modelos topográficos precisos para diseño." },
  { Icon: FiMapPin,     title: "Urbanismo",        txt: "Base cartográfica HD para planificación." },
  { Icon: FiGlobe,      title: "Medio ambiente",   txt: "Monitoreo de cobertura vegetal" },
  { Icon: FiLayers,     title: "Minería",          txt: "Cálculo de volúmenes y control de taludes." },
  { Icon: FiActivity,   title: "Construcción",     txt: "Nube de puntos y curvas de nivel.  " },
  { Icon: FiTrendingUp, title: "Infraestructura",  txt: "Seguimiento de avance y detección de desviaciones." },
]

export default function Industrias() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section ref={ref} className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="text-center text-3xl font-semibold tracking-tight text-black">
          Industrias que potenciamos
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-neutral-600">
          MAPTERRA aplica datos geoespaciales de precisión para transformar proyectos
          en múltiples sectores clave.
        </p>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {industrias.map(({ Icon, title, txt }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0, transition: { delay: i * 0.08 } } : {}}
              className="group rounded-3xl border border-[#e5e5ea] bg-white/70 p-10 shadow-sm backdrop-blur
                         transition hover:-translate-y-1 hover:shadow-md"
            >
              <Icon size={30} className="mb-6 text-black group-hover:scale-105 transition-transform" />
              <h3 className="text-xl font-medium text-black">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-neutral-600">{txt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
