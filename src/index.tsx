import { View, ViewStyle } from 'react-native';
import React from 'react';

type NeumorphismProps = {
  lightColor?: string;
  darkColor?: string;
  radius?: number;
  shapeType?: 'flat' | 'pressed' | 'basin';
  backgroundColor?: string;
  style?: ViewStyle;
  color?: string;
  children?: React.ReactNode;
};

export default function (props: NeumorphismProps) {
  return <View>{props.children}</View>;
}
