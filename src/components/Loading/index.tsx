import { useEffect, useRef, useState } from "react";
import { Container, LoadIndicator } from "./styles";
import { Animated } from "react-native";
import { LoadIndicatorWrapper } from "./styles";
import { BackgroundElements } from "../BackgroundElements";

const AnimatedLoadIndicatorWrapper =
  Animated.createAnimatedComponent(LoadIndicatorWrapper);

export function Loading() {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [fillColor, setFillColor] = useState("#12C2E9");

  useEffect(() => {
    scaleAnim.addListener(({ value }) => {
      setFillColor(value < 1.2 ? "#12C2E9" : "#A5FF32");
    });

    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.6,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();

    return () => scaleAnim.removeAllListeners();
  }, [scaleAnim]);

  return (
    <Container>
      {/* <BackgroundElements x={} y /> */}
      <AnimatedLoadIndicatorWrapper
        style={{ transform: [{ scale: scaleAnim }] }}
      >
        <LoadIndicator fill={fillColor} />
      </AnimatedLoadIndicatorWrapper>
    </Container>
  );
}
