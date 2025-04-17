import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { auth } from './config/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { Link } from 'react-router-dom';
import { SignJWT } from 'jose';
import './index.css'


function App() {
  //ADMIN 
  //gmail teste: admin@gmail.com
  //senha:admin123
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();
 const autenticarComFirebase = async(event) =>{
  event.preventDefault();
  try{
    await signInWithEmailAndPassword(auth, email, senha);
    const secretKey = new TextEncoder().encode('minhaChaveSecreta');
    const token = await new SignJWT({user: 'admin'})
    .setProtectedHeader({alg: 'HS256'})
    .setIssuedAt()
    .setExpirationTime('1h')
    .sign(secretKey)
    localStorage.setItem('token', token);
    navigate('/')
    alert('Login realizado com sucesso');
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
           <Link to="/Registrar">
           <p className='link' >Não tenho conta,criar uma</p>
           </Link>
    </main>
    </>
  )
}

export default App
