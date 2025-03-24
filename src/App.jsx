import { useState } from 'react'

import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')


  return (
    <>
    <main>
      <div>
        <h3>Fazer Login</h3>
      </div>
      <label>
           <input 
           type="text"
           value={email}
           placeholder='E-mail'
           onChange = {(event) => setEmail(event.target.value)}>
           </input>
           </label>
           <label>
          <input 
           type="text"
           value={senha}
           placeholder='Senha'
           onChange = {(event) => setSenha(event.target.value)}>
           </input>
           </label>
           <button type="subimt">Realiza Login</button>
    </main>
    </>
  )
}

export default App
