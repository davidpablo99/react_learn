import { useState } from "react";
import Input from "./Input";

export default function FormularioComentario({aoEnviar}){
    const [email, setEmail] = useState("")
    const [mensagem, setMensagem] = useState("")

    const handleSubmit = (e)=> {
        e.preventDefault();
        if (email && mensagem){
            aoEnviar(email, mensagem);
            setEmail("");
            setMensagem("");
        }
    };

    return (
        <form>
            <div>
                <h2>Seção de comentários</h2>
                <Input type={"text"} id="title" label="Email" value={email} setValue={setEmail}/>
            </div>
            <div>
                <label>Comentário:</label><br />
                <textarea
                cols="30"
                    value={mensagem}
                    onChange={(e)=>setMensagem(e.target.value)}
                    required
                />
            </div>
            <button type="submit" style={{marginTop: "1rem"}} onClick={handleSubmit}>Enviar comentário</button>
            <hr />
        </form>
    )
}