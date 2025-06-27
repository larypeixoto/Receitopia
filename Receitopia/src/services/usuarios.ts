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
    const {data} = await apiMock.get('')
    return data;
}