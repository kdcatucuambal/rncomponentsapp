import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
  Text,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import HeaderTitle from '../components/HeaderTitle';
import {useForm} from '../hooks/useForm';
import CustomSwitch from '../components/CustomSwitch';

interface FormI {
  name: string;
  email: string;
  phone: string;
  subscribe: boolean;
}

const TextInputScreen = () => {
  const {form, onChange} = useForm<FormI>({
    name: '',
    email: '',
    phone: '',
    subscribe: false,
  });

  return (
    <ScrollView>
      <HeaderTitle title="TextInputs" />
      <HeaderTitle title={JSON.stringify(form, null, 3)} size={20} />
      <KeyboardAvoidingView>
        <TextInput
          style={styles.input}
          placeholder="Type your name"
          keyboardType="default"
          autoCapitalize="words"
        //   secureTextEntry={true}
          onChangeText={value => onChange(value, 'name')}
        />
        <TextInput
          style={styles.input}
          placeholder="Type your email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={value => onChange(value, 'email')}
        />
        <TextInput
          style={styles.input}
          placeholder="Type your phone"
          keyboardType="phone-pad"
          onChangeText={value => onChange(value, 'phone')}
        />
      </KeyboardAvoidingView>
      <View style={styles.switchSubsView}>
        <Text style={{color: 'gray'}}>Do you want subscribe?</Text>
        <CustomSwitch
          isOn={form.subscribe}
          onChange={value => onChange(value, 'subscribe')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderColor: 'gray',
    borderRadius: 10,
    marginVertical: 10,
  },
  switchSubsView: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 5,
    justifyContent: 'flex-end',
  },
});

export default TextInputScreen;
