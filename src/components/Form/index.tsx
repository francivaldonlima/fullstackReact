function Form() {
    return (
        <div className="row">
            <div className="col">
                <h3>Nome do usuario: {nome} </h3>
                <div className="row">
                    <div className="col">
                        <label className="form-label">Nome</label>
                        <input 
                        type="text" className="form-control" id="nome" name="nome" />


                    </div>
                    <label className="form-label">Nome</label>

                    <input type="text" className="form-control" id="nome" name="nome" />

                    <label htmlFor="nome">Nome</label>
                    
                </div>
            </div>

            );
}