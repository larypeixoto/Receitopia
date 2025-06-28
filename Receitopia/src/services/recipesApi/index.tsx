import axios, { AxiosResponse } from "axios";

const apiRecipes = axios.create({
    baseURL: 'https://api-receitas-pi.vercel.app/receitas'
});

export interface recipeProps {
    id: string,
    receita: string,
    tipo: string,
    link_imagem: string,
    ingredientes?: string,
    modo_preparo?: string
}


export function getRecipes(): Promise<AxiosResponse<recipeProps[], any>> {
    const url = '/todas';
    return apiRecipes.get(url);
}

export function getRecipesDetails(id: string): Promise<AxiosResponse<recipeProps, any>> {
    const url = '/' + id;
    return apiRecipes.get(url);
}



