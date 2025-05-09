import { useState } from "react"
import TextInput from "./TextInput"

export default function NewGameForm({addGame}){
    const [title, setTitle] = useState("")
    const [cover, setCover] = useState("")

    const handlesubmit = (ev) => {
        ev.preventDefault()
        addGame({title, cover})
        setTitle("")
        setCover("")
      }

    return (
        <form onSubmit={handlesubmit}>
          <TextInput id="title" value={title} setValue={setTitle} label="Titulo:"/>
          <TextInput id="cover" value={cover} setValue={setCover} label="Capa:"/>
          <button type="submit">Adicionar à biblioteca</button>
        </form>
    )
}