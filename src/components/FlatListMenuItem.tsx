import {useNavigation} from '@react-navigation/core';
import {useTheme} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {MenuItem} from '../interfaces/appInterfaces';
import {RootStackParams} from '../navigator/StackNavigator';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParams,
  'HomeScreen'
>;

interface Props {
  menuItem: MenuItem;
}

const FlatListMenuItem = ({menuItem: item}: Props) => {
  const router = useNavigation<HomeScreenNavigationProp>();
  const {theme} = useContext(ThemeContext);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => router.navigate(item.component as any)}>
      <View style={styles.container}>
        <Icon name={item.icon} color={theme.colors.primary} size={20} />
        <Text style={{...styles.itemText, color: theme.colors.primary}}>
          {item.name} - {item.icon}
        </Text>
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <Icon
            name="arrow-right-bold"
            color={theme.colors.primary}
            size={20}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginLeft: 5,
    fontSize: 20,
    color: 'black',
  },
});

export default FlatListMenuItem;
