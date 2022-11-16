import React from "react";
import Produto from "./Produto";
import {GlobalStorage} from "./GlobalContext"
import LimparDados from "./LimparDados";


function App() {
  return (
    <GlobalStorage>
      <Produto/>
      <LimparDados/>
    </GlobalStorage>
  );
}

export default App;
