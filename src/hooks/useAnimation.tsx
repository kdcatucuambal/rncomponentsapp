import React, {useRef} from 'react';
import {Animated, Easing} from 'react-native';

const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current;
  const position = useRef(new Animated.Value(0)).current;

  
  //Take the current opacity value
  const fadeIn = () => {
    opacity.setValue(0);
    Animated.timing(opacity, {
      toValue: 1, //al valor que debe ir
      duration: 300, //Duración de la animación
      useNativeDriver: true, //Acelerar por hardware
    }).start(() => {
      console.log('The animation ended');
    });
  };

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0, //al valor que debe ir
      duration: 300, //Duración de la animación
      useNativeDriver: true, //Acelerar por hardware
    }).start();
  };

  const startMovingPosition = (
    initPosition: number,
    duration: number = 3000,
  ) => {
    position.setValue(initPosition);
    Animated.timing(position, {
      toValue: 0,
      duration,
      useNativeDriver: true,
      // easing: Easing.bounce
    }).start();
  };

  return {
    fadeIn,
    fadeOut,
    startMovingPosition,
    opacity,
    position,
  };
};

export default useAnimation;
