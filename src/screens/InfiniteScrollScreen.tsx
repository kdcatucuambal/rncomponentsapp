import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet, Image, ActivityIndicator } from "react-native";
import HeaderTitle from "../components/HeaderTitle";
import FadeInImage from "../components/FadeInImage";

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let index = 0; index < 5; index++) {
      newArray[index] = numbers.length + index;
    }
    setNumbers([...numbers, ...newArray]);
  };

  const renderItemText = (item: number) => {
    return <Text style={styles.textItem}>{item}</Text>;
  };

  const renderItemImg = (item: number) => {
    return (
      <FadeInImage uri={`https://picsum.photos/id/${item}/200/300`} />
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({ item }) => renderItemImg(item)}
        ListHeaderComponent={<HeaderTitle title="Infinite Scroll" />}
        onEndReached={() => loadMore()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View style={{
            height: 150,
            justifyContent: "center",
            alignItems: "center",
            width: "100%"
          }}>
            <ActivityIndicator size={25} color="#5856D6" />
          </View>)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textItem: {
    backgroundColor: "green",
    height: 150
  }
});

export default InfiniteScrollScreen;
