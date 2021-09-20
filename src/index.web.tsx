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
  let cssShadow = (inset = false) => {
    let insetCss = inset ? 'inset' : '';
    return `${insetCss} 6px 6px 8px ${props.darkColor}, ${insetCss} -6px -6px 8px ${props.lightColor}`;
  };
  let style = {
    boxShadow:
      cssShadow(props.shapeType === 'pressed') +
      (props.shapeType === 'basin' ? ',' + cssShadow(true) : ''),
    borderRadius: props.radius,
  };
  if (!props.disabled) {
    return <View style={style}>{props.children}</View>;
  } else {
    return <View>{props.children}</View>;
  }
}
