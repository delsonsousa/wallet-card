import React, { useEffect } from "react";
import { View, Animated, Easing } from "react-native";
import { Container, ElementDown, ElementUp } from "./styles";

const AnimatedElementUp = Animated.createAnimatedComponent(ElementUp);
const AnimatedElementDown = Animated.createAnimatedComponent(ElementDown);

// type StyleComponentProps = {
//   y: number;
//   x: number;
// };

export const BackgroundElements = () => {
  const opacityAnim = new Animated.Value(0);
  const rotationAnim = new Animated.Value(0);

  const rotationUp = rotationAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["-25deg", "-35deg"],
  });

  const rotationDown = rotationAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["-30deg", "-40deg"],
  });

  useEffect(() => {
    // Animação de opacidade
    const opacityAnimationUp = Animated.timing(opacityAnim, {
      toValue: 0.2,
      duration: 4000,
      useNativeDriver: true,
    });

    // Animação de rotação
    const rotationAnimationUp = Animated.timing(rotationAnim, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    const opacityAnimationDown = Animated.timing(opacityAnim, {
      toValue: 0.2,
      duration: 4000,
      useNativeDriver: true,
    });

    // Animação de rotação
    const rotationAnimationDown = Animated.timing(rotationAnim, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    });

    // Iniciar ambas as animações simultaneamente
    Animated.parallel([
      opacityAnimationUp,
      rotationAnimationUp,
      opacityAnimationDown,
      rotationAnimationDown,
    ]).start();
  }, []);

  return (
    <Container>
      <AnimatedElementUp
        style={{
          opacity: opacityAnim,
          transform: [{ rotate: rotationUp }],
        }}
      />
      <AnimatedElementDown
        style={{
          opacity: opacityAnim,
          transform: [{ rotate: rotationDown }],
        }}
      />
    </Container>
  );
};
