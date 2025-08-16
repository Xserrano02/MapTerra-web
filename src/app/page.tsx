"use client"

import AnimatedSection from "../componentes/AnimatedSection"
export const runtime = "edge"

import Menu from "../componentes/Menu"
import BannerInit from "../componentes/BannerInit"
import Carrusel from "../componentes/Carrusel"
import Servicios from "../componentes/Servicios"
import Details from "../componentes/Details"
import Nosotros from "../componentes/Nosotros"
import Formulario from "../componentes/Formulario"
import Footer from "../componentes/Footer"
import WhatsAppFloat from "../componentes/WhatsAppFloat"


export default function Home() {
  return (
    <>
      <Menu /> 
      <AnimatedSection id="inicio"     delay={0.00}><BannerInit/></AnimatedSection>
      <AnimatedSection delay={0.10}><Carrusel/></AnimatedSection>
      <AnimatedSection id="servicios"  delay={0.10}><Servicios/></AnimatedSection>
      <AnimatedSection id="alcance"    delay={0.20}><Details/></AnimatedSection>
      <AnimatedSection id="nosotros"   delay={0.25}><Nosotros/></AnimatedSection>
      <AnimatedSection id="contacto"   delay={0.30}><Formulario/></AnimatedSection>
      <AnimatedSection id="footer"     delay={0.35}><Footer/></AnimatedSection>

      <WhatsAppFloat
        phone="+503 7000 1234"
        message="Hola, necesito más información 🙂"
        label="Abrir chat de WhatsApp"
      />
    </>
  )
}
