import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import CustomSwitch from '../components/CustomSwitch';

const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const onChange = (value: boolean, field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value,
    });
  };

  // const onTest = ()=>{

  // }

  return (
    <View style={{marginHorizontal: 20}}>
      <HeaderTitle title="Swithces" />
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>is Active</Text>
        <CustomSwitch
          isOn={state.isActive}
          onChange={value => {
            onChange(value, 'isActive');
          }}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>is Hungry</Text>
        <CustomSwitch
          isOn={state.isHungry}
          onChange={value => {
            onChange(value, 'isHungry');
          }}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>is Happy</Text>
        <CustomSwitch
          isOn={state.isHappy}
          onChange={value => {
            onChange(value, 'isHappy');
          }}
        />
      </View>
      <Text style={styles.switchText}>{JSON.stringify(state, null, 5)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  switchText: {
    fontSize: 25,
    color: 'black',
  },
  switchRow: {
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default SwitchScreen;
