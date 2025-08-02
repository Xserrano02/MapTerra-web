"use client"

import { useState } from "react"
import Image from "next/image"
import {
  FiUser, FiPhone, FiMail, FiChevronDown, FiMessageCircle,
  FiShield, FiClock, FiMap
} from "react-icons/fi"
import { toast } from "sonner"

const services = [
  "Levantamientos topográficos",
  "Nube de puntos 3D",
  "Curvas de nivel",
  "Ortofotomapas HD",
  "Cartografía catastral",
  "Detección de desviaciones",
]

const perks = [
  { Icon: FiShield, txt: "Sin riesgos legales ni operativos" },
  { Icon: FiClock, txt: "Ahorro comprobado y resultados inmediatos" },
  { Icon: FiMap,   txt: "Equipo siempre disponible y actualizado" },
]

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "", lastName: "", phone: "", email: "",
    service: "", comments: "",
  })

  // Aquí optimizamos la actualización del estado
  const handle = e => {
    const { name, value } = e.target
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }))
  }

  const submit = e => {
    e.preventDefault()

    toast.success("Mensaje enviado correctamente.", {
      description: "¡Gracias por contactar a MAPTERRA! Responderemos pronto.",
    })

    setForm({ firstName:"", lastName:"", phone:"", email:"", service:"", comments:"" })
  }

  const Field = ({ name, type="text", placeholder, Icon }) => (
    <div className="relative">
      <Icon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" size={18}/>
      <input
        name={name} type={type} value={form[name]} onChange={handle}
        placeholder={placeholder} required
        className="w-full rounded-xl bg-neutral-900 py-4 pl-12 pr-4 text-sm text-white outline-none ring-1 ring-neutral-700 placeholder:text-neutral-500 focus:ring-2 focus:ring-white"
      />
    </div>
  )

  return (
    <section className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] bg-black px-4 py-24 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 lg:flex-row">
        {/* formulario */}
        <div className="flex-1">
          <h2 className="text-4xl font-semibold tracking-tight">Hablemos de tu proyecto</h2>
          <p className="mt-4 max-w-md text-sm text-neutral-400">
            Comparte tus necesidades y nuestro equipo responderá en cuestión de horas.
          </p>

          <form onSubmit={submit} className="mt-12 space-y-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <Field name="firstName" placeholder="Nombre"  Icon={FiUser}/>
              <Field name="lastName"  placeholder="Apellido" Icon={FiUser}/>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <Field name="phone" type="tel" placeholder="Teléfono" Icon={FiPhone}/>
              <Field name="email" type="email" placeholder="Correo" Icon={FiMail}/>
            </div>

            <div className="relative">
              <FiChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500" size={18}/>
              <select
                name="service" value={form.service} onChange={handle} required
                className="w-full appearance-none rounded-xl bg-neutral-900 py-4 pl-4 pr-12 text-sm outline-none ring-1 ring-neutral-700 focus:ring-2 focus:ring-white"
              >
                <option value="" disabled>Servicio requerido</option>
                {services.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>

            <div className="relative">
              <FiMessageCircle className="absolute left-4 top-4 text-neutral-500" size={18}/>
              <textarea
                name="comments" rows={5} value={form.comments} onChange={handle}
                placeholder="Comentarios"
                className="w-full rounded-xl bg-neutral-900 py-4 pl-12 pr-4 text-sm outline-none ring-1 ring-neutral-700 placeholder:text-neutral-500 focus:ring-2 focus:ring-white"
              />
            </div>

            <button
              type="submit"
              className="block w-full rounded-xl bg-white py-4 text-center text-sm font-medium text-black transition hover:bg-neutral-200"
            >
              Enviar
            </button>
          </form>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center gap-10">
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
            <Image
              src="/imagedrone.png"
              alt="Drone surveying landscape"
              fill priority
              className="object-cover opacity-80"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"/>
            <p className="absolute bottom-6 left-6 text-xl font-medium">
              Datos que inspiran decisiones
            </p>
          </div>

          <ul className="grid w-full gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {perks.map(({ Icon, txt }) => (
              <li key={txt} className="flex items-center gap-3 rounded-xl bg-neutral-900 px-6 py-4 ring-1 ring-neutral-700">
                <Icon size={20} className="shrink-0 text-white"/>
                <span className="text-sm text-neutral-300">{txt}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
  