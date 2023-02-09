import { View, FlatList } from "react-native"
//compo
import CategorieItem from "./CategorieItem";
//data
import { commonCategories } from "../assets/constants";

const Categories = ({categorieSelected, setCategorieSelected}) => {

    
    
    return (
        <View>
            <FlatList 
                data={commonCategories}
                renderItem={({item}) => (
                    <CategorieItem 
                        name={item.name} 
                        imgUrl={item.imgUrl}  
                        setCategorieSelected={setCategorieSelected}
                        categorieSelected={categorieSelected}
                    />
                )}
                horizontal
                keyExtractor={(item) => item.name}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}
export default Categories;