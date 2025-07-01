import { apiMock } from './api';

type Usuario = {
  name: string;
  email: string;
  senha: string;
  querofazer: any[]; 
  jafiz: any[];
};

async function criarUsuario(novoUsuario: Usuario) {
  const { data } = await apiMock.post("/usuarios", novoUsuario);
  return data;
}

async function getUsuarios() {
    const {data} = await apiMock.get("/usuarios")
    return data;
}

async function delUsuarios(idDel: string){ 
  console.log(idDel);
  try {
    const response = await apiMock.delete(`/usuarios/${idDel}`);
    console.log("Usuário deletado");
    return response; // caso queira retornar algo
  } catch (error) {
    console.error("Erro ao deletar", error);
    // Você pode também lançar o erro novamente se quiser tratá-lo fora da função
    throw error;
  }
}

export default {
  delUsuarios
}