import { useState } from 'react';
import { auth } from './config/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import './App.css'


function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

 const autenticarComFirebase = async(event) =>{
  event.preventDefault();
  try{
    await signInWithEmailAndPassword(auth, email, senha);
    alert('Login realizado com sucesso�');
  }catch(err){
    alert('Erro no processo', err)
  }
 };



  return (
    <>
    <main>
      <div>
        <h3>Fazer Login</h3>
      </div>
      <form onSubmit={autenticarComFirebase}>
      <label htmlFor='email'>
           <input 
           id="email"
           name="e-mail"
           type="email"
           value={email}
           placeholder='E-mail'
           onChange = {(event) => setEmail(event.target.value)}>
           </input>
           </label>

           <label htmlFor='password'>
          <input 
           id="password"
           name="password"
           type="password"
           value={senha}
           placeholder='Senha'
           onChange = {(event) => setSenha(event.target.value)}>
           </input>
           </label>
           </form>
           <button type="subimt" onClick={autenticarComFirebase}>Realiza Login</button>
    </main>
    </>
  )
}

export default App
