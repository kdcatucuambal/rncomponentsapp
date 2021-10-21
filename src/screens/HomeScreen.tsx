import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';

interface MenuItem {
  name: string;
  icon: string;
  components: string;
}

const items: MenuItem[] = [
  {name: 'Animation 101', icon: 'account', components: 'Animaion101Screen'},
  {name: 'Animation 102', icon: 'ab-testing', components: ''},
  {name: 'Animation 103', icon: 'airplane-alert', components: ''},
];

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const renderMenuItem = (item: MenuItem) => {
    return (
      <View>
        <Text>
          {item.name} - {item.icon}
        </Text>
      </View>
    );
  };

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
          marginVertical: 5
        }}></View>
    );
  };

  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={items}
        renderItem={({item, index}) => renderMenuItem(item)}
        keyExtractor={item => item.name}
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={() => itemSeparator()}
      />
    </View>
  );
};

export default HomeScreen;
