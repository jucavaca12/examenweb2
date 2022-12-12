const FormularioAyudas = () => {
    return (
        <section className="contenedor1">
            <form className="w-75">
                <h2 className="titulos text-center">AYUDAS</h2>
                <section class="h5  text-center">
                    <label for="exampleInputEmail1" class="form-label">Nombre Del Producto</label>
                    <input placeholder="Digite Nombre" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <section id="emailHelp" class="form-text"></section>
                </section>
                <section class="h5 text-center">
                    <label for="exampleInputPassword1" class="form-label">Descripción</label>
                    <input placeholder="Digite una Descripción" type="text" class="form-control" id="exampleInputPassword1" />
                </section>
                <section class="h5 text-center">
                    <label for="exampleInputPassword1" class="form-label">Tienda</label>
                    <input placeholder="Digite una Tienda" type="text" class="form-control" id="exampleInputPassword1" />
                </section>
                <section class="h5 text-center">
                    <label for="exampleInputPassword1" class="form-label">Cantidad</label>
                    <input placeholder="Digite una cantidad" type="text" class="form-control" id="exampleInputPassword1" />
                </section>
                <section class="h5 text-center">
                    <label for="exampleInputPassword1" class="form-label">Valor</label>
                    <input placeholder="Digite un valor" type="money" class="form-control" id="exampleInputPassword1" />
                </section>

                <section class=" mb-3 w-50 gap-3">

                    <button type="submit" class="botones fw-bold btn btn-outline-danger">Enviar</button>
                </section>
            </form>
        </section>

    )
}

export default FormularioAyudas;