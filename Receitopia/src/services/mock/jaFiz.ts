import { apiMock2 } from './api';

type Conteudo = {
    idCliente: string,
    idReceita: string
};

async function addJaFiz(novoConteudo: Conteudo) {
    const { data } = await apiMock2.post("/jaFiz", novoConteudo);
    return data;
 
} 

async function listarJaFiz(idCli: string) {
    const {data} = await apiMock2.get("/jaFiz?idCliente=" + idCli)
    return data;
}

// async function delUsuarios(idDel: string){ 
//   console.log(idDel);
//   try {
//     const response = await apiMock.delete(`/usuarios/${idDel}`);
//     console.log("Usuário deletado");
//     return response; 
//   } catch (error) {
//     console.error("Erro ao deletar", error);

//     throw error;
//   }
// }

export default {
  addJaFiz,
  listarJaFiz
}