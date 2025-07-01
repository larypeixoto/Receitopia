import { apiMock } from './api';

type Usuario = {
  name: string;
  email: string;
  senha: string;
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
    return response; 
  } catch (error) {
    console.error("Erro ao deletar", error);

    throw error;
  }
}

export default {
  delUsuarios
}