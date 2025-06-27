import axios, { AxiosResponse } from "axios";

const apiRecipes = axios.create({
    baseURL: 'https://api-receitas-pi.vercel.app/receitas'
});

export interface recipeProps {
    id: string,
    receita: string,
}


export function getRecipes(): Promise<AxiosResponse<recipeProps[], any>> {
    const url = '/todas';
    return apiRecipes.get(url);
}