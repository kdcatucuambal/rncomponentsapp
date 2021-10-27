import React, {useState} from 'react';
import {RefreshControl, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {namesDB, getRandomArbitrary} from '../data/names';

const PullToRefScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setData('getting random..');
    setRefreshing(true);
    setTimeout(() => {
      console.log('Finished');
      const random = getRandomArbitrary(0, namesDB.length);
      setData(namesDB[random]);
      setRefreshing(false);
    }, 1500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor="#2E4FA4"
          colors={['white', 'red', 'black']}
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to refresh" />
        {data && <HeaderTitle title={data} size={20} />}
      </View>
    </ScrollView>
  );
};

export default PullToRefScreen;
