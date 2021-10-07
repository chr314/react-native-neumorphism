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
  if (props.shapeType === 'pressed') {
    let shadowProps = {
      shadowRadius: 3,
      shadowOffset: 5,
      shadowOpacity: 1,
    };
    return (
      <View
        style={[
          insetStyles.container,
          { borderRadius: props.radius },
          props.style,
        ]}
      >
        {props.children}
        {!props.disabled && (
          <>
            <Shadow
              type={'left'}
              {...shadowProps}
              shadowColor={props.darkColor}
            />
            <Shadow
              type={'top'}
              {...shadowProps}
              shadowColor={props.darkColor}
            />
            <Shadow
              type={'right'}
              {...shadowProps}
              shadowColor={props.lightColor}
            />
            <Shadow
              type={'bottom'}
              {...shadowProps}
              shadowColor={props.lightColor}
            />
          </>
        )}
      </View>
    );
  } else {
    return (
      <View
        style={{
          shadowColor: props.lightColor,
          shadowOffset: {
            width: -5,
            height: -5,
          },
          shadowOpacity: 1,
          shadowRadius: 3,
        }}
      >
        <View
          style={{
            shadowColor: props.darkColor,
            shadowOffset: {
              width: 5,
              height: 5,
            },
            shadowOpacity: 1,
            shadowRadius: 3,
          }}
        >
          <View style={{ borderRadius: props.radius, overflow: 'hidden' }}>
            {props.children}
          </View>
        </View>
      </View>
    );
  }
}

const Shadow = ({
  type,
  shadowColor,
  shadowOpacity,
  shadowOffset,
  shadowRadius,
}: ShadowProps) => {
  if (shadowOffset === undefined) {
    shadowOffset = 5;
  }

  let offsets = {
    left: shadowOffset,
    top: shadowOffset,
    right: -shadowOffset,
    bottom: -shadowOffset,
  };
  const offsetStyle = {
    width: ['left', 'right'].includes(type) ? offsets[type] : 0,
    height: ['top', 'bottom'].includes(type) ? offsets[type] : 0,
  };

  const shadowStyle = {
    shadowColor: shadowColor,
    shadowOffset: offsetStyle,
    shadowRadius: shadowRadius,
    shadowOpacity: shadowOpacity,
  };
  return <View style={[insetStyles.shadow, insetStyles[type], shadowStyle]} />;
};

interface ShadowProps {
  type: 'left' | 'top' | 'right' | 'bottom';
  shadowColor?: string;
  shadowOpacity?: number;
  shadowOffset?: number;
  shadowRadius?: number;
}

const insetStyles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  shadow: {
    position: 'absolute',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  left: {
    width: 10,
    height: '100%',
    left: -10,
  },
  top: {
    height: 10,
    width: '100%',
    top: -10,
  },
  right: {
    width: 10,
    height: '100%',
    right: -10,
  },
  bottom: {
    height: 10,
    width: '100%',
    bottom: -10,
  },
});
