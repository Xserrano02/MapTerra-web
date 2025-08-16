import Link from "next/link"
import { FiMail, FiMapPin, FiPhone, FiFacebook, FiInstagram, FiLinkedin } from "react-icons/fi"

export default function Footer() {
  return (
    <footer className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] bg-black px-4 py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">MAPTERRA</h3>
          <p className="max-w-xs text-sm text-neutral-400">
            Transformamos datos aéreos en decisiones inteligentes.
          </p>
          <p className="text-xs text-neutral-500">© 2025 MAPTERRA. Todos los derechos reservados.</p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contacto</h3>
          <ul className="space-y-3 text-sm text-neutral-300">
            <li className="flex items-center gap-3">
              <FiMail className="shrink-0" size={16} />
              <Link href="mailto:contacto@mapterra.com" className="hover:underline">info@mapterrasv.com</Link>
            </li>
            <li className="flex items-center gap-3">
              <FiPhone className="shrink-0" size={16} />
              <Link href="tel:+50376944887" className="hover:underline">+503 76944887</Link>
            </li>
            <li className="flex items-center gap-3">
              <FiMapPin className="shrink-0" size={16} />
              <span>Mejicanos, San Salvador</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Síguenos</h3>
          <div className="flex gap-6">
            <Link href="https://www.facebook.com/share/1F9vcNTtLJ/?mibextid=wwXIfr" aria-label="Facebook" className="transition hover:opacity-75">
              <FiFacebook size={20} />
            </Link>
            <Link href="https://www.instagram.com/mapterra_sv?igsh=MXM1bTExZjZ5MWI2eg==" aria-label="Instagram" className="transition hover:opacity-75">
              <FiInstagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
