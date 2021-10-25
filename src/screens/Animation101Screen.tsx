import React, {useRef} from 'react';
import {Animated, Button, Easing, StyleSheet, View} from 'react-native';
import useAnimation from '../hooks/useAnimation';

const Animation101Screen = () => {
  const {
    fadeIn, 
    fadeOut, 
    position, 
    opacity, 
    startMovingPosition} = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          marginBottom: 20,
          opacity,
          transform: [{translateX: position}],
        }}></Animated.View>
      <Button
        title="Fade In"
        onPress={() => {
          fadeIn(); //Desvanecer
          startMovingPosition(100) //Moverle al objet;
        }}
      />
      <Button title="Fade Out" onPress={fadeOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});

export default Animation101Screen;
