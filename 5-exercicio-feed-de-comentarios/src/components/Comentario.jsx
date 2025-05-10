export default function Comentario({email, mensagem, data}){
    return(
        <div>
            <strong>{email}</strong><br />
            <small>{data}</small>
            <p>{mensagem}</p>
        </div>
    )
}