import React, {useState} from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let index = 0; index < 5; index++) {
      newArray[index] = numbers.length + index;
    }
    setNumbers([...numbers, ...newArray]);
  };

  const renderItem = (item: number) => {
    return <Text style={styles.textItem}>{item}</Text>;
  };

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={<HeaderTitle title="Infinte Scroll" />}
        onEndReached={() => loadMore()}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textItem: {
    backgroundColor: 'green',
    height: 150,
  },
});

export default InfiniteScrollScreen;
