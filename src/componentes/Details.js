import Image from "next/image"
import {
  RiFocus2Line,
  RiRadarLine,
  RiMapPinLine,
  RiGpsLine,
} from "react-icons/ri"

const features = [
  { Icon: RiFocus2Line, label: "240 000 pts/seg" },
  { Icon: RiRadarLine,  label: "5 retornos LiDAR" },
  { Icon: RiMapPinLine, label: "Cobertura máx. por vuelo" },
  { Icon: RiGpsLine,    label: "RTK alta precisión" },
]

const useCases = [
  {
    src: "https://grupotrato.com/wp-content/uploads/2021/04/volumen-movimiento-de-tierras-grupo-trato.jpg",
    title: "Cálculo de volúmenes en movimientos de tierra",
    txt: "Comparación periódica entre modelos para estimar material excavado o rellenado.",
  },
  {
    src: "https://www.consumer.es/app/uploads/fly-images/460145/agricultura-precision-1200x550-cc.jpg",
    title: "Agricultura de precisión",
    txt: "dentificación de microrelieves que afectan encharcamientos.",
  },
  {
    src: "https://i0.wp.com/idc.apddrones.com/wp-content/uploads/2023/05/Imagenes-cabecera-y-clusters-blogs.jpg?w=1080&ssl=1",
    title: "Monitoreo ambiental de zonas protegidas",
    txt: "Detección de cambios en cobertura vegetal y cuerpos de agua.",
  }
]

export default function Details() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="aspect-square overflow-hidden rounded-xl">
          <video
            src="/DroneVideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Introducing the <br /> SkyView X500
          </h1>

          <p className="text-gray-600">
            Experience the next level of aerial photography with the SkyView X500.
            Capture stunning 4K video and 20 MP photos with unparalleled stability
            and precision.
          </p>

          <button className="w-max rounded-md bg-black px-8 py-3 text-sm font-medium text-white transition hover:bg-gray-800">
            Learn More
          </button>
        </div>
      </div>

      {/* características */}
      <h2 className="mt-16 text-lg font-semibold">Key Features</h2>
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

      {/* casos de uso */}
      <h2 className="mt-16 text-lg font-semibold">Use Cases</h2>
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
                <Image src={src} alt={title} fill className="object-cover" />
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
