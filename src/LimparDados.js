import React from 'react'
import { GlobalContext } from './GlobalContext'

function LimparDados() {
    const global = React.useContext(GlobalContext)

  return (
    <>
    {global.dados&&<button onClick={()=>global.limparDados()}>Limpar Dados</button>}
    </>
  )
}

export default LimparDados