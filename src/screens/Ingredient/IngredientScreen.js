import React, { useLayoutEffect } from "react";
import { FlatList, ScrollView, Text, View, Image, TouchableHighlight } from "react-native";
import styles from "./styles";
import { getIngredientUrl, getRecipesByIngredient, getCategoryName } from "../../data/MockDataAPI";

 const IngredientScreen=()=> {
  
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 100,
        padding: 20,
      }}>
     
      <Text>messageri heeereee later</Text>
    </View>
  );
};
export default IngredientScreen;
