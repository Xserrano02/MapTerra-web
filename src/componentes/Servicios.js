"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const phrases = [
  "Levantamientos topográficos de alta precisión",
  "Nube de puntos 3D para proyectos de ingeniería",
  "Curvas de nivel personalizadas",
  "Ortofotomapas georreferenciados",
  "Cartografía catastral confiable",
  "Detección de desviaciones en tiempo real",
];

const cards = [
  {
    src: "/Levantamientos_topograficos.png",
    title: "Levantamientos topográficos",
    txt: "Modelos digitales del terreno con precisión centimétrica."
  },
  {
    src: "/Nube_de_puntos.png",
    title: "Nube de puntos 3D",
    txt: "Millones de puntos georreferenciados para ingeniería y obra civil."
  },
  {
    src: "/curvas_nivel.png",
    title: "Curvas de nivel",
    txt: "Intervalos precisos para diseños de drenaje e infraestructura."
  },
  {
    src: "/Ortomapas_drone.png",
    title: "Ortofotomapas HD",
    txt: "Base cartográfica para monitoreo y planificación territorial."
  },
  {
    src: "/Mapeo_catastral.png",
    title: "Cartografía catastral",
    txt: "Actualiza catastros y delimita propiedades con exactitud."
  },
  {
    src: "/Proceso_en_drone.png",
    title: "Detección de desviaciones",
    txt: "Compara progreso real vs. cronograma en tiempo real."
  },
];

export default function Servicios() {
  const [phrase, setPhrase] = useState(phrases[0]);

  useEffect(() => {
    const id = setInterval(() => {
      setPhrase((p) => phrases[(phrases.indexOf(p) + 1) % phrases.length]);
    }, 4800);
    return () => clearInterval(id);
  }, []);

  const ABOVE_THE_FOLD = 3;

  return (
    <section className="bg-black text-white px-4 py-24">
      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-6 text-xs font-medium tracking-widest text-gray-400">
          {phrase}
        </p>

        <h2 className="text-5xl font-semibold tracking-tight sm:text-6xl">
          Servicios MAPTERRA
        </h2>

        <p className="mt-6 max-w-xl text-lg text-gray-300">
          Datos geoespaciales con precisión centimétrica sin invertir en
          hardware ni asumir riesgos operativos. Capturamos, procesamos y
          entregamos resultados listos para la toma de decisiones.
        </p>
      </div>

      <div className="mx-auto mt-20 grid max-w-5xl gap-6 grid-cols-2 md:grid-cols-3">
        {cards.map(({ src, title, txt }, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-lg bg-neutral-900 shadow-inner transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="relative h-40 w-full">
              <Image
                src={src}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
                priority={i < ABOVE_THE_FOLD}
                fetchPriority={i < ABOVE_THE_FOLD ? "high" : "auto"}
              />
            </div>
            <div className="p-5">
              <h3 className="mb-2 text-lg font-semibold">{title}</h3>
              <p className="text-sm text-gray-400">{txt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
