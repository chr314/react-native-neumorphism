import React from 'react';
import { View, ViewStyle } from 'react-native';

type NeumorphismProps = {
  lightColor?: string;
  darkColor?: string;
  radius?: number;
  shapeType?: 'flat' | 'pressed' | 'basin';
  style?: ViewStyle;
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
    overflow: 'hidden',
  };

  return (
    // @ts-ignore
    <View style={[!props.disabled && style, props.style]}>
      {props.children}
    </View>
  );
}
