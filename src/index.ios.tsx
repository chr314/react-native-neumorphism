import React from 'react';
import { View, ViewStyle } from 'react-native';

type NeumorphismProps = {
  lightColor?: string;
  darkColor?: string;
  radius?: number;
  shapeType?: 'flat' | 'pressed' | 'basin';
  backgroundColor?: string;
  style?: ViewStyle;
  color?: string;
  disabled?: boolean;
  children?: React.ReactNode;
};

export default function (props: NeumorphismProps) {
  if (!props.disabled) {
    return (
      <View
        style={{
          shadowColor: props.lightColor,
          shadowOffset: {
            width: -6,
            height: -6,
          },
          shadowOpacity: 0.5,
          shadowRadius: props.radius,
        }}
      >
        <View
          style={{
            shadowColor: props.darkColor,
            shadowOffset: {
              width: 6,
              height: 6,
            },
            shadowOpacity: 0.7,
            shadowRadius: props.radius,
          }}
        >
          <View>{props.children}</View>
        </View>
      </View>
    );
  }
  return <View>{props.children}</View>;
}
