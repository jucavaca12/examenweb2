const FormularioBeneficiarios = () => {
    return (
        <section className="contenedor2">
            <form className="w-75">
                <h2 className="titulos text-center">BENEFICIARIOS</h2>
                <section class="h5 text-center ">
                    <label for="exampleInputEmail1" class="form-label">Nombre</label>
                    <input placeholder="Digite un Nombre" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <section id="emailHelp" class="form-text"></section>
                </section>
                <section class="h5 text-center ">
                    <label for="exampleInputPassword1" class="form-label">Edad</label>
                    <input placeholder="Digite Edad" type="text" class="form-control" id="exampleInputPassword1" />
                </section>
                <section class="h5 text-center">
                    <label for="exampleInputPassword1" class="form-label">Correo Electrónico</label>
                    <input placeholder="Digite E-mail" type="email" class="form-control" id="exampleInputPassword1" />
                </section>
                <section class="h5 text-center ">
                    <label for="exampleInputPassword1" class="form-label">Dirección</label>
                    <input placeholder="Digite una Dirección" type="text" class="form-control" id="exampleInputPassword1" />
                </section>
                <section class="h5 text-center mb-3 w-100">
                    <label for="exampleInputPassword1" class="form-label">Universidad</label>
                    <input placeholder="Digite una Universidad" type="text" class="form-control" id="exampleInputPassword1" />
                </section>

                <section class=" mb-3 w-50 gap-3 ">

                    <button class="botones fw-bold btn btn-outline-danger">Cargar Imagen </button>

                </section>
            </form>


        </section>

    )
}

export default FormularioBeneficiarios;