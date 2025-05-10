import Comentario from "./Comentario";

export default function ListaComentarios({comentarios}){
    if(comentarios.length === 0){
        return <p>Nenhum comentário ainda. Seja o primeiro a comentar!</p>
    }
    return (
        <div>
            {comentarios.map((c,i) =>(
                <Comentario
                key={i}
                email={c.email}
                mensagem={c.mensagem}
                data={c.data}
                />
            ))}
        </div>
    );
}