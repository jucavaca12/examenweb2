import SectionAyudas from "../helpers/SectionAyudas";
import SectionBeneficiarios from "../helpers/SectionBeneficiarios";
import SectionPresupuesto from "../helpers/SectionPresupuesto";

const Main = () => {
    return (
        <main className="contenido w-100  d-flex">
            <SectionBeneficiarios/>
            <SectionAyudas/>
            <SectionPresupuesto/>
        </main>
    )
}

export default Main;