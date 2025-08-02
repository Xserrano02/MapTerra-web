// src/componentes/Carrusel.js
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const slides = [
  {
    src: "https://img.freepik.com/foto-gratis/drone-camara-esta-volando-sobre-iceberg_335224-624.jpg?semt=ais_hybrid&w=740",
    title: "SkyView Pro",
    txt: "Calidad cinematográfica para proyectos profesionales.",
  },
  {
    src: "https://img.freepik.com/foto-gratis/drone-camara-esta-volando-sobre-iceberg_335224-624.jpg?semt=ais_hybrid&w=740",
    title: "SkyView Air",
    txt: "Ligero, plegable y siempre listo para la aventura.",
  },
  {
    src: "https://img.freepik.com/foto-gratis/drone-camara-esta-volando-sobre-iceberg_335224-624.jpg?semt=ais_hybrid&w=740",
    title: "SkyView Mini",
    txt: "Captura los momentos cotidianos sin esfuerzo.",
  },
  {
    src: "https://img.freepik.com/foto-gratis/drone-camara-esta-volando-sobre-iceberg_335224-624.jpg?semt=ais_hybrid&w=740",
    title: "SkyView Pro",
    txt: "Calidad cinematográfica para proyectos profesionales.",
  },
  {
    src: "https://img.freepik.com/foto-gratis/drone-camara-esta-volando-sobre-iceberg_335224-624.jpg?semt=ais_hybrid&w=740",
    title: "SkyView Air",
    txt: "Ligero, plegable y siempre listo para la aventura.",
  },
  {
    src: "https://img.freepik.com/foto-gratis/drone-camara-esta-volando-sobre-iceberg_335224-624.jpg?semt=ais_hybrid&w=740",
    title: "SkyView Mini",
    txt: "Captura los momentos cotidianos sin esfuerzo.",
  }
];

const getPerView = () => {
  if (globalThis.innerWidth >= 1024) return 3;
  if (globalThis.innerWidth >= 640) return 2;
  return 1;
};

export default function Carrusel() {
  const wrapRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const scrollTo = (i) => {
      const item = wrap.children[i];
      if (item) wrap.scrollTo({ left: item.offsetLeft, behavior: "smooth" });
    };

    const id = setInterval(() => {
      setIndex((i) => {
        const next = (i + 1) % slides.length;
        scrollTo(next);
        return next;
      });
    }, 3000);

    const stop = () => clearInterval(id);
    wrap.addEventListener("pointerdown", stop, { once: true });
    return () => clearInterval(id);
  }, []);

  const move = (dir) => {
    const perView = getPerView();
    setIndex((i) => {
      let next = i + dir;
      if (next < 0) next = slides.length - 1;
      if (next >= slides.length) next = 0;
      const item = wrapRef.current.children[next];
      if (item) {
        wrapRef.current.scrollTo({ left: item.offsetLeft, behavior: "smooth" });
      }
      return next;
    });
  };

  return (
    <section className="bg-white py-20 text-black select-none">
      <div className="relative mx-auto max-w-6xl">
        <div
          ref={wrapRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-6 lg:px-0"
        >
          {slides.map(({ src, title, txt }, i) => (
            <article
              key={i}
              className="w-[85%] shrink-0 snap-start sm:w-1/2 lg:w-1/3 rounded-2xl bg-neutral-100 shadow transition-transform hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-56 sm:h-64 lg:h-72 overflow-hidden rounded-t-xl">
                <Image
                  src={src}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width:640px) 80vw, (max-width:1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-gray-600">{txt}</p>
              </div>
            </article>
          ))}
        </div>

        <button
          onClick={() => move(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow backdrop-blur hover:bg-white"
        >
          <span className="sr-only">Anterior</span>
          <svg width="20" height="20" viewBox="0 0 20 20" className="rotate-180">
            <path d="M6 4l8 6-8 6" fill="none" stroke="#000" strokeWidth="2" />
          </svg>
        </button>

        <button
          onClick={() => move(1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow backdrop-blur hover:bg-white"
        >
          <span className="sr-only">Siguiente</span>
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M6 4l8 6-8 6" fill="none" stroke="#000" strokeWidth="2" />
          </svg>
        </button>
      </div>
    </section>
  );
}
