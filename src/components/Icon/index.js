import React, {memo} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {moderateScale} from '../../helpers/constants';
import {icons} from './icons';

const createSizeStyle = (size) =>
  size ? {height: moderateScale(size), width: moderateScale(size)} : null;
const createColorStyle = (color) => (color ? {tintColor: color} : null);

/**
 *
 * @typedef IconProps
 * @property {Object} style
 * @property {string} icon - name of the icon
 * @property {Object} containerStyle - styles of the container of icon
 * @property {string} color - color of the icon
 */

/**
 * Icon component
 *
 * @param {IconProps} props - props of component
 */
const Icon = function ({style, icon, containerStyle, size, color, ...rest}) {
  return (
    <View style={containerStyle} {...rest}>
      <Image
        style={[
          styles.root,
          style,
          createSizeStyle(size),
          createColorStyle(color),
        ]}
        source={icons[icon]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    resizeMode: 'contain',
  },
});

export default memo(Icon);
