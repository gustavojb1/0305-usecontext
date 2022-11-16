import React from "react";
import { GlobalContext } from "./GlobalContext";

function Produto() {
  const global = React.useContext(GlobalContext);

  return (
    <div>

      <button onClick={()=>global.puxarDados()}>Pegar Dados</button>{" "}
      {global.dados&&<h1>Produto: {global.dados.map(produto=><li key={produto.id}> {produto.nome}</li>)}</h1>}
      
    </div>
  );
}

export default Produto;
