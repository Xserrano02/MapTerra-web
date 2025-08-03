'use client'

import { useState } from 'react'

const navItems = [
  { label: 'Inicio',        id: 'inicio'     },
  { label: 'Servicios',     id: 'servicios'  },
  { label: 'Alcance',       id: 'alcance'    },
  { label: 'Quiénes Somos', id: 'nosotros'   },
  { label: 'Contáctenos',   id: 'contacto'   },
]

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  const close = () => setIsOpen(false)

  return (
    <nav className="sticky top-0 z-40 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        
        <a href="#" className="text-2xl font-bold tracking-wide text-black">
          MAPTERRA
        </a>

        {/* Botón mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="toggle menu"
          className="text-black lg:hidden"
        >
          {isOpen
            ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                   viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16"/></svg>}
        </button>

        {/* Enlaces */}
        <div
          className={`absolute inset-x-0 top-full w-full origin-top transform bg-white
                      transition duration-300 lg:static lg:mt-0 lg:flex lg:w-auto lg:translate-y-0 lg:bg-transparent
                      ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 lg:opacity-100 lg:scale-y-100'}`}
        >
          <ul className="flex flex-col px-6 py-4 lg:flex-row lg:space-x-8 lg:p-0">
            {navItems.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={close}
                  className="block py-2 text-black transition-colors hover:text-blue-600"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}
