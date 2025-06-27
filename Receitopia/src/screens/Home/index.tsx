import { View, Text, Image, ScrollView, ActivityIndicator, FlatList } from "react-native";
import { useEffect, useState } from "react"
import { getRecipes, recipeProps } from "../../services/recipesApi";
import { Background } from "../../components/Background";
import { RecipeCard } from "../../components/Card/RecipeCard";




export const HomePage = () => {
    const [recipeList, setRecipeList] = useState<recipeProps[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(()=>{
        getRecipes()
            .then(({ data })=> {
                setRecipeList(data)
            })
            .catch((error)=>{
                console.error(error)
            })
            .finally(() => setLoading(false));
    }, [])

 return(
   <Background>
    <Text>Olaaaaa</Text>
     {loading ?
            <ActivityIndicator
                size={"large"}
            />
        :
            <FlatList
                data={recipeList}
                renderItem={({ item })=>{
                    return (
                        <RecipeCard
                            receita={item.receita}
                            id={item.id}   
                        /> 
                    )
                }}
            />
        }
    </Background>
 )


}