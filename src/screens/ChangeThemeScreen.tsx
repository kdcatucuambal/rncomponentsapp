import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import HeaderTitle from '../components/HeaderTitle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const ChangeThemeScreen = () => {
  const {setDarkTheme, setLightTheme, theme} = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Theme" />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          onPress={setLightTheme}
          activeOpacity={0.7}
          style={{
            backgroundColor: theme.colors.primary,
            justifyContent: 'center',
            width: 150,
            height: 60,
            borderRadius: 20,
          }}>
          <Text style={{color: theme.colors.background, textAlign: 'center', fontSize: 20}}>
            Light
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={setDarkTheme}
          activeOpacity={0.7}
          style={{
            backgroundColor: theme.colors.primary,
            justifyContent: 'center',
            width: 150,
            height: 60,
            borderRadius: 20,
          }}>
          <Text style={{color: theme.colors.background, textAlign: 'center', fontSize: 20}}>
            Dark
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangeThemeScreen;
