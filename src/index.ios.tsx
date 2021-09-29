import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

type NeumorphismProps = {
  lightColor?: string;
  darkColor?: string;
  radius?: number;
  shapeType?: 'flat' | 'pressed' | 'basin';
  style?: ViewStyle;
  disabled?: boolean;
  children?: React.ReactNode;
};

export default function Neumorphism(props: NeumorphismProps) {
  let shadowProps = {
    shadowRadius: 3,
    shadowOffset: 5,
    shadowOpacity: 0.5,
    inset: props.shapeType === 'pressed',
  };
  return (
    <View style={[styles.container, props.style]}>
      {props.children}
      {!props.disabled && (
        <>
          <Shadow
            type={'left'}
            {...shadowProps}
            shadowColor={props.lightColor}
          />
          <Shadow
            type={'top'}
            {...shadowProps}
            shadowColor={props.lightColor}
          />
          <Shadow
            type={'right'}
            {...shadowProps}
            shadowColor={props.darkColor}
          />
          <Shadow
            type={'bottom'}
            {...shadowProps}
            shadowColor={props.darkColor}
          />
        </>
      )}
    </View>
  );
}

const Shadow = ({
  type,
  inset,
  shadowColor,
  shadowOpacity,
  shadowOffset,
  shadowRadius,
}: ShadowProps) => {
  const offsetStyle = {
    width: ['left', 'right'].includes(type) ? shadowOffset || 5 : 0,
    height: ['top', 'bottom'].includes(type) ? shadowOffset || 5 : 0,
  };

  const shadowStyle = {
    shadowColor: shadowColor,
    shadowOffset: offsetStyle,
    shadowRadius: shadowRadius,
    shadowOpacity: shadowOpacity,
  };
  return (
    <View
      style={[
        styles.shadow,
        styles[type],
        { [type]: inset ? -10 : 0 },
        shadowStyle,
      ]}
    />
  );
};

interface ShadowProps {
  type: 'left' | 'top' | 'right' | 'bottom';
  shadowColor?: string;
  shadowOpacity?: number;
  shadowOffset?: number;
  shadowRadius?: number;
  inset?: boolean;
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    height: '100%',
  },
  shadow: {
    position: 'absolute',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  left: {
    width: 10,
    height: '100%',
  },
  top: {
    height: 10,
    width: '100%',
  },
  right: {
    width: 10,
    height: '100%',
  },
  bottom: {
    height: 10,
    width: '100%',
  },
});
