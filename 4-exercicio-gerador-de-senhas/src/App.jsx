import { useState } from "react"
import Input from "./components/Input"

export default function App(){
  const [password, setPassword] = useState("")
  const [copyText, setCopyText] = useState("Copiar")
  const [passwordSize, setPasswordSize] = useState(12)

  function copyToClipboard(){
    window.navigator.clipboard.writeText(password)
    setCopyText("Copiado!")
  }

  function generate(){
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    let newPassowrd = ""
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassowrd += characters[position]
    }
    setPassword(newPassowrd)
    setCopyText("Copiar")
  }

  return (
    <div className="wrapper">
      <h1>Gerador de senhas</h1>
      <div>
        <label htmlFor="passwordSize">Tamanho:</label>
        <Input passwordSize={passwordSize} setPasswordSize={setPasswordSize}/>
      </div>
      <button onClick={generate}>Gerar senha de {passwordSize} caracteres!</button>
      <button onClick={copyToClipboard}>{copyText}</button>
      <div>{password}</div>
    </div>
  )
}