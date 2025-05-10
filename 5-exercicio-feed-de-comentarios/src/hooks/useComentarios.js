import { useState } from "react";

export default function useComentarios(){
    const [comentarios, setComentarios] = useState([])
    const adicionarComentario = (email, mensagem) => {
        const novo = {email, mensagem, data: new Date().toLocaleString("pt-BR")};
        setComentarios(prev => [novo, ...prev])
    };
    return {comentarios, adicionarComentario}
}