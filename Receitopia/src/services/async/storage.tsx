import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_ID_KEY = '@user:id';
const RECEITA_ID_KAY = '@receita:id';

 async function saveData(id: string) {
    try {
        await AsyncStorage.setItem(USER_ID_KEY, id);
        console.log("Dados salvos!");
    } catch (error) {
        console.error("Erro ao salvar:", error);
    }
}



async function getUserId(): Promise<string | null> {
  try {
    const id = await AsyncStorage.getItem(USER_ID_KEY);
    return id;
  } catch (error) {
    console.error('Erro ao buscar o ID:', error);
    return null;
  }
}
async function removeData() {
    try {
        await AsyncStorage.removeItem(USER_ID_KEY);
        console.log("Dados removidos!");
    } catch (error) {
        console.error("Erro ao remover:", error);
    }
};

async function limparTudo() {
  try {
    await AsyncStorage.clear();
    console.log("Todos os dados foram removidos!");
  } catch (error) {
    console.error("Erro ao limpar os dados:", error);
  }
};

async function saveIdReceita(id: string) {
    try {
        await AsyncStorage.setItem(RECEITA_ID_KAY, String(id));
        console.log("Dados salvos!");
    } catch (error) {
        console.error("Erro ao salvar:", error);
    }
}

async function getReceitaId(): Promise<string | null> {
  try {
    const id = await AsyncStorage.getItem(RECEITA_ID_KAY);
    return id;
  } catch (error) {
    console.error('Erro ao buscar o ID:', error);
    return null;
  }
}
export default {
  saveData,
  getUserId,
  removeData,
  saveIdReceita,
  getReceitaId,
  limparTudo
};