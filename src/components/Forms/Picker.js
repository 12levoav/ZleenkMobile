import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {
  Keyboard,
  StyleSheet,
  TouchableOpacity,
  View,
  Modal,
  Platform,
    Text
} from 'react-native';
import {Picker as WheelPickerIos} from '@react-native-picker/picker';
import {WheelPicker as WheelPickerAndroid} from 'react-native-wheel-picker-android';
import {colors, fonts, sizes, WINDOW_WIDTH} from '../../helpers/constants';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../helpers/constants';
import Icon from '../Icon';

import {runAfterInteractions} from '../../helpers/constants';

/**
 *
 * @typedef PickerProps
 * @property {Object} style
 * @property {string} title
 * @property {string} subtitle
 * @property {string} leftLabel
 * @property {Object} data
 * @property {string} value
 * @property {function} onSelect
 * @property {boolean} error
 * @property {string} color
 * @property {boolean} disabled
 */

/**
 * Picker component
 *
 * @param {PickerProps} props - props of component
 */
const Picker = ({
  style,
  title,
  subtitle = title,
  leftLabel,
  data = [],
  value = '',
  valueForCheck = value,
  onSelect,
  error,
  color = colors.black,
  unselectedColor = 'grey',
  disabled,
}) => {
  const [isVisible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(valueForCheck || data[0]);

  useEffect(() => {
    if (data[0] && (!selectedItem || !data.includes(selectedItem))) {
      setSelectedItem(data[0]);
    }
  }, [data, selectedItem]);

  const onItemSelected = useCallback((value) => {
    setSelectedItem(value);
  }, []);

  const handleSelect = useCallback(() => {
    onSelect(selectedItem);
    setVisible(false);
  }, [onSelect, selectedItem]);

  const checkedColor = useMemo(() => {
    if (error) return'red';
    if (value) return color;

    return unselectedColor;
  }, [color, error, unselectedColor, value]);

  const borderColor = useMemo(() => {
    if (error) return 'red';

    return 'grey';
  }, [error]);

  const handlePress = () => {
    Keyboard.dismiss();
    runAfterInteractions(() => {
      setVisible(true);
    }, 100);
  };

  return (
    <>
      <TouchableOpacity
        style={[styles.root, {borderBottomColor: borderColor}, style]}
        onPress={handlePress}
        disabled={disabled}>
        <View style={styles.container}>
          <Text style={styles.title} color={checkedColor} size="4_2">
            {leftLabel} {value || value === 0 ? value : title}
          </Text>
          <Icon icon="arrowDown" />
        </View>
      </TouchableOpacity>
      <Modal
        visible={isVisible}
        onRequestClose={() => setVisible(false)}
        animationType="none"
        transparent>
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPress={() => setVisible(false)}>
          <TouchableOpacity activeOpacity={1} style={styles.contentStyle}>
            <View style={styles.head}>
              <Text size={6} font="medium" color={colors.mineShaft}>
                {subtitle}
              </Text>
              <TouchableOpacity style={styles.done} onPress={handleSelect}>
                <Text size={6} font="medium" color={colors.azureRadiance}>
                  Վերջ
                </Text>
              </TouchableOpacity>
            </View>
            {Platform.OS === 'ios' ? (
              <>
                <WheelPickerIos
                  selectedValue={selectedItem}
                  onValueChange={onItemSelected}>
                  {data.map((item) => (
                    <WheelPickerIos.Item label={item} value={item} key={item} />
                  ))}
                </WheelPickerIos>
              </>
            ) : (
              <WheelPickerAndroid
                selectedItem={data.indexOf(selectedItem)}
                onItemSelected={(i) => onItemSelected(data[i])}
                style={styles.androidPicker}
                itemTextFontFamily={fonts.regular}
                itemTextSize={sizes.size3}
                selectedItemTextFontFamily={fonts.regular}
                selectedItemTextSize={sizes.size3}
                data={data}
                hideIndicator
              />
            )}
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    borderBottomWidth: 0.5,
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(15),
    marginBottom: verticalScale(15),
    width: 300

  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    lineHeight: moderateScale(22),
    marginLeft: -3,
  },
  picker: {
    backgroundColor: colors.white,
    width: 300
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
    borderBottomColor: colors.mercury,
    borderBottomWidth: 0.5,
    top: -20,
  },
  done: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  contentStyle: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: colors.white,
    height: verticalScale(320),
    width: WINDOW_WIDTH,
    paddingTop: verticalScale(20),
  },
  androidPicker: {
    flex: 1,
    marginTop: verticalScale(30),

  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: colors.black_05,
  },
});

export default memo(Picker);
