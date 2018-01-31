import { Dimensions, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const isIphoneX = () => {
  let isIPhone = false;
  if (DeviceInfo.getModel() === 'iPhone X') isIPhone = true;

  return isIPhone;
};

export { isIphoneX };
