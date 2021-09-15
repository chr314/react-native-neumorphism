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
  let style = {
    boxShadow:
      props.shapeType === 'pressed'
        ? `inset 6px 6px 7px ${props.darkColor}, inset -6px -6px 7px ${props.lightColor}`
        : `6px 6px 12px ${props.darkColor},-6px -6px 12px ${props.lightColor}`,
    borderRadius: props.radius,
  };
  if (!props.disabled) {
    return <View style={style}>{props.children}</View>;
  } else {
    return <View>{props.children}</View>;
  }
}
