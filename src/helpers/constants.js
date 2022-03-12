import {Dimensions} from 'react-native';

export const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} =
    Dimensions.get('window');

// Guideline sizes for iPhone 11 and height is a little bit more for android to get the best scale

const guidelineBaseWidth = 414;
const guidelineBaseHeight = 896;

const horizontalScale = (size) => (WINDOW_WIDTH / guidelineBaseWidth) * size;
const verticalScale = (size) => (WINDOW_HEIGHT / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
    size + (horizontalScale(size) - size) * factor;

export {horizontalScale, verticalScale, moderateScale};



import { Platform} from 'react-native';
import {getBundleId} from 'react-native-device-info';



export const colors = {
    white: '#FFFFFF',
    white_08: 'rgba(255, 255, 255, 0.8)',
    white_07: 'rgba(255, 255, 255, 0.7)',
    white_04: 'rgba(255, 255, 255, 0.4)',
    black: '#000000',
    black_05: 'rgba(0, 0, 0, 0.5)',
    black_025: 'rgba(0, 0, 0, 0.25)',
    darkGrey: '#454E5D',
    error: '#FF0000',
    orange: '#F37037',
    orange_06: 'rgba(243, 112, 55, 0.6)',
    lightGrey: '#959A9C',
    baffi_back: '#e8e8e8',
    inactiveButton: '#E5E5E5',

    inactiveButton_02: 'rgba(229, 229, 229, 0.2)',
    oxfordBlue: '#394353',
    tundora: '#414141',
    tundora_06: 'rgba(65, 65, 65, 0.6)',
    silver_02: 'rgba(184, 184, 184, 0.2)',
    silverChalice: '#A9A9A9',
    frenchGray: '#BCBBC1',
    mineShaft: '#292929',
    azureRadiance: '#007AFF',
    mercury: '#E1E0E0',
    alto: '#DADADA',
    silver: '#C4C4C4',
    borderLight: 'rgba(60, 60, 67, 0.36)',
};

export const sizes = {
    size0: moderateScale(44),
    size1: moderateScale(38),
    size1_2: moderateScale(36),
    size2: moderateScale(30),
    size2_2: moderateScale(28),
    size3: moderateScale(24),
    size4: moderateScale(20),
    size4_2: moderateScale(19),
    size4_3: moderateScale(18),
    size5: moderateScale(17),
    size6: moderateScale(15),
    size7: moderateScale(13),
    size8: moderateScale(12),
    size9: moderateScale(11),
    size10: moderateScale(8),
    button1: moderateScale(17),
    input1: moderateScale(19),
    input2: moderateScale(17),
    input3: moderateScale(15),
    message1: moderateScale(10),
    message2: moderateScale(13),
};

export const gradients = {
    blackAlpha: ['rgba(0, 0, 0, 0.588)', 'rgba(0, 0, 0, 0.7)'],
    actionButton: ['#F8D948', '#FFA900'],
    tourItem: ['rgba(0, 0, 0, 0)', colors.black],
};

export const fonts = {
    light: Platform.OS === 'ios' ? 'HelveticaNeue-Light' : 'Roboto-Light',
    regular: Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto',
    medium: Platform.OS === 'ios' ? 'HelveticaNeue-Medium' : 'Roboto-Medium',
    bold: Platform.OS === 'ios' ? 'HelveticaNeue-Bold' : 'Roboto-Bold',
    italic: Platform.OS === 'ios' ? 'HelveticaNeue-Italic' : 'Roboto-Italic',
};

export const runAfterInteractions = (callback, time = 500) => {
    setTimeout(callback, time);
};