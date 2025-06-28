import axios, { AxiosResponse } from "axios";

const apiRecipes = axios.create({
    baseURL: 'https://api-receitas-pi.vercel.app/receitas'
});

export interface recipeProps {
    id: string,
    receita: string,
    tipo: string,
    link_imagem?: string,
}


export function getRecipes(): Promise<AxiosResponse<recipeProps[], any>> {
    const url = '/todas';
    return apiRecipes.get(url);
}

export function getRecipeType(tipo: string): Promise<AxiosResponse<recipeProps[], any>> {
    return apiRecipes.get(`/tipo/${tipo}`);
}
