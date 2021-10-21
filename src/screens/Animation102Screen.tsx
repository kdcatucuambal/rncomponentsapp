import React from 'react';
import {StyleSheet, View} from 'react-native';

const Animation102Screen = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{...styles.purpleBox}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  purpleBox: {
    backgroundColor: 'red',
    width: 150,
    height: 150,
  },
});

export default Animation102Screen;
