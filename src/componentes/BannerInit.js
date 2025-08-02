"use client";

import { useEffect, useState } from "react";

const phrases = [
  "Ahorra hasta 60 000 USD en equipos y licencias",
  "Resultados inmediatos sin curva de aprendizaje",
  "Equipo de drones RTK & LiDAR siempre disponible",
  "Sin riesgos legales ni operativos para tu empresa",
  "Flexibilidad: paga solo por el servicio que necesitas",
];

export default function BannerInit() {
  const [phrase, setPhrase] = useState(phrases[0]);

  useEffect(() => {
    const id = setInterval(() => {
      setPhrase((prev) => {
        const next = phrases[(phrases.indexOf(prev) + 1) % phrases.length];
        return next;
      });
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/VideoBanner.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <span className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-100 sm:text-base">
          {phrase}
        </p>

        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
          MAPTERRA
        </h1>

        <h2 className="mt-4 text-xl font-medium text-gray-200 sm:text-2xl">
          Soluciones geoespaciales profesionales con drones
        </h2>

      </div>
    </section>
  );
}
