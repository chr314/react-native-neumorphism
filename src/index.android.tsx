import { requireNativeComponent, ViewStyle } from 'react-native';

type NeumorphismProps = {
  lightColor?: string;
  darkColor?: string;
  radius?: number;
  shapeType?: 'flat' | 'pressed' | 'basin';
  backgroundColor?: string;
  style?: ViewStyle;
  color?: string;
};

export default requireNativeComponent<NeumorphismProps>('NeumorphismCardView');
