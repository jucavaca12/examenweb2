

import Facebook from "../helpers/Facebook";
import Github from "../helpers/Github";
import Icono from "../helpers/Icono";
import Instagram from "../helpers/Instagram";



const Footer = () => {
  return (
    <footer className="pie-pagina w-100 d-flex">

      <section className="Redes">
        <h4>Siguenos</h4>
        <Facebook />
        <Github />
        <Instagram />
        <h4>Tendencias</h4>
      </section>
      <a href="https://support.wix.com/es/article/crear-una-pol%C3%ADtica-de-t%C3%A9rminos-y-condiciones#:~:text=Los%20T%C3%A9rminos%20son%20un%20acuerdo,de%20una%20posible%20exposici%C3%B3n%20legal.">
        <h6>Condiciones de uso </h6>
      </a>
      <a href="https://www.cookiebot.com/es/politica-de-privacidad-para-mi-web/?utm_source=google&utm_medium=cpc&utm_campaign=global-es-generic&utm_device=c&utm_term=politicas%20de%20privacidad%20para%20paginas%20web&utm_content=global-spa-privacy-policy&matchtype=e&gclid=CjwKCAiA-dCcBhBQEiwAeWidtR4WNmqddN9-pJZ5QCNTolyopEEM8lt9aegtBfg4gZamne1LuU5ltBoCxOkQAvD_BwE">
        <h6>Aviso de privacidad </h6>
      </a>
      <a href="https://es.wefindanswers.co/web?q=anuncios%20publicitarios&o=1670179&akid=1000000172wef143020912273kwd-14488342&gclid=CjwKCAiA-dCcBhBQEiwAeWidtYxsaOrB9X0i63JPnHRa2Cb8GAFD7oqpCspSLKTyy59-e2P8JRT9JBoC9ksQAvD_BwE&ueid=ab2e1a97-aba0-44fd-8e76-6e40888a5fdb&qo=semQuery&ad=semA&ag=fw59&an=google_s">
        <h6>Anuncios basados en intereses</h6>
      </a>
      <Icono />
    </footer>
  )
}

export default Footer;