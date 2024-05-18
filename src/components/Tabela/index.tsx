function Tabela() {
  return (
    <table className="table table-dark table-striped text-center table-bordered align-middle">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>email</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>João</td>
          <td>joao@gmail.com</td>
            <td className="d-flex justify-content-around bg-secondary mb-4">
                <button className="btn btn-primary">Editar</button>
                <button className="btn btn-danger">Excluir</button>
            </td>
        </tr>
        <tr>
          <td>2</td>
          <td>Maria</td>
          <td>maria@yahoo.com</td>
          <td>
            <button className="btn btn-primary">Editar</button>
            <button className="btn btn-danger">Excluir</button>
            </td>
        </tr>
        <tr>
          <td>3</td>
          <td>José</td>
          <td>jose@hotmail.com</td>
            <td>
                <button className="btn btn-primary">Editar</button>
                <button className="btn btn-danger">Excluir</button>
                </td>
        </tr>



      </tbody>
    </table>
  );
}

export default Tabela;