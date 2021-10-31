import React from "react";
import { FlatList, View } from "react-native";
import FlatListMenuItem from "../components/FlatListMenuItem";
import HeaderTitle from "../components/HeaderTitle";
import ItemSeparator from "../components/ItemSeparator";
import { styles } from "../theme/appTheme";
import { items } from "../data/menuItems";


const HomeScreen = () => {
  return (
    <View style={{ flex: 1, ...styles.globalMargin }}>
      <FlatList
        data={items}
        renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={() => <HeaderTitle title="Menu Options" />}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};

export default HomeScreen;
