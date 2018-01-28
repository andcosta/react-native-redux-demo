import { Dimensions, Platform } from 'react-native';

const isIphoneX = () => {
  const dimen = Dimensions.get('window');
  let isIPhone = false;

  if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS && (dimen.height === 812 || dimen.width === 812)) {
    isIPhone = true;
  }

  return isIPhone;
};

export { isIphoneX };
