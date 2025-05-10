import Comentarios from "./components/Comentario";
import FormularioComentario from "./components/FormularioComentario";
import ListaComentarios from "./components/ListaComentarios";
import useComentarios from "./hooks/useComentarios";

export default function App(){
  const { comentarios, adicionarComentario } = useComentarios();

  return(
    <div id="app">
      <h2>Área de comentários</h2>
      <FormularioComentario aoEnviar={adicionarComentario}/>
      <ListaComentarios comentarios={comentarios}/>
    </div>
  )
}