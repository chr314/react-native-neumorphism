import { requireNativeComponent, ViewStyle } from 'react-native';

type NeumorphismProps = {
  color: string;
  style: ViewStyle;
};

export const NeumorphismViewManager = requireNativeComponent<NeumorphismProps>(
'NeumorphismView'
);

export default NeumorphismViewManager;
