import {useState, FormEvent, useContext} from 'react'
import Head from "next/head"
import Image from "next/image"
import styles from '../../../styles/home.module.scss'
import logoImg from '../../../public/logo.svg'
import { toast } from 'react-toastify'
import { Input } from "../../components/ui/Input"
import { Button } from "../../components/ui/Button"

import { AuthContext } from '../../contexts/AuthContext'

import Link from "next/link";

export default function SignUp(){

  const {signUp} = useContext(AuthContext);
  const [name, setName] = useState('')
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const[loading, setLoading] = useState(false);

    async function handleSignUp(event: FormEvent ){
      event.preventDefault();

      if(name === '' || email === '' || password === ''){
        toast.error("PREENCHA OS DADOS!")
        return;
      }

      setLoading(true);

      let data = {
        name,
        email,
        password
      }

      await signUp(data)

      setLoading(false);
    }
  

  return (
   <>
   <Head>
    <title>Faça seu Cadastro agora! </title>
   </Head>
   <div className={styles.containerCenter}>
    <Image src={logoImg} alt = "logo sujeito pizzaria"/>

    <div className={styles.login}>
        <h1>Criando a sua conta</h1>
      
      <form onSubmit={handleSignUp}>
        
      <Input
        placeholder="Digite seu nome"
        type="text"
        value={name}
        onChange={(e)=> setName(e.target.value)}
        />


        <Input
        placeholder="Digite seu email"
        type="text"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        />

        <Input
        placeholder="Sua Senha"
        type="password"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        />

        <Button
        type = "submit"
        loading={loading}
        >
          Cadastrar
        </Button>
      </form>
      
      <Link href="/">

          <p className={styles.text}>Já possui uma conta? Faça Login</p>
      
      </Link>

    </div>

   </div>
   
   </>
  )
}
