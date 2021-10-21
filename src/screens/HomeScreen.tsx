import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import FlatListMenuItem from '../components/FlatListMenuItem';
import {MenuItem} from '../interfaces/appInterfaces';
import {styles} from '../theme/appTheme';

const items: MenuItem[] = [
  {name: 'Animation 101', icon: 'account', component: 'Animation101Screen'},
  {name: 'Animation 102', icon: 'ab-testing', component: 'Animation102Screen'},
  {name: 'Animation 103', icon: 'airplane', component: ''},
];

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const renderListHeader = () => {
    return (
      <View style={{marginTop: top, marginBottom: 20}}>
        <Text style={styles.title}>Menu Options</Text>
      </View>
    );
  };

  const itemSeparator = () => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          opacity: 0.4,
          marginVertical: 5,
        }}></View>
    );
  };

  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={items}
        renderItem={({item, index}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.name}
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={() => itemSeparator()}
      />
    </View>
  );
};

export default HomeScreen;
