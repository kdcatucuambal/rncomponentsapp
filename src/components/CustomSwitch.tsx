import React, {useState} from 'react';
import {Platform, Switch} from 'react-native';

interface Props {
  isOn: boolean;
  onChange?: (value: boolean) => void;
}

const CustomSwitch = ({isOn, onChange}: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    if (onChange) {
      onChange(!isEnabled);
    }
  };

  return (
    <Switch
      trackColor={{false: '#D9D9DB', true: 'black'}}
      thumbColor={Platform.OS === 'android' ? '#FAFBFC' : 'white'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default CustomSwitch;
