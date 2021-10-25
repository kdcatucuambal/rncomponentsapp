import React, {useRef} from 'react';
import {Animated, PanResponder, StyleSheet, Text, View} from 'react-native';

const Animation102Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const [x, y] = pan.getTranslateTransform();

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ],
      {useNativeDriver: false},
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: 0, y: 0}, useNativeDriver: false}, // Back to zero
      ).start();
    },
  });
  return (
    <View style={{...styles.container}}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[styles.box, pan.getLayout()]}>
        <Text style={styles.letter}>K</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#F5D34A',
    width: 150,
    height: 150,
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: 'center',
  },
  letter: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});

export default Animation102Screen;
