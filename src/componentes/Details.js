import Image from "next/image"
import {
  RiFocus2Line,
  RiRadarLine,
  RiMapPinLine,
  RiGpsLine,
} from "react-icons/ri"

const features = [
  { Icon: RiFocus2Line, label: "240 000 pts/seg" },
  { Icon: RiRadarLine, label: "5 retornos LiDAR" },
  { Icon: RiMapPinLine, label: "Cobertura máx. por vuelo" },
  { Icon: RiGpsLine, label: "RTK alta precisión" },
]

const YT_ID = "mvKmmXewNIo";

const useCases = [
  {
    src: "/Infras-Ocultas.webp",
    title: "Inspección de infraestructuras ocultas por vegetación",
    txt: "El L2 penetra vegetación densa y puede revelar estructuras ocultas que otros sensores no detectan fácilmente",
  },
  {
    src: "/Estudios-forestales-drone.webp",
    title: "Estudios forestales avanzados",
    txt: "Ideal para instituciones ambientales o proyectos REDD+ de compensación de carbono",
  },
  {
    src: "/Drone_Mapeo.webp",
    title: "Mapeo de zonas peligrosas o inaccesibles",
    txt: "Permite obtener modelos 3D sin exponer a personal a riesgos físicos",
  },
  {
    src: "/Drone-evaluacion.webp",
    title: "Reconstrucción de escenas de desastre",
    txt: "Después de terremotos, huracanes o deslaves, el L2 puede generar un modelo 3D detallado para evaluar daños y planificar reconstrucción.",
  },
  {
    src: "/Inspeccion-area.webp",
    title: "Control de avance de obras civiles (obra gris)",
    txt: "Ideal para constructoras, ingenieros supervisores y contratistas del estado.",
  },
  {
    src: "/Drone_Agricultura.webp",
    title: "Gestión avanzada de tierras agrícolas",
    txt: "Medición de microrelieves para diseñar sistemas de riego por gravedad, análisis de escurrimiento de agua, nivelación de parcelas.",
  }
]

export default function Details() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="relative overflow-hidden rounded-xl bg-black aspect-video">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${YT_ID}?autoplay=1&mute=1&loop=1&playlist=${YT_ID}&controls=0&rel=0&modestbranding=1&playsinline=1`}
            title="DJI Zenmuse L2 Overview"
            allow="autoplay; encrypted-media; picture-in-picture"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            loading="lazy"
            className="absolute inset-0 h-full w-full"
          />
        </div>


        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Introduciendo <br /> Zenmuse L2
          </h1>

          <p className="text-gray-600">
            Zenmuse L2 integra un LiDAR de cuadro, un sistema IMU de alta precisión de desarrollo propio,
            y una cámara de mapeo RGB CMOS 4/3, lo que proporciona a las plataformas de vuelo DJI una adquisición de datos geoespaciales más precisa, eficiente y fiable.
            Al utilizarse con DJI Terra, ofrece una solución integral para la recopilación de datos 3D y el posprocesamiento de alta precisión.
          </p>

        </div>
      </div>

      <h2 className="mt-16 text-lg font-semibold">Caracteristicas Clave</h2>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {features.map(({ Icon, label }) => (
          <div
            key={label}
            className="flex items-center space-x-3 rounded-lg border p-4 shadow-sm hover:shadow-md transition"
          >
            <Icon size={24} className="shrink-0 text-indigo-600" />
            <span className="text-sm font-medium">{label}</span>
          </div>
        ))}
      </div>

      <h2 className="mt-16 text-lg font-semibold">Casos de uso</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {useCases.map(({ src, title, txt, video }) => (
          <div
            key={title}
            className="rounded-xl border bg-white shadow-sm transition hover:shadow-md"
          >
            {video ? (
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="h-48 w-full rounded-t-xl object-cover"
              />
            ) : (
              <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
                <Image
                  src={src}
                  alt={title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px"
                  quality={60}
                />
              </div>
            )}

            <div className="p-5">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{txt}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
