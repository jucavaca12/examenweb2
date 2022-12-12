const FormularioPresupuestos = () => {
    return (
        <section className="contenedor3">
            <form className="">
                <h2 className="titulos text-center">PRESUPUESTO</h2>
                <section class="h5 text-center ">
                    <label for="exampleInputEmail1" class="form-label">Valor</label>
                    <input placeholder="Digite un valor" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <section id="emailHelp" class="form-text"></section>
                </section>
                <section class="h5 text-center">
                    <label for="exampleInputPassword1" class="form-label">Detalle</label>
                    <input placeholder="Descripción" type="text" class="inputDescripcion form-control" id="exampleInputPassword1" />
                </section>


                <section class=" mb-3 w-50 gap-3">

                    <button type="submit" class="botones fw-bold btn btn-outline-danger">Listo</button>
                </section>
            </form>
        </section>


    )
}

export default FormularioPresupuestos; 