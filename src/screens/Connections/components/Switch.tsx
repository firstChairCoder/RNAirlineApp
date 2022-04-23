import React, { useRef } from "react";
import type { ViewStyle } from "react-native";
import {
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Icon } from "@components";
import { colors, iconTypes } from "@constants";

const iconCommonStyle: ViewStyle = {
  position: "absolute",
  zIndex: 10,
  top: 8,
};

const containerWidth = 60;
const containerHeight = 32;
const containerPadding = 4;
const circleSize = 24;

const travelDistance = containerWidth - 2 * containerPadding - circleSize;
const styles = StyleSheet.create({
  container: {
    width: containerWidth,
    height: containerHeight,
    padding: containerPadding,
    backgroundColor: colors.white,
    borderRadius: 16,
  },
  iconLeft: {
    ...iconCommonStyle,
    left: 8,
  },
  iconRight: {
    ...iconCommonStyle,
    right: 8,
  },
  circle: {
    backgroundColor: colors.blue,
    width: circleSize,
    height: circleSize,
    borderRadius: circleSize / 2,
  },
});

interface SwitchProps {
  toggled: boolean;
  setToggled: (value: boolean) => void;
}

const Switch = ({ toggled, setToggled }: SwitchProps) => {
  const animation = useRef(new Animated.Value(0)).current;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Animated.timing(animation, {
          duration: 200,
          toValue: toggled ? 0 : 1,
          useNativeDriver: true,
        }).start();
        setToggled(!toggled);
      }}
    >
      <View style={styles.container}>
        <View style={styles.iconLeft}>
          <Icon
            name={iconTypes.list}
            size={16}
            color={toggled ? colors.blue : colors.white}
          />
        </View>
        <View style={styles.iconRight}>
          <Icon
            name={iconTypes.map}
            size={16}
            color={toggled ? colors.white : colors.blue}
          />
        </View>
        <Animated.View
          style={[
            styles.circle,
            {
              transform: [
                {
                  translateX: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, travelDistance],
                  }),
                },
              ],
            },
          ]}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Switch;
