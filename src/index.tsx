import { View, Platform } from 'react-native';
import NeumorphismAndroid from './index.android';
import NeumorphismIos from './index.ios';
import NeumorphismWeb from './index.web';

const Neumorphism = () => {
  switch (Platform.OS) {
    case 'android':
      return NeumorphismAndroid;
    case 'ios':
      return NeumorphismIos;
    case 'web':
      return NeumorphismWeb;
    default:
      return View;
  }
};

export default Neumorphism;
