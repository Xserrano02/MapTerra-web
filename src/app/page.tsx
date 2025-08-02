import Menu from "../componentes/Menu"
import BannerInit from "../componentes/BannerInit"
import Carrusel from "../componentes/Carrusel"
import Servicios from "../componentes/Servicios"
import Details from "../componentes/Details"
import Nosotros from "../componentes/Nosotros"
import Formulario from "../componentes/Formulario"
import Footer from "../componentes/Footer"

export default function Home() {
  return (
    <>
      <Menu/>
      <BannerInit/>
      <Carrusel/>
      <Servicios/>
      <Details/>
      <Nosotros/>
      <Formulario/>
      <Footer/>
    </>
  )
}
